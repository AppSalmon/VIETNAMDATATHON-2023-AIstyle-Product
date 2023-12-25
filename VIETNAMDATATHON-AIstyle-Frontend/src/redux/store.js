import { configureStore } from "@reduxjs/toolkit";
import chatBoxSlice from "../components/ChatBox/chatBoxSlice";
import globalSlice from "./globalSlice";
import cartSlice from "../components/Cart/cartSlice";
import productDetailSlice from "../components/ProductDetail/productDetailSlice";
import recommendSlice from "./recommendSlice";
import trendingSlice from "./trendingSlice";

export const store = configureStore({
	reducer: {
		chatBox: chatBoxSlice,
		global: globalSlice,
		recommend: recommendSlice,
		trending: trendingSlice,
		cart: cartSlice,
		productDetail: productDetailSlice,
	},
});
