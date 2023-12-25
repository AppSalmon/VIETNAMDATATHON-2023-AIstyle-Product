import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../redux/constants";
// Message type
/**
 * isBot
 * message
 * imgBase64
 * */
export const addMessage = createAsyncThunk(
    "chatBox/addMessage",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(`${apiUrl}/query`, {
                // text: data.message,

                product_ids: [],
                text: data.message,
                image_urls: []

            });
            return {
                isBot: true,
                data: {
                    user_intent: response.data.additional_data.user_intent,
                    products: response.data.additional_data.list_product_to_search_recommend,
                    text: response.data.response,
                    
                }
                
            };
        
        } catch (error) {
    console.error("Error at addMessaage", error);
    throw error;
}
    }
);
const initialState = {
    isOpen: false,
    isLoading: false,
    messageError: "",
    welcomeMessage: "Hello, I can help you with anything!",
    
    messages: [{
        isBot: true,
        data: {
            products: [],
            user_intent: "initial",
            text: "Enter your question and I'll help you solve it!",
        }
    },],
};
export const chatBoxSlice = createSlice({
    name: "chatBox",
    initialState,
    reducers: {
        insertMessage: (state, action) => {
            state.messages = [...state.messages, action.payload];
        },
        toggleIsOpen: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addMessage.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addMessage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.messages = [...state.messages, action.payload];

            })
            .addCase(addMessage.rejected, (state, action) => {
                state.isLoading = false;
                state.messageError = action.error.message;
            });
    },
});

// Action creators are generated for each case reducer function
export const { insertMessage, toggleIsOpen } = chatBoxSlice.actions;
export default chatBoxSlice.reducer;
