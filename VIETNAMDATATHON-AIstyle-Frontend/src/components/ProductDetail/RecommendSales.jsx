import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Box, CircularProgress, Stack} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {getRecommendProduct} from '../../redux/recommendSlice';
import { Carousel } from "react-responsive-carousel";
import defaultImage from "../../assets/imgs/default-image.jpg";
import { setIsProductDetailOpen, setSelectedProduct } from './productDetailSlice';

export default function RecommendSales() {
  const { isLoading,recommendProducts, error } = useSelector((store) => store.recommend);
  const dispatch = useDispatch()
  // console.log(recommendProducts)

  useEffect(()=>{
      dispatch(getRecommendProduct())
  },[])

  // useEffect(() => {
  //   console.log(products);
  // }, [products]);
  const handleSelectItem = (product) => {
    console.log({product});
		dispatch(setIsProductDetailOpen(true));
		dispatch(setSelectedProduct(product));
	};
  return (
    <Box >
      <Box marginTop={2}>
        <Typography variant="h6" >RECOMMEND SALES</Typography>
      </Box>
      <Grid container spacing={2}>
        {isLoading ?  <CircularProgress /> : recommendProducts?.length > 0 ? <>
          {recommendProducts.map((product) => (
          <Grid item xs={6} key={product.ProductId}>
            <Card>
              <Stack direction={'column'}>
                <Box flexShrink={1} flexGrow={1} >
                  {product.images?.length > 0 ? <Carousel
								className="flex-center"
								width= "100%"
								height="100%"
								showStatus={false}
								showThumbs={false}
								emulateTouch
							>
								{product.images.map((path, index) => (
									<Box marginInline="center" key={index}>
										<img
											src={path}
											alt={`Carousel img ${index}`}
											style={{
												objectFit: "cover",
												userSelect: "none",
                        aspectRatio: "1/1",
												cursor: "pointer",
											}}
										/>
									</Box>
								))}
							</Carousel> : 
              <Carousel
              className="flex-center"
              width= "100%"
              height="100%"
              showStatus={false}
              showThumbs={false}
              emulateTouch
            >
              <Box marginInline="center" >
										<img
											src={defaultImage}
											alt={`Default Image`}
											style={{
												objectFit: "cover",
												userSelect: "none",
                        aspectRatio: "1/1",
												cursor: "pointer",
											}}
										/>
									</Box>
                  </Carousel>}  
              </Box>
              <CardContent>
                <Typography className='product-name' gutterBottom variant="h6" component="div" onClick={()=>handleSelectItem(product)}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Original Price: ${product.OriginalPrice}
                </Typography>
                <Typography variant="body2">
                  Sale Price: ${product.price}
                </Typography>
                <Typography variant="body2">
                  Sale: {product.sale.toFixed(0)}%
                </Typography>
              </CardContent>
              </Stack>
            </Card>
          </Grid>
        ))}
        </> : <Box>No recommend</Box>}
      </Grid>
    </Box>
  );
}
