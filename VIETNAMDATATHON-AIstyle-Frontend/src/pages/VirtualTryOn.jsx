import React, { useState } from "react";
import TryOnCart from "../components/TryOnCart";
import { Box, Button, Drawer } from "@mui/material";
import modelPath from "../assets/imgs/man.png";
import { useSelector } from "react-redux";
import { cartSelector } from "../components/Cart/cartSlice";

const VirtualTryOn = () => {
	const cart = useSelector(cartSelector);
	const [isOpen, setIsOpen] = useState(false);
	const [checkBoxList, setCheckBoxList] = useState([]);
	const [resultImg, setResultImg] = useState(null);

	const handleCheckboxChange = (index) => {
		const isChecked = checkBoxList.includes(index);

		if (!isChecked) {
			setCheckBoxList((prev) => [...prev, index]);
		} else {
			setCheckBoxList((prev) => prev.filter((item) => item !== index));
		}
	};

  // Xử lí khi try on
	const handleSubmit = () => {
		const selectedItemList = cart.filter((item, index) =>
			checkBoxList.includes(index)
		);
		// Gửi request tới api để lấy hình ảnh
		// const result = axios.post('/try-on', {selectedItemList})

		// Có kết quả thì hiển thị lên drawer
		// setResultImg(result.img);
		setIsOpen(true);

		console.log(selectedItemList);
	};

	const handleDesign = () => {};

	return (
		<Box>
			<TryOnCart checkeds={checkBoxList} onChange={handleCheckboxChange} />
			<Box display="flex" justifyContent="center" position="relative">
				<img src={modelPath} alt="" />
				<Box
					position="absolute"
					right={0}
					top={45}
					width={200}
					display="flex"
					flexDirection="column"
					gap={2}
				>
					<Button fullWidth variant="outlined" onClick={handleSubmit}>
						Try on
					</Button>
					{/* <Button fullWidth variant="outlined" onClick={handleDesign}>
						Design
					</Button> */}
				</Box>
			</Box>
			<Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
				<Box padding={2} minWidth={600}>
					<Box sx={{ marginBottom: 2 }}>
						<b style={{ fontSize: 32 }}>Try on result</b>
					</Box>

					{!resultImg && <p>No image available</p>}
					{resultImg && (
						<img
							src={resultImg}
							alt="result try on"
							width="100%"
							height={500}
							style={{ objectFit: "contain" }}
						/>
					)}
				</Box>
			</Drawer>
		</Box>
	);
};

export default VirtualTryOn;
