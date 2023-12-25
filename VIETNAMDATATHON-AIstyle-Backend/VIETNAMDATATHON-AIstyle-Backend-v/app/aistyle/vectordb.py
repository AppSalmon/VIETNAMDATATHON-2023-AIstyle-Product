from app.aistyle.configs import faiss_path, faiss_adidas_path, faiss_nike_path
from app.aistyle.models.embedding_model import openai_embedding_model
from langchain.vectorstores import FAISS


def load_vector_db(path, embedding_model):
    return FAISS.load_local(path, embedding_model)


class AIStyleVectorDB:
    def __init__(self, top_num: int = 5):
        self.return_top_num = 5
        self.embedding_model = openai_embedding_model
        self.db_text = load_vector_db(faiss_path, self.embedding_model)
        self.nike_db = load_vector_db(faiss_nike_path, self.embedding_model)
        self.adidas_db = load_vector_db(faiss_adidas_path, self.embedding_model)

    def search_contrast_brand(self, query, brand):
        """
        query: joint text, parse text already
        brand: nike or adidas
        """
        db = None
        if brand.lower() == "nike":
            db = self.adidas_db
        else:
            db = self.nike_db

        similar_product = db.similarity_search(query, k=1)
        return similar_product[0].metadata

    def search_and_recommend_list_products(self, query):
        """
        # search & recommend a list of similar product query
        # query {
        #         'text': string
        #         'image': Optional[list of image url],
        #         'product': Optional[list of products]
        #     }
        query is a joint text now (after go through parse_query)
        """
        top_products = self.db_text.similarity_search(query, k=self.return_top_num)
        list_products = [i.metadata for i in top_products]
        return list_products
