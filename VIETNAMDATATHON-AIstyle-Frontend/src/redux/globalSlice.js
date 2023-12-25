import { createSlice } from "@reduxjs/toolkit";

// Message type
/**
 * isBot
 * message
 * imgBase64
 * */
// resultProducts: [
// 	{
// 		availability: "InStock",
// 		avg_rating: "4.6",
// 		brand: "adidas",
// 		color: "Real Gold / Purple Glow",
// 		currency: "USA",
// 		description: "Description\nA GRAPHIC RACERBACK BRA MADE IN PART WITH RECYCLED MATERIALS.\nBrighten up your workout essentials in this adidas medium-support bra. It's part of a collaboration with FARM Rio, a Brazilian label known for its vibrant prints. Moisture-absorbing AEROREADY keeps you dry, and mesh ventilation brings cool relief when the heat is on.\n\nMade with a series of recycled materials, and at least 70% recycled content, this product represents just one of our solutions to help end plastic waste.\nDetails\nTight fit with medium support\nPullover\n89% recycled polyester, 11% elastane interlock\nAEROREADY\nMesh back panel\nMesh front insert\nMesh stabilizers on straps\nRemovable pads\nFARM Rio print\nImported\nProduct color: Real Gold / Purple Glow\nProduct code: HS1190",
// 		images: [
// 		  "https://assets.adidas.com/images/w_600,f_auto,q_auto/cc2f85085f434a0d813eaf5b0132e492_9366/adidas_x_FARM_Rio_Medium-Support_Bra_Plus_Size_Gold_HS1190_21_model.jpg",
// 		  "https://assets.adidas.com/images/w_600,f_auto,q_auto/3e54b31d3efd49da9333af5b0132ed52_9366/adidas_x_FARM_Rio_Medium-Support_Bra_Plus_Size_Gold_HS1190_23_hover_model.jpg",
// 		  "https://assets.adidas.com/images/w_600,f_auto,q_auto/cd878e12dc3b4d5dab91af5b0132f60d_9366/adidas_x_FARM_Rio_Medium-Support_Bra_Plus_Size_Gold_HS1190_25_model.jpg",
// 		  "https://assets.adidas.com/images/w_600,f_auto,q_auto/565085369eeb4a708670af5b01332332_9366/adidas_x_FARM_Rio_Medium-Support_Bra_Plus_Size_Gold_HS1190_01_laydown.jpg"
// 		],
// 		name: "ADIDAS X FARM RIO MEDIUM-SUPPORT BRA (PLUS SIZE)",
// 		price: "$23.0",
// 		original_price: "$45.0",
// 		review_count: 7,
// 		scraped_at: "12/13/2023, 22:34:30",
// 		url: "https://www.adidas.com/us/adidas-x-farm-rio-medium-support-bra-plus-size/HS1190.html",
// 		category: "Clothing",
// 		cloth_gender: "Women",
// 	},
// 	{
// 		availability: "InStock",
// 		avg_rating: "4.8",
// 		brand: "adidas",
// 		color: "Black",
// 		currency: "USA",
// 		description:
// 			"Description\nVERSATILE SHORTS INSPIRED BY THE ARCHIVE.\nScore some retro style. These adidas sweat shorts are inspired by OG fashion from the archives but designed for today. The versatile design means you can wear them on chill days at home or when you're meeting up with friends. They're made of soft French terry fabric, so no matter where you go you'll stay comfortable. \n\nOur cotton products support more sustainable cotton farming.\nDetails\nRegular fit\nDrawcord on elastic waist\n100% cotton French terry\nSide zip pockets\nMade with Better Cotton\nImported\nProduct color: Black\nProduct code: IA6351",
// 		images: [
// 			"https://assets.adidas.com/images/w_600,f_auto,q_auto/c74f6d61c61249f3a78eaf25010eab12_9366/Adicolor_Classics_3-Stripes_Sweat_Shorts_Black_IA6351_21_model.jpg",
// 			"https://assets.adidas.com/images/w_600,f_auto,q_auto/977954cf54d241859f88af25010eb342_9366/Adicolor_Classics_3-Stripes_Sweat_Shorts_Black_IA6351_23_hover_model.jpg",
// 			"https://assets.adidas.com/images/w_600,f_auto,q_auto/7cadf22e256445728e47af25010ebb25_9366/Adicolor_Classics_3-Stripes_Sweat_Shorts_Black_IA6351_25_model.jpg",
// 			"https://assets.adidas.com/images/w_600,f_auto,q_auto/e3f3e9185b1b41759ddbaf15009ac2f6_9366/Adicolor_Classics_3-Stripes_Sweat_Shorts_Black_IA6351_01_laydown.jpg",
// 		],
// 		name: "ADICOLOR CLASSICS 3-STRIPES SWEAT SHORTS",
// 		price: "$45",
// 		original_price: "$45",
// 		review_count: 215,
// 		scraped_at: "12/13/2023, 22:34:52",
// 		url: "https://www.adidas.com/us/adicolor-classics-3-stripes-sweat-shorts/IA6351.html",
// 		category: "Clothing",
// 		cloth_gender: "Men",
// 	},
// 	{
// 		availability: "InStock",
// 		avg_rating: "5.0",
// 		brand: "adidas",
// 		color: "Soft Violet",
// 		currency: "USA",
// 		description:
// 			"Description\nSporty, trendy style that's a pleasure to wear. This versatile and relaxed adidas crewneck pullover for girls is made from plush, velvet-like velour fabric with some knit-in stretch material for extra comfort. It has a nice, roomy fit that's easy to layer.\nDetails\nRelaxed Fit\n90% polyester, 10% elastane debossed velour\nRibbed crewneck holds its shape\nMachine washable\nElastic cuffs and hem\nImported\nProduct color: Soft Violet\nProduct code: IR2799",
// 		images: [
// 			"https://assets.adidas.com/images/w_600,f_auto,q_auto/ec868c4f3e1d486c9bf3a0afca84eac3_9366/Long_Sleeve_Velour_Crewneck_Pullover_Purple_IR2799_21_model.jpg",
// 			"https://assets.adidas.com/images/w_600,f_auto,q_auto/b9fbf1ecb86d40d69866176c2cd5b45f_9366/Long_Sleeve_Velour_Crewneck_Pullover_Purple_IR2799_23_hover_model.jpg",
// 			"https://assets.adidas.com/images/c_crop,f_auto,fl_lossy,g_north,h_840,q_auto,y_40/d25f1854a5254f3c855dce439e189ff6_9366/Long_Sleeve_Velour_Crewneck_Pullover_Purple_IR2799_01_laydown.jpg",
// 			"https://assets.adidas.com/images/w_600,f_auto,q_auto/d25f1854a5254f3c855dce439e189ff6_9366/Long_Sleeve_Velour_Crewneck_Pullover_Purple_IR2799_01_laydown.jpg",
// 		],
// 		name: "LONG SLEEVE VELOUR CREWNECK PULLOVER",
// 		price: "$45",
// 		original_price: "$45",
// 		review_count: 1,
// 		scraped_at: "12/13/2023, 22:35:15",
// 		url: "https://www.adidas.com/us/long-sleeve-velour-crewneck-pullover/IR2799.html",
// 		category: "Clothing",
// 		cloth_gender: "Kids",
// 	},
// ],
const initialState = {
	resultProducts: []
};
export const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setResultProducts(state, action) {
			state.resultProducts = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setResultProducts } =
	globalSlice.actions;



export default globalSlice.reducer;
