import { Box, Card, CardContent, CardHeader, IconButton } from "@mui/material";
import React from "react";
import Messages from "./Messages";
import InputChat from "./InputChat";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch } from "react-redux";
import { toggleIsOpen } from "./chatBoxSlice";

const ChatBox = () => {
	const dispatch = useDispatch();

	return (
		<Box height={"100%"} position={"relative"}>
			<Card sx={{ height: "100%" }}>
				<CardHeader
					sx={{
						flexDirection: "row-reverse",
						gap: 2,
					}}
					action={
						<IconButton onClick={() => dispatch(toggleIsOpen())}>
							<ChevronRightIcon />
						</IconButton>
					}
					title="Chat"
				/>
				<hr style={{ margin: 0 }} />
				<CardContent sx={{ height: "75%" }}>
					<Messages />
				</CardContent>
				<Box
					position={"absolute"}
					bottom={0}
					left={0}
					right={0}
					sx={{ backgroundColor: "white" }}
				>
					<InputChat />
				</Box>
			</Card>
		</Box>
	);
};

export default ChatBox;
