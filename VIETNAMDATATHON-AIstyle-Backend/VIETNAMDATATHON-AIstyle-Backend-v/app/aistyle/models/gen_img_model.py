import os
from app.aistyle.configs import OPENAI_API_KEY
from app.aistyle.prompts import gen_captioning_prompt_template
from openai import OpenAI

os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY

client = OpenAI()

MAX_GPT4_VISION_TOKENS = 2048


def gen_captioning(query_text, provided_image):
    messages = [
        {
            "role": "user",
            "content": [
                {"type": "text", "text": query_text},
                {"type": "image_url", "image_url": {"url": provided_image}},
            ],
        }
    ]

    response = client.chat.completions.create(
        model="gpt-4-vision-preview",
        messages=messages,
        max_tokens=MAX_GPT4_VISION_TOKENS,
    )

    return response.choices[0].message.content


def gen_image(captioning):
    response = client.images.generate(
        model="dall-e-3",
        prompt=captioning,
        size="1024x1024",
        quality="standard",
        n=1,
    )
    return response.data[0].url


def get_design_suggestion(gender, provided_image):
    query = gen_captioning_prompt_template.format(gender=gender)
    captioning = gen_captioning(query, provided_image)
    print("Captioning:", captioning)
    image = gen_image(captioning)
    return image
