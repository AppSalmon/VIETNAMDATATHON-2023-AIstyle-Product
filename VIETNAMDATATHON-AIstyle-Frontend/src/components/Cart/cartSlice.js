import { createSlice } from "@reduxjs/toolkit";

// Message type
/**
 * isBot
 * message
 * imgBase64
 * */
const initialState = {
	cartList: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const isAdded = state.cartList.find(
				(item) => item.name === action.payload.name
			);
			if (!isAdded) {
				state.cartList.push(action.payload);
			}
		},
		removeFromCart: (state, action) => {
			state.cartList = state.cartList.filter(
				(item) => item.name !== action.payload.name
			);
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors
const cartSelector = (state) => state.cart.cartList;
export { cartSelector };

export default cartSlice.reducer;
