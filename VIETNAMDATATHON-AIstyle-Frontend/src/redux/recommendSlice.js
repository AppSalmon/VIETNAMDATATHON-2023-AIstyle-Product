import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Message type
/**
 * isBot
 * message
 * imgBase64
 * */
export const getRecommendProduct = createAsyncThunk(
    "recommend/getRecommendProduct",
    async (_, thunkAPI) => {
        try {
			 const response = await axios.get('http://127.0.0.1:5000/recommend')
                console.log(response)
				return response.data.Product

           
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
	recommendProducts: [],
	error: null

};
export const recommendSlice = createSlice({
	name: "recommend",
	initialState,
		extraReducers: (builder) => {
			builder
				.addCase(getRecommendProduct.pending, (state) => {
					state.isLoading = true;
				})
				.addCase(getRecommendProduct.fulfilled, (state, action) => {
					state.isLoading = false;
					state.recommendProducts = action.payload;
				})
				.addCase(getRecommendProduct.rejected, (state, action) => {
					state.isLoading = false;
					state.error = action.error.message;
				});
		},
});

// Action creators are generated for each case reducer function
export const { setResultProducts } =
	recommendSlice.actions;

// Selectors
// const resultProductsSelector = (state) => state.reco.resultProducts;

// export { resultProductsSelector };

export default recommendSlice.reducer;
