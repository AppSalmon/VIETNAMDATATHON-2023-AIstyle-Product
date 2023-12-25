import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ScienceIcon from "@mui/icons-material/Science";
import PageviewIcon from "@mui/icons-material/Pageview";
import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
const NavBar = () => {
	const [value, setValue] = React.useState("/");
	const location = useLocation();

	useEffect(() => {
		setValue(location.pathname);
	}, [location]);

	return (
		<Box
			sx={{
				width: "fit-content",
				textWrap: "nowrap",
				marginInline: "auto",
				minWidth: "min(100%, 600px)",
				overflow: "hidden",
			}}
			position="relative"
			zIndex={99}
		>
			<BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					console.log("onChange", newValue);
					setValue(newValue);
				}}
				sx={{
					display: "flex",
					gap: 0,
					boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
					border: "1px solid #BDBDBD",
					borderRadius: 4,
				}}
			>
				<BottomNavigationAction
					component={NavLink}
					to="/"
					value="/"
					icon={<HomeIcon />}
					label="Home"
				/>
				<BottomNavigationAction
					component={NavLink}
					to="/result-chat"
					value="/result-chat"
					icon={<PageviewIcon />}
					label="Result Chat"
				/>
				<BottomNavigationAction
					component={NavLink}
					to="/virtual-try-on"
					value="/virtual-try-on"
					icon={<ScienceIcon />}
					label="Virtual try-on"
				/>
			</BottomNavigation>
		</Box>
	);
};

export default NavBar;
