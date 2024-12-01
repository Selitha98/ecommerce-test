import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Card, 
  CardMedia, 
  CardContent 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Product = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Product Details Section */}
      <Grid container spacing={4}>
        
        {/* Image Gallery */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2 }}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={selectedImage}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
            </Card>
          </Box>
          
          {/* Thumbnail Image Selector */}
          <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto' }}>
            {product.images.map((image, index) => (
              <Card 
                key={index}
                sx={{ 
                  width: 64, 
                  height: 64, 
                  cursor: 'pointer',
                  border: selectedImage === image ? '2px solid primary.main' : 'none'
                }}
                onClick={() => setSelectedImage(image)}
              >
                <CardMedia
                  component="img"
                  height="64"
                  image={image}
                  alt={`Thumbnail ${index + 1}`}
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
            ))}
          </Box>
        </Grid>

        {/* Product Information */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h4" component="h1">
              {product.name}
            </Typography>
            
            <Typography variant="body1" color="text.secondary">
              {product.shortDescription}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="h5" color="primary">
                ${product.price.toFixed(2)}
              </Typography>
              {product.originalPrice && (
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ textDecoration: 'line-through' }}
                >
                  ${product.originalPrice.toFixed(2)}
                </Typography>
              )}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', border: 1, borderRadius: 1 }}>
                <IconButton onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ px: 2 }}>{quantity}</Typography>
                <IconButton onClick={() => setQuantity(quantity + 1)}>
                  <AddIcon />
                </IconButton>
              </Box>
              
              <Button 
                variant="contained" 
                startIcon={<ShoppingCartIcon />}
              >
                Add to Cart
              </Button>
              
              <IconButton color="secondary">
                <FavoriteIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Product Description Section */}
      <Box sx={{ mt: 4, p: 3, bgcolor: 'grey.100', borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Product Description
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </Box>
    </Container>
  );
};

export default Product;