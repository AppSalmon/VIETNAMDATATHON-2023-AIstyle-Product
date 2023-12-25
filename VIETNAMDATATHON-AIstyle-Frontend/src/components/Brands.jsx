import React from "react";
import ItemList from "./ItemList";
import amazonPath from "../assets/imgs/links/amazon.png";
import choTotPath from "../assets/imgs/links/chotot.png";
import lazadaPath from "../assets/imgs/links/lazada.png";
import sendoPath from "../assets/imgs/links/sendo.png";
import shopeePath from "../assets/imgs/links/shopee.png";
import taobaoPath from "../assets/imgs/links/taobao.jpg";
import tikiPath from "../assets/imgs/links/tiki.png";
import tiktokPath from "../assets/imgs/links/tiktok.png";

const brands = [
	{
		title: "Amazon",
		imgUrl: amazonPath,
		link: "https://www.amazon.com/",
	},
	{
		title: "Chợ tốt",
		imgUrl: choTotPath,
		link: "https://www.chotot.com/",
	},
	{
		title: "Lazada",
		imgUrl: lazadaPath,
		link: "https://www.lazada.vn/",
	},
	{
		title: "Sen đỏ",
		imgUrl: sendoPath,
		link: "https://www.sendo.vn/",
	},
	{
		title: "Shopee",
		imgUrl: shopeePath,
		link: "https://shopee.vn/ ",
	},
	{
		title: "Taobao",
		imgUrl: taobaoPath,
		link: "https://world.taobao.com/",
	},
	{
		title: "Tiki",
		imgUrl: tikiPath,
		link: "https://tiki.vn/",
	},
	{
		title: "Tiktok",
		imgUrl: tiktokPath,
		link: "https://www.tiktok.com/",
	},
];

const Brands = () => {
	return <ItemList listItem={brands} name="Links" />;
};

export default Brands;
