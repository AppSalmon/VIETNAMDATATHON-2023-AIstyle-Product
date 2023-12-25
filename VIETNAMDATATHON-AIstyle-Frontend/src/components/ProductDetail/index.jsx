import { Box, Drawer, Grid, IconButton } from "@mui/material";
import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	isProductDetailOpen,
	selectedProductSelector,
	setIsProductDetailOpen,
} from "./productDetailSlice";
import { addToCart } from "../Cart/cartSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Carousel } from "react-responsive-carousel";
import RecommendSales from "./RecommendSales";
import TopTrending from "./TopTrending";
import ChartData from "./Chart";


const ProductDetail = () => {
	const isOpen = useSelector(isProductDetailOpen);
	const product = useSelector(selectedProductSelector);
	const dispatch = useDispatch();

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};
	
	return (
		<Drawer
			anchor="left"
			open={isOpen}
			onClose={() => dispatch(setIsProductDetailOpen(false))}
			sx={{
				'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 480},
			  }}
		>
			{product && (
				<Box padding={2} display="flex" flexDirection="column">
					<Grid item display="flex" flexDirection="column" gap={1}>
						<Box>
							<Carousel
								className="flex-center"
								width={200}
								height={200}
								showStatus={false}
								showThumbs={false}
								emulateTouch
							>
								{product.images.map((path, index) => (
									<Box marginInline="center" key={index}>
										<img
											src={path}
											alt={`Carousel img ${index}`}
											style={{
												objectFit: "contain",
												userSelect: "none",
												cursor: "pointer",
											}}
										/>
									</Box>
								))}
							</Carousel>
						</Box>
						<Box display="flex" flexDirection="column">
							<p style={{ fontWeight: 600 }}>{product.name}</p>
							<p style={{ fontWeight: 600, fontSize: 24 }}> ${product.price}</p>
							<IconButton
								sx={{ display: "block", borderRadius: 0 }}
								onClick={() => handleAddToCart(product)}
							>
								<AddShoppingCartIcon />
							</IconButton>
						</Box>
					</Grid>

					<b>More information</b>
						<Box>
								{product.brand && 	<p>Brand: {product.brand}</p>}
								{product.color && <p>Color: {product.color}</p>}
						</Box>
					<Box position={"relative"}>
						<ChartData ProductId={product?.ProductId }/>
						<RecommendSales />
						<TopTrending />
					</Box>	
				</Box>
			)}
		</Drawer>
	);
};

export default ProductDetail;
