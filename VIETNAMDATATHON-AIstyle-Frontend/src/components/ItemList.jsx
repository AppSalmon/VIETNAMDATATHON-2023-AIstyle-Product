import {
	Box,
	Card,
	CardContent,
	Skeleton,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";

const ItemList = ({ listItem, name }) => {
	return (
		<Stack direction={"row"} alignItems={"center"} gap={4}>
			<Typography
				variant="h6"
				minWidth={100}
				sx={{ fontWeight: 600, color: "#004aad" }}
			>
				{name}
			</Typography>
			<Box flexGrow={1}>
				<Stack
					direction={"row"}
					alignContent={"center"}
					justifyContent="center"
					gap={2}
				>
					{listItem.map((item) => (
						<Card
							key={item.title}
							className="hover-fly-up"
							sx={{ transition: "all ease .3s", cursor: "pointer" }}
						>
							<a
								href={item.link}
								style={{
									textDecoration: "none",
									textTransform: "capitalize",
									color: "black",
								}}
							>
								<CardContent
									sx={{
										flexDirection: "column",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									{item.imgUrl ? (
										<img
											src={item.imgUrl}
											alt={item.title}
											width={40}
											height={40}
											style={{ objectFit: "contain" }}
										/>
									) : (
										<Skeleton
											variant="rectangular"
											width={40}
											height={40}
										></Skeleton>
									)}
									<Typography variant="caption" marginTop={1} marginBottom={-1}>
										{item.title}
									</Typography>
								</CardContent>
							</a>
						</Card>
					))}
				</Stack>
			</Box>
		</Stack>
	);
};

export default ItemList;
