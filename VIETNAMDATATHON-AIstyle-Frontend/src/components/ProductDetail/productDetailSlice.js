import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedProduct: null,
	isProductDetailOpen: false,
};

export const productDetailSlice = createSlice({
	name: "productDetail",
	initialState,
	reducers: {
		setSelectedProduct(state, action) {
			state.selectedProduct = action.payload;
		},
		setIsProductDetailOpen(state, action) {
			state.isProductDetailOpen = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setSelectedProduct, setIsProductDetailOpen } =
	productDetailSlice.actions;

// Selectors
const selectedProductSelector = (state) => state.productDetail.selectedProduct;
const isProductDetailOpen = (state) => state.productDetail.isProductDetailOpen;
export { selectedProductSelector, isProductDetailOpen };

export default productDetailSlice.reducer;
