import { Box } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import imgPath1 from "../assets/imgs/carousel/1.png";
// import imgPath2 from "../assets/imgs/carousel/2.png";
// import imgPath3 from "../assets/imgs/carousel/3.png";
import imgPath4 from "../assets/imgs/carousel/4.png";
import imgPath5 from "../assets/imgs/carousel/5.png";
import imgPath6 from "../assets/imgs/carousel/6.jpg";

const imgPaths = [imgPath6, imgPath1, imgPath4, imgPath5];

const MyCarousel = () => {
	return (
		<Box>
			<Carousel
				className="flex-center"
				width="70%"
				showIndicators={false}
				showStatus={false}
				showThumbs={false}
				emulateTouch
				showArrows={false}
				autoPlay
			>
				{imgPaths.map((path, index) => (
					<Box marginInline="center" key={index}>
						<img
							src={path}
							alt={`Carousel img ${index}`}
							height={400}
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
	);
};

export default MyCarousel;
