import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Message type
/**
 * isBot
 * message
 * imgBase64
 * */
export const getTrendingProduct = createAsyncThunk(
    "trending/getTrendingProduct",
    async (_, thunkAPI) => {
        try {
			 const response = await axios.get('http://127.0.0.1:5000/trending')
                console.log(response)
				return response.data.Products

           
        } catch (error) {
            if (error instanceof Error) {
                thunkAPI.rejectWithValue(error.message);
            } else {
                thunkAPI.rejectWithValue("Unexpected error");
            }
        }
    }
);
const initialState = {
	isLoading: false,
	trendingProducts: [],
	error: null

};
export const trendingSlice = createSlice({
	name: "trending",
	initialState,
		extraReducers: (builder) => {
			builder
				.addCase(getTrendingProduct.pending, (state) => {
					state.isLoading = true;
				})
				.addCase(getTrendingProduct.fulfilled, (state, action) => {
					state.isLoading = false;
					state.trendingProducts = action.payload;
				})
				.addCase(getTrendingProduct.rejected, (state, action) => {
					state.isLoading = false;
					state.error = action.error.message;
				});
		},
});
// Action creators are generated for each case reducer function
export const { setResultProducts } =
	trendingSlice.actions;

// Selectors
// const resultProductsSelector = (state) => state.reco.resultProducts;

// export { resultProductsSelector };

export default trendingSlice.reducer;
