import React from "react";
import Category from "../components/Category";
import { Box } from "@mui/material";
import MyCarousel from "../components/MyCarousel";
import Brands from "../components/Brands";

const Home = () => {
	return (
		<>
			<MyCarousel />
			<Box marginTop={1}>
				<Category />
			</Box>
			<Box marginTop={1}>
				<Brands />
			</Box>
		</>
	);
};

export default Home;
