import { AccountCircle } from "@mui/icons-material";
import {
	Badge,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Stack,
} from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Login from "./Login";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { cartSelector } from "./Cart/cartSlice";
const UserHeader = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [isAuthenticated, setIsAuthenticated] = React.useState(true);
	const [isLoginOpen, setIsLoginOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const cart = useSelector(cartSelector);

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleMenu = (event) => {
		console.log(event.currentTarget);
		setAnchorEl(event.currentTarget);
	};
	const handleLogout = () => {
		setIsAuthenticated(false);
		handleClose();
	};
	return (
		<>
			{isAuthenticated ? (
				<>
					<IconButton
						onClick={() => {
							setIsCartOpen(true);
						}}
					>
						<Badge badgeContent={cart?.length} color="primary">
							<ShoppingCartIcon />
						</Badge>
					</IconButton>
					<IconButton
						aria-label="account"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						color="primary"
						onClick={handleMenu}
					>
						<AccountCircle />
					</IconButton>
					{/* Add user info or functionality here */}
					<Menu
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem onClick={handleClose}>My account</MenuItem>
						<MenuItem onClick={handleLogout}>Log out</MenuItem>
					</Menu>
				</>
			) : (
				<Stack direction={"row"} alignItems={"center"} gap={2}>
					<Button variant="contained" onClick={() => setIsLoginOpen(true)}>
						Login
					</Button>
					<Button
						variant="outlined"
						// onClick={() => setDialog(DIALOG_REGISTER)}
					>
						Register
					</Button>
					<Login isOpen={isLoginOpen} />
				</Stack>
			)}

			<Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
		</>
	);
};

export default UserHeader;
