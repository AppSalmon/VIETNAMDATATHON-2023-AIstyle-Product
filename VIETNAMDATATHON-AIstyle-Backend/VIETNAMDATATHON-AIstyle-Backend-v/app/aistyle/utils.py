import base64
import requests
from langchain.vectorstores import FAISS
from app.aistyle.prompts import summarize_prompt_template
from PIL import Image


def joint_product(product):
    keys_to_join = [
        "name",
        "description",
        "availability",
        "avg_rating",
        "brand",
        "color",
        "review_count",
        "price",
    ]
    add_on_key = ["category", "cloth_gender", "url"]
    text = "".join([f"{i}: {product[i]}\n" for i in keys_to_join])
    text = text.strip() + " USD\n"  # must put the 'price' key the last``
    text = text + "".join(
        [
            f"{i}: {product[i]}\n"
            for i in add_on_key
            if i in product and product[i] != None
        ]
    )
    return text


def get_list_product_prompt(list_data):
    loop = enumerate(list_data)
    return "\n".join(["\n" + joint_product(d) for i, d in loop]).strip()


def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        encoded = base64.b64encode(image_file.read()).decode("utf-8")
    return f"data:image/jpeg;base64,{encoded}"


def save_image_from_url(image_url, filename):
    img_data = requests.get(image_url).content
    with open(filename + ".jpg", "wb") as handler:
        handler.write(img_data)
    return filename + ".jpg"


def get_summarize_product_prompt(query, list_products):
    product_prompts = get_list_product_prompt(list_products)
    summarize_prompt = summarize_prompt_template.format(
        query=query, products=product_prompts
    )
    return summarize_prompt


def combine_cloths(shirt_path, pants_path, shoes_path):
    tshirt = Image.open(shirt_path)
    pants = Image.open(pants_path)
    shoes = Image.open(shoes_path)
    combined_height = tshirt.height + pants.height + shoes.height
    combined_width = max(tshirt.width, pants.width, shoes.width)
    combined_image = Image.new("RGB", (combined_width, combined_height))

    # Paste the images onto the combined image
    combined_image.paste(tshirt, (0, 0))
    combined_image.paste(pants, (0, tshirt.height))
    combined_image.paste(shoes, (0, tshirt.height + tshirt.width))
    combined_image.save("design.jpg")
    return encode_image("design.jpg")
