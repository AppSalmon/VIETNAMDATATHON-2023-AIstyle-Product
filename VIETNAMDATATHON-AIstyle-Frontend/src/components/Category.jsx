import React from "react";
import ItemList from "./ItemList";
import handbagPath from "../assets/imgs/category/handbag.png";
import hatsPath from "../assets/imgs/category/hats.png";
import jeanPath from "../assets/imgs/category/jean.png";
import scarrvesPath from "../assets/imgs/category/scarrves.png";
import shoesPath from "../assets/imgs/category/shoes.png";
import shortPath from "../assets/imgs/category/short.png";
import suitPath from "../assets/imgs/category/suit.png";
import sunglassPath from "../assets/imgs/category/sunglass.png";
import tshirtPath from "../assets/imgs/category/tshirt.png";
import watchPath from "../assets/imgs/category/watch.png";

const categories = [
	{
		title: "T-shirts",
		imgUrl: tshirtPath,
	},
	{
		title: "Jeans",
		imgUrl: jeanPath,
	},
	{
		title: "Suits",
		imgUrl: suitPath,
	},
	{
		title: "Shorts",
		imgUrl: shortPath,
	},
	{
		title: "Hats",
		imgUrl: hatsPath,
	},
	{
		title: "Watches",
		imgUrl: watchPath,
	},
	{
		title: "Handbags",
		imgUrl: handbagPath,
	},
	{
		title: "Sunglasses",
		imgUrl: sunglassPath,
	},
	{
		title: "Scarves",
		imgUrl: scarrvesPath,
	},
	{
		title: "Shoes",
		imgUrl: shoesPath,
	},
];

const Category = () => {
	return <ItemList listItem={categories} name="Category" />;
};

export default Category;
