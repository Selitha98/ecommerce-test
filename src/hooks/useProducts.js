import { useQuery } from "react-query";
import { getAllProducts, getProductByCategory, getProductById } from "../services/api";

// fetch all products
export const useProducts = (options = {}) => {
  return useQuery({
    queryKey: ["products", JSON.stringify(options)],
    queryFn: () => getAllProducts(options),
  });
};

// fetch a single product by ID
export const useProductDetails = (productId) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
    enabled: !!productId,
  });
};

// products by category
export const useProductsByCategory = (category) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: () => getProductByCategory(category),
    enabled: !!category,
  });
};

//fetch limit products
