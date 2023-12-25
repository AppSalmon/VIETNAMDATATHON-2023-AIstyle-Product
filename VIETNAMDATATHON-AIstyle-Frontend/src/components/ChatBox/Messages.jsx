import { Box, Button, CircularProgress, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Markdown from 'react-markdown'
import { addMessage, insertMessage } from "./chatBoxSlice";
import { setResultProducts } from "../../redux/globalSlice";
import { useNavigate } from "react-router-dom";
const Message = ({ isBot, userIntent, message,onSubmit }) => {
    const bgColor = isBot ? "#B3E5FC" : "#CFD8DC";
    const alignSelf = isBot ? "flex-start" : "flex-end";
   
    return (
        <Box
        alignSelf={alignSelf}
        sx={{
            width: "80%",
            borderRadius: 1,
            padding: 1,
            backgroundColor: bgColor,
            marginBottom: 1,
        }}
        >
           
            <Box
               
            >
                <Typography variant="caption" sx={{ fontSize: 14 }}>
                    <Markdown>

                        {message}
                    </Markdown>

                </Typography>
            </Box>
            { isBot && !userIntent ? <Box marginBottom={1}>
                <Stack direction={"row"} gap={2} justifyContent={"center"}>
                    <Button variant="outlined" size="small" onClick={()=>onSubmit("search")}>Search</Button>
                    <Button variant="outlined" size="small" onClick={()=>onSubmit("brand_compare")}>Compare Brand</Button>
                </Stack>

            </Box> : <></>}
        </Box>
    );
};

const Messages = () => {
    const { messages, isLoading } = useSelector((store) => store.chatBox);
   const dispatch = useDispatch()
   const navigate = useNavigate()
    const handleSubmitMessage = (mes) => {
        // update from user
        dispatch(
            insertMessage({
                isBot: false,
                data: {
                    products: [],
                    user_intent: "",
                    text: mes,
                },
            })
        );
        // update from botchat
        dispatch(addMessage({message: mes}));

    };
    useEffect(()=>{
        const isHasProducts = messages.findLast(msg=>msg.isBot && msg.data.products.length>0)
        if(isHasProducts){
            dispatch(setResultProducts(isHasProducts.data.products))
            navigate("/result-chat");
        }
    },[messages])
    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={{ height: "100%", overflowY: "scroll" }}
        >
            {isLoading ? (
                <CircularProgress />
            ) : (
                messages.map((item, index) => (
                    <Message
                        onSubmit={handleSubmitMessage}
                        key={index}
                        message={item.data.text}
                        isBot={item.isBot}
                        userIntent={item.data.user_intent}
                    />
                ))
            )}
        </Box>
    );
};

export default Messages;
