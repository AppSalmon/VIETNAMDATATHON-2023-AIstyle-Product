''' LIST API'''


# 1. API sign up: /signup
request = {
  "action": "signup",
  "username": "new_user",
  "password": "new_password",
  "email": "new_user@example.com"
}
respone = {
  "status": "success"/"fail",
  "message": "Đăng ký thành công. Tài khoản đã được tạo."/ "Đăng ký thất bại",
  "data": {
	"token": "example_jwt_token"
  }
}


# 2. API login: /login
request = {
  "action": "login",
  "username": "example_user",
  "password": "example_password"
}
respone = {
  "status": "success"/"fail",
  "message": "Đăng nhập thành công"/"Đăng nhập thất bại",
  "data": {
	"token": "example_jwt_token" 
  }
}


# 3. API logout: /logout
# clear cái jwt token từ front end là được 

# 4. API send message user: (Người dùng gửi text/image để search/recommend)
request = {"text_question": "how are you?", "link_image_question": "https://xyz.com"}
# nếu image question là link như này thì bọn em phải setup gửi ảnh lên firebase bằng react
# còn không thì làm theo kiểu khác là lấy base64 encoded của ảnh rồi gửi
# request = {"text_query": "how are you?", "images": [
# 	"base64_of_images1",
# 	"base64_of_images2",
# 	"base64_of_images3",
# 	"base64_of_images4",
# ]}
if user_intent == "search" or user_intent == "recommend":
	respone = {
		"status_code": 0/1, # làm đồng bộ với các api khác, nếu là status code thì các api trên cũng thế, còn status thì phải để như các api ở phía trên
		"message": "sucess get image" | "fail get image",
		"data": {
			"user_intent": "search" | "recommend"
			"text_answer": "fine",
			"list_product": [
				{
					"availability": "InStock",
					"avg_rating": "5.0",
					"brand": "adidas",
					"color": "Black",
					"currency": "USA",
					"description": "THIS MERINO LONG SLEEVE TEE IS MADE WITH NATURE.",
					"images": [
							  "https://assets.adidas.com/images/w_600,f_auto,q_auto/50db1b32c549467c980300be1e3318e5_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_21_model.jpg",
							  "https://assets.adidas.com/images/w_600,f_auto,q_auto/a4fd96124136457ea4dafe07362ff2a5_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_22_model.jpg",
							  "https://assets.adidas.com/images/w_600,f_auto,q_auto/057d515019794d32a2aac1ab48b0a779_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_23_hover_model.jpg"
					],
					"name": "TERREX XPERIOR MERINO 150 BASELAYER LONG SLEEVE TEE",
					"price": "$100",
					"original_price": "$100",
					"review_count": 1,
					"scraped_at": "12/11/2023, 03:49:21",
					"url": "https://www.adidas.com/us/terrex-xperior-merino-150-baselayer-long-sleeve-tee/HZ8559.html",
					"category": "Clothing",
					"cloth_gender": "Men"
				  },
				  {
					"availability": "InStock",
					"avg_rating": null,
					"brand": "adidas",
					"color": "Black",
					"currency": "USA",
					"description": "AN EYE FOR THE UNEXPECTED.\nUsing imagination, wit and a strong point of view, Jason Dill's built a lasting legacy in skateboarding. The Dill Eyes Short Sleeve Tee mixes his signature collage aesthetics and subversive approach with 3-Stripes iconography. \n\nWe partner with Better Cotton to improve cotton farming globally. Better Cotton makes global cotton production better for the people who produce it, better for the environment it grows in, and better for the sector's future.  \n\nBetter Cotton is sourced via a chain-of-custody model called mass balance. This means that Better Cotton is not physically traceable to end products. However, Better Cotton Farmers benefit from the demand for Better Cotton in equivalent volumes to those we \"source.\" \n\nFind out more here: bettercotton.org/learnmore",
					"images": [
					  "https://assets.adidas.com/images/w_600,f_auto,q_auto/c76e4f48517649ef9bedb1e0653583ca_9366/Dill_Eyes_Short_Sleeve_Tee_Black_II5953_21_model.jpg",
					  "https://assets.adidas.com/images/w_600,f_auto,q_auto/2485c1d2d71f461ebb58f5c0a11a4409_9366/Dill_Eyes_Short_Sleeve_Tee_Black_II5953_23_hover_model.jpg",
					  "https://assets.adidas.com/images/w_600,f_auto,q_auto/84301328a77f49d3aaec5eaa7f62e318_9366/Dill_Eyes_Short_Sleeve_Tee_Black_II5953_25_model.jpg",
					  "https://assets.adidas.com/images/w_600,f_auto,q_auto/0689af6c95714c119447afa90166fc76_9366/Dill_Eyes_Short_Sleeve_Tee_Black_II5953_01_laydown.jpg"
					],
					"name": "DILL EYES SHORT SLEEVE TEE",
					"price": "$20",
					"original_price": "$32",
					"review_count": 1,
					"scraped_at": "12/11/2023, 03:49:21",
					"url": "https://www.adidas.com/us/dill-eyes-short-sleeve-tee/II5953.html",
					"category": "Clothing",
					"cloth_gender": "Men"
				  }
			]
				
		}

	}
elif user_intent == 'conversation':
	respone = {
		"status_code": 0/1,
		"message": "sucess get image" | "fail get image",
		"data": {
			"user_intent": "conversation"
			"text_answer": "fine",
		}
	}
elif user_intent == 'compare_price' | 'compare_brand' | 'virtual_try_on' | 'design'

# 5. API trạng thái result chat: /result-chat



# 6. Search trên header: /search
# làm api này như cái cách format anh sửa ở trên 

request : {text_questtion:"",link_image:""}
    if user_intent == "search" || "recommend":
		respone = {
	       "status_code": 0||1,
	       "message" : "sucess"|"fair",
	       "list_product": [
					{
						"availability": "InStock",
						"avg_rating": "5.0",
						"brand": "adidas",
						"color": "Black",
						"currency": "USA",
						"description": "THIS MERINO LONG SLEEVE TEE IS MADE WITH NATURE.",
						"images": [
								  "https://assets.adidas.com/images/w_600,f_auto,q_auto/50db1b32c549467c980300be1e3318e5_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_21_model.jpg",
								  "https://assets.adidas.com/images/w_600,f_auto,q_auto/a4fd96124136457ea4dafe07362ff2a5_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_22_model.jpg",
								  "https://assets.adidas.com/images/w_600,f_auto,q_auto/057d515019794d32a2aac1ab48b0a779_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_23_hover_model.jpg"
						],
						"name": "TERREX XPERIOR MERINO 150 BASELAYER LONG SLEEVE TEE",
						"price": "$100",
						"original_price": "$100",
						"review_count": 1,
						"scraped_at": "12/11/2023, 03:49:21",
						"url": "https://www.adidas.com/us/terrex-xperior-merino-150-baselayer-long-sleeve-tee/HZ8559.html",
						"category": "Clothing",
						"cloth_gender": "Men"
					  }
				]
	           }
# 7. Search theo danh mục sp: /search
# sửa theo api chat 
request : {category:""}
    if user_intent == "search" || "recommend":
		respone = {
	       "status_code": 0||1,
	       "message" : "sucess"|"fair",
	       "list_product": [
					{
						"availability": "InStock",
						"avg_rating": "5.0",
						"brand": "adidas",
						"color": "Black",
						"currency": "USA",
						"description": "THIS MERINO LONG SLEEVE TEE IS MADE WITH NATURE.",
						"images": [
								  "https://assets.adidas.com/images/w_600,f_auto,q_auto/50db1b32c549467c980300be1e3318e5_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_21_model.jpg",
								  "https://assets.adidas.com/images/w_600,f_auto,q_auto/a4fd96124136457ea4dafe07362ff2a5_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_22_model.jpg",
								  "https://assets.adidas.com/images/w_600,f_auto,q_auto/057d515019794d32a2aac1ab48b0a779_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_23_hover_model.jpg"
						],
						"name": "TERREX XPERIOR MERINO 150 BASELAYER LONG SLEEVE TEE",
						"price": "$100",
						"original_price": "$100",
						"review_count": 1,
						"scraped_at": "12/11/2023, 03:49:21",
						"url": "https://www.adidas.com/us/terrex-xperior-merino-150-baselayer-long-sleeve-tee/HZ8559.html",
						"category": "Clothing",
						"cloth_gender": "Men"
					  }
				]
	           }

# 8. Đính kèm hình ảnh lên ô chatbot (hình như không sài API)

# 9. Như số 8 nhưng mà là đính kèm trên header

# 10. Ẩn chatbot (Hình như cũng không sài API)

# 11. Thêm sản phẩm vào giỏ: /add-product
request # lưu danh sách sản phẩm theo product_id
respone = {
    "list_product":[{
            "product_id":
            "Product_name":
            "brand":
            "price":
            "price_sale":
            "color":
            "image":
            "category":
        }],
    }

# 12. Recommend sale lại: /recommend-again
respone = {
    list_product{
        "category": 
        "product_id":
        "Product_name":
        "brand":
        "price":
        "price_sale":
        "color":
        "image":
    }
}

# 13. Trả về danh sách giá để vẽ biểu đồ giá: /chart
# request chỉ cần product_id là đủ 
request = {
	"product_id": 1
}
request = {
    "VirsaulizeProductChart" : {
        "product_iD":
        "name":
        "price":
        "price_sale": 
    }
}
# 14. Trả về list sp đang sale của một product (như số 12)
respone = {
	"status"
	"msg"
	data:  list_product{
        "category": 
        "product_id":
        "Product_name":
        "brand":
        "price":
        "price_sale":
        "color":
        "image":
    }
}
# 15. Trả về list sp top trending: /trending
respone = {
    "list_product" : [
        {
            "product_id"
            "name"
            "price"
            "price_sale"
            "image"
            "color"
            "category"
        }
    ]
}

# 16. return same products: /same-products
request = {
	"product": 
	{
		"ProductId" : Integer
		"Name" : String
		"OriginalPrice" : Float
		"LinkImange" : [String]
		"Color" : String
		"Url" : String
		"Description" :String
		"Brand" :String 
		"AvgRating" : Float
		"Availability" : String
		"OriginalPrice" : Float
		"Price" : Float
		"ScratedAt" : DateTime
	}
}

respones = {
	"ListProduct": [
	{
		"ProductId" : Integer
		"Name" : String
		"OriginalPrice" : Float
		"LinkImange" : [String]
		"Color" : String
		"Url" : String
		"Description" :String
		"Brand" :String 
		"AvgRating" : Float
		"Availability" : String
		"OriginalPrice" : Float
		"Price" : Float
	}
	]
}

# 17. click xong tạo giao diện thông tin sản phẩm: /info
Call API (13,14,15,16)

# 18. click mannequin (ma nơ canh) hiện giỏ chứa hàng để design/virtual try on: /mannequin
request = Click_button
respone = {
	 "list_product": {
		{
			"ProductId" : Integer
			"Name" : String
			"OriginalPrice" : Float
			"Price" : Float
			"ScratedAt" : DateTime
			"LinkImange" : [String]
			"Color" : String
			"Url" : String
		}	
	}
}

# 19. Virtual Try on: /virtualtryon
request = {
	"list_product": [
		{
			"ProductId" : Integer
			"Name" : String
			"OriginalPrice" : Float
			"LinkImange" : String # chỗ này anh đã đề cập ở API 3
			"Color" : String
		}
	]	
}
respone = {
	"Image" : String
} 

# 20. Design sản phẩm khác: /design
request = {
	"list_product": [
		{
			"ProductId" : Integer
			"Name" : String
			"OriginalPrice" : Float
			"LinkImange" : String
			"Color" : String
		}
	]
}

respone = {
	"Image" : String
}

# 21. Giỏ hàng chứa sp đã lưu (giống số 18): /cart
respone = {
	list_product: [
	{
		"ProductId" : Integer
		"Name" : String
		"OriginalPrice" : Float
		"LinkImange" : [String]
		"Color" : String
		"Url" : String
	}
	]
}
# 22. home - trang chủ (bấm vào logo hoặc trạng thái home): /

# 23. Chuyển sang trạng thái virtual try on: /virtual


