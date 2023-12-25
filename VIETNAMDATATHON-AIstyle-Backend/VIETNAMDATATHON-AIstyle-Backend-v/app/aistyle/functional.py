from app.aistyle.utils import get_list_product_prompt
from app.aistyle.models.vision_model import get_describe_image


def parse_query(user_query, product_provided, image_urls):
    """
    user_query: text
    product_provided: list[dict]
    image_urls: list[str]
    """

    if product_provided != [] or image_urls != []:
        described = get_describe_image(user_query, product_provided, image_urls)
    else:
        described = None

    query_return = f"User query: {user_query}\n---\n"

    if product_provided != []:
        joint_text_product = get_list_product_prompt(product_provided)
        query_return += f"\n***\nProduct provided:\n{joint_text_product}\n\n***\n"

    if described:
        query_return += (
            f"\nInformations about uploaded images (image turn to this): {described}\n"
        )

    query_return += f"\n\nPlease execute user query: {user_query}"

    return query_return
