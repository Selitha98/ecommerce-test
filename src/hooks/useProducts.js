import { useQuery } from 'react-query';
import { getAllProducts, getProductByCategory, getProductById } from '../services/api';

// fetch all products
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });
};

// fetch a single product by ID
export const useProductDetails = (productId) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productId),
    enabled: !!productId, 
  });
};

// products by category
export const useProductsByCategory = (category) => {
  return useQuery({
    queryKey: ['products', category],
    queryFn: () => getProductByCategory(category),
    enabled: !!category,
  });
};