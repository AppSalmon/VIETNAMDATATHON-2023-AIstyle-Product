import React, {useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Box, CircularProgress, Stack} from '@mui/material';
import defaultImage from "../../assets/imgs/default-image.jpg";
import {getTrendingProduct} from '../../redux/trendingSlice';
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from 'react-redux';
import { setIsProductDetailOpen, setSelectedProduct } from './productDetailSlice';
import { AddBox } from '@mui/icons-material';

export default function TopTrending() {
  const { isLoading,trendingProducts, error } = useSelector((store) => store.trending);
  const dispatch = useDispatch()
    
    useEffect(()=>{
      dispatch(getTrendingProduct())
  },[])

    // useEffect(() =>{
    //     console.log(products);
    // },[products])
    const handleSelectItem = (product) => {
      dispatch(setIsProductDetailOpen(true));
      dispatch(setSelectedProduct(product));
    };
    return (
      <Box >
        <Box marginTop={2}>
          <Typography variant="h6" >TOP TRENDING</Typography>
        </Box>
        <Grid container spacing={2}>
          {isLoading ?  <CircularProgress /> : trendingProducts.length > 0 ? <>
            {trendingProducts.map((product) => (
            <Grid item xs={6} key={product.ProductId}>
              <Card>
                <Stack direction={'column'}>
                  <Box flexShrink={1} flexGrow={1} >
                    {product.images.length > 0 ? <Carousel
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
                <Typography className='product-name-trend' gutterBottom variant="h6" component="div" onClick={()=>handleSelectItem(product)}>
                  {product.name}
                </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Original Price: ${product.OriginalPrice}
                    </Typography>
                    <Typography variant="body2">
                      Price: ${product.price}
                    </Typography>
                    <Typography variant="body2">
                      Rating: {product.AvgRating}
                    </Typography>
                </CardContent>
                </Stack>
              </Card>
            </Grid>
          ))}
          </> : <Box>No trending</Box>}
        </Grid>
      </Box>
    );
  }
  