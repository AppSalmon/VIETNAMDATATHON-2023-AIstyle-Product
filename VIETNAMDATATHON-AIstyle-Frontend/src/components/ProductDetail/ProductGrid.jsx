import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ReactMarkdown from 'react-markdown';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

export default function ProductGrid() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get('https://e301-27-74-254-72.ngrok-free.app/recommend')
      .then(response => {
        setProducts(response.data.Product); 
        // console.log(response.data.Products); 
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    console.log(products);

  },[products])


  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography variant="h6" gutterBottom>RECOMMEND SALES</Typography>
      </Grid>
      <Grid container spacing={2} item style={{ width: '8px' }}>
        {Boolean(products) && products.map((product) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={product.ProductId}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.list_image[0][0]}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Original Price: ${product.OriginalPrice}
                </Typography>
                <Typography variant="body2">
                  Sale Price: ${product.product_detail_price}
                </Typography>
                <Typography variant="body2">
                  Sale: {product.sale}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

      </Grid>
    </Grid>
  );
};


