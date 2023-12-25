import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import UserHeader from "./UserHeader";
import { Link } from "react-router-dom";
import logoPath from "../assets/imgs/logo/3.png";
const Header = () => {
	return (
		<AppBar
			position="fixed"
			sx={{
				bgcolor: "#ffffff",
				boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
			}}
		>
			<Container>
				<Toolbar sx={{ justifyContent: "space-between" }}>
					{/* Logo */}
					<Box display="flex" justifyContent="center" alignItems="center">
						<img src={logoPath} alt="logo" width={50} height={50}></img>
						<Typography
							variant="h6"
							noWrap
							component={Link}
							to="/"
							sx={{
								textDecoration: "none",
								color: "#004aad",
								fontWeight: "600",
								fontSize: 38,
							}}
						>
							STYLE
						</Typography>
					</Box>

					{/* Search input */}
					{/* <Box>
						<Search />
					</Box> */}

					{/* User */}
					<Box>
						<UserHeader />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
