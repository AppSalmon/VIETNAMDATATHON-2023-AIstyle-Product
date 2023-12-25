import { Box } from "@mui/material";
import React from "react";
import chatBotSrc from "../../assets/imgs/chatbot.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsOpen } from "./chatBoxSlice";

const ChatBotButton = () => {
    const { welcomeMessage } = useSelector((store) => store.chatBox);
    const dispath = useDispatch();
    return (
        <Box position="fixed" bottom={20} right={20}>
            <Box
                className="fly-up"
                position="absolute"
                bottom={"110%"}
                right={0}
                sx={{
                    border: "1px solid #BDBDBD",
                    padding: 2,
                    minWidth: 220,
                    borderRadius: 8,
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
                    backgroundColor: "white",
                }}
            >
                {welcomeMessage}
            </Box>
            <img
                className="hover-fly-up"
                alt=""
                src={chatBotSrc}
                onClick={() => dispath(toggleIsOpen())}
                width={100}
                height={100}
                style={{ cursor: "pointer" }}
            ></img>
        </Box>
    );
};

export default ChatBotButton;
