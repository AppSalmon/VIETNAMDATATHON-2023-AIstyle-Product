from langchain.prompts import PromptTemplate
from app.aistyle.configs import OPENAI_API_KEY
from app.aistyle.prompts import query_and_describe_template
from app.aistyle.utils import joint_product
import openai
import os

os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY

client = openai.OpenAI()

MAX_GPT4_VISION_TOKENS = 2048


def get_describe_image(query, products, image_urls):
    """
    query: str: what use ask
    products: list_of_products
    image_urls: list string or string of user upload
    """

    if image_urls:
        if isinstance(image_urls, str):
            image_urls = [image_urls]
        imgs = [{"type": "image_url", "image_url": {"url": i}} for i in image_urls]

        imgs_info = [{"type": "text", "text": "Image uploaded by users."}] + imgs
    else:
        imgs_info = []

    if products:
        product_info = [
            {"type": "text", "text": "List products that user choose."},
        ]
        for i, prod in enumerate(products):
            product_info.append({"type": "text", "text": joint_product(prod)})
            for img_url in prod["images"]:
                product_info.append(
                    {"type": "image_url", "image_url": {"url": img_url}}
                )
    else:
        product_info = []

    query = query_and_describe_template.format(query=query)

    messages = [
        {
            "role": "user",
            "content": [{"type": "text", "text": query}, *product_info, *imgs_info],
        }
    ]

    response = client.chat.completions.create(
        model="gpt-4-vision-preview",
        messages=messages,
        max_tokens=MAX_GPT4_VISION_TOKENS,
    )

    return response.choices[0].message.content


def get_describe_imgs_of_a_product(product):
    """
    product: {dictionary}
    """
    messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Summarize the design of these images. Should concise and enough information, should prevent lengthy describe.",
                },
                *[
                    {"type": "image_url", "image_url": {"url": i}}
                    for i in product["images"]
                ],
            ],
        }
    ]

    response = client.chat.completions.create(
        model="gpt-4-vision-preview",
        messages=messages,
        max_tokens=MAX_GPT4_VISION_TOKENS,
    )

    return response.choices[0].message.content
