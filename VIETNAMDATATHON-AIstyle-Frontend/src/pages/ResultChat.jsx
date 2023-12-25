import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

const ResultChat = () => {
	const {resultProducts} = useSelector((store)=>store.global);

	return (
		<Grid container spacing={2} gridColumn={3}>
			{resultProducts.map((product) => (
				<ProductItem product={product} key={product.name} />
			))}
		</Grid>
	);
};

export default ResultChat;
