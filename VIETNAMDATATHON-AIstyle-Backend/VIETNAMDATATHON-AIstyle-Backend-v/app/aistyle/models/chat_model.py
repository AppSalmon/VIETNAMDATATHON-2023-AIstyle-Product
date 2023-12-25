from app.aistyle.vectordb import AIStyleVectorDB
from app.aistyle.prompts import (
    system_prompt,
    intent_classification_prompt,
    brand_compare_prompt_template,
)
from app.aistyle.utils import get_summarize_product_prompt
from app.aistyle.functional import parse_query
from app.aistyle.configs import OPENAI_API_KEY
from app.aistyle.models.vision_model import get_describe_imgs_of_a_product

from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.schema import HumanMessage, AIMessage, SystemMessage


class AIStyleBot:
    def __init__(self):
        self.intent_classification_model = ChatOpenAI(
            openai_api_key=OPENAI_API_KEY, model_name="gpt-4"
        )
        self.chat_model = ChatOpenAI(openai_api_key=OPENAI_API_KEY, model_name="gpt-4")
        self.msgs = [SystemMessage(content=system_prompt)]

        self.vector_db = AIStyleVectorDB()

    def classify_intent(self, query: str):
        """
        query: already parse

        correctly identify what is the main intent of user
        # Search & Recommend
            1. search & recommend product by {'text': string, 'image': Optional[image_url]}
            2. search & recommend product by {'product_id': int}
            3. combine both: search & recommend both: {'text', 'product_id': 'image'},
                    user may want to find products similar or not similar to product provided
        # Virtual Try-on
            - just run the DALL-E and wait
        # Compare price & retailers
        # Compare brands: Nike & Addidas
        # this will be implement outside
        """
        msgs = ChatPromptTemplate.from_messages(
            [("system", intent_classification_prompt), ("human", "{query}")]
        ).format_messages(query=query)

        bot_answer = self.intent_classification_model.invoke(msgs).content

        return bot_answer

    def parse_query(self, query):
        """
        query composed of {
            'text': ..., -> joint text
            'image_urls': ..., -> using gpt-vision to describe
            'product': -> query data and parse text
        }
        """
        return parse_query(query["text"], query["products"], query["image_urls"])

    def ask(self, raw_query, save_chat: bool = True):
        query = self.parse_query(raw_query)
        intent = self.classify_intent(query)

        return_data = {"user_intent": intent}

        if "search" in intent or "recommend" in intent:
            list_products = self.vector_db.search_and_recommend_list_products(query)
            ask_bot_prompt = get_summarize_product_prompt(query, list_products)
            return_data["list_product_to_search_recommend"] = list_products
        elif "brand_compare" in intent or "compare" in intent:
            brand = raw_query["products"][0]["brand"]
            product = raw_query["products"][0]
            contrast_product = self.vector_db.search_contrast_brand(query, brand)
            if brand.lower() == "nike":
                nike = product
                adidas = contrast_product
            else:
                adidas = product
                nike = contrast_product

            nike_describe = get_describe_imgs_of_a_product(nike)
            adidas_describe = get_describe_imgs_of_a_product(adidas)
            ask_bot_prompt = brand_compare_prompt_template.format(
                nike=nike,
                adidas=adidas,
                nike_img_describe=nike_describe,
                adidas_img_describe=adidas_describe,
            )
        elif "virtual_try_on_and_design":
            ask_bot_prompt = "Return to user: Comming soon!"
        else:  # another intent
            # simple conversation
            ask_bot_prompt = query

        query_msg = self.msgs + [HumanMessage(content=ask_bot_prompt)]
        bot_answer = self.chat_model.invoke(query_msg)
        self.msgs = query_msg + [bot_answer]
        return bot_answer.content, return_data
