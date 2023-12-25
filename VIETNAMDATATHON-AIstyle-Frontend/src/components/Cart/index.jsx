import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, removeFromCart } from "./cartSlice";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
	outline: 0,
};

const Cart = ({ isOpen, onClose }) => {
	const cart = useSelector(cartSelector);
	const dispatch = useDispatch();

	return (
		<Modal
			keepMounted
			open={isOpen}
			onClose={onClose}
			sx={{ backgroundColor: "transparent" }}
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Cart
				</Typography>

				{cart && cart.length === 0 && (
					<Box>
						<p>No item in cart</p>
					</Box>
				)}

				{cart.map((product) => (
					<Box display="flex" gap={1} key={product.name}>
						<Box>
							<img src={product.images[0]} alt="" width={200} height={200} />
						</Box>
						<Box display="flex" flexDirection="column">
							<p>{product.name}</p>
							<p>{product.price}</p>
							<IconButton
								sx={{ display: "block", borderRadius: 0 }}
								onClick={() => {
									dispatch(removeFromCart(product));
								}}
							>
								<RemoveShoppingCartIcon />
							</IconButton>
						</Box>
					</Box>
				))}
			</Box>
		</Modal>
	);
};

export default Cart;
