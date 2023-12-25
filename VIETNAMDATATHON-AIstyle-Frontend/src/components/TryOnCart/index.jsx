import { Box, Checkbox } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../Cart/cartSlice";

const TryOnCart = ({ checkeds, onChange }) => {
	const cart = useSelector(cartSelector);

	return (
		<Box
			position="fixed"
			top={60}
			left={0}
			bottom={0}
			padding={2}
			minWidth={300}
			sx={{ backgroundColor: "white" }}
			zIndex={10}
		>
			<Box marginBottom={2}>
				<b>Select item you want to try-on</b>
			</Box>

			{cart?.length === 0 && <Box>No item in cart</Box>}
			<Box display="flex" flexDirection="column">
				{cart.map((item, index) => (
					<Box display="flex" marginBottom={1} key={index}>
						<img src={item.images[0]} alt="" width={100} height={100} />
						<Checkbox
							checked={checkeds.includes(index)}
							onClick={() => onChange(index)}
						/>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default TryOnCart;
