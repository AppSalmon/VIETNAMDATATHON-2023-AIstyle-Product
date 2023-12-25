import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import CollectionsIcon from "@mui/icons-material/Collections";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMessage, insertMessage } from "./chatBoxSlice";
// import { setResultProducts } from "../../redux/globalSlice";
const InputChat = () => {
    const inputImgRef = useRef();
    const [message, setMessage] = useState("");
    const [img, setImg] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /**
     * message
     * img: base64
     * resultProducts: [{fdafda}]
     */

    const handleSubmitMessage = () => {
        // update from user
        dispatch(
            insertMessage({
                isBot: false,
                data: {
                    products: [],
                    user_intent: "",
                    text: message,
                },
            })
        );
        // update from botchat
        dispatch(addMessage({message}));
        setMessage("");
        setImg(null);
    };

    const handleSetImg = (event) => {
        const file = event.target.files[0]; // Get the first selected file

        if (!file) {
            return; // No file selected
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const base64String = e.target.result; // Get the Base64 string
            setImg(base64String);
        };
    };

    return (
        <Box padding={2}>
            {img && (
                <Box position="relative" width={200}>
                    <Button
                        position="absolute"
                        top={0}
                        right={0}
                        onClick={() => setImg(null)}
                    >
                        X
                    </Button>
                    <img
                        src={img}
                        alt="preview img"
                        width={200}
                        height={200}
                        style={{ display: "block" }}
                    />
                </Box>
            )}
            <TextField
                hiddenLabel
                variant="outlined"
                placeholder="Enter message"
                fullWidth
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                InputProps={{
                    endAdornment: (
                        <Stack direction={"row"} gap={1}>
                            <IconButton
                                color="primary"
                                edge="end"
                                onClick={() => inputImgRef?.current?.click()}
                            >
                                <CollectionsIcon />
                                <input
                                    type="file"
                                    style={{ display: "none" }}
                                    ref={inputImgRef}
                                    onChange={handleSetImg}
                                ></input>
                            </IconButton>
                            <IconButton
                                color="primary"
                                onClick={handleSubmitMessage}
                                edge="end"
                                disabled={!message.trim()}
                            >
                                <SendIcon />
                            </IconButton>
                        </Stack>
                    ),
                }}
            />
        </Box>
    );
};

export default InputChat;
