import os
from app.aistyle.configs import OPENAI_API_KEY
from langchain.embeddings import OpenAIEmbeddings

openai_embedding_model = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)


# embedding models
def get_document_embeddings(documents):
    """
    input a list of documents, return a list of embeddings vector
    """
    if isinstance(documents, str):
        documents = [documents]

    return openai_embedding_model.embed_documents(documents)


def get_query_embedding(query):
    """
    query: str
    return a vector only
    """
    return openai_embedding_model.embed_query(query)
