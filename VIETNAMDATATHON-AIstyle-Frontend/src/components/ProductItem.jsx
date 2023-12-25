import { Box, Grid, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addToCart } from "./Cart/cartSlice";
import {
	setIsProductDetailOpen,
	setSelectedProduct,
} from "./ProductDetail/productDetailSlice";

const ProductItem = ({ product }) => {
	const dispatch = useDispatch();

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};
	const handleSelectItem = (product) => {
		console.log({product});
		dispatch(setIsProductDetailOpen(true));
		dispatch(setSelectedProduct(product));
	};
	return (
		<Grid
			item
			xs={4}
			display="flex"
			gap={1}
			onClick={() => {
				handleSelectItem(product);
			}}
		>
			<Box>
				<img src={product.images[0]} alt="" width={200} height={200} />
			</Box>
			<Box display="flex" flexDirection="column">
				<p>{product.name}</p>
				<p>${product.price}</p>
				<IconButton
					sx={{ display: "block", borderRadius: 0 }}
					onClick={(e) => {
						e.stopPropagation();
						handleAddToCart(product);
					}}
				>
					<AddShoppingCartIcon />
				</IconButton>
			</Box>
		</Grid>
	);
};

export default ProductItem;
