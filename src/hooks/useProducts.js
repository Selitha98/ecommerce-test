import { useQuery } from "react-query";
import { getAllProducts, getProductById, getProductByIdCategories } from "../services/api";

// fetch all products
export const useProducts = (options = {}) => {
  return useQuery({
    queryKey: ["products", JSON.stringify(options)],
    queryFn: () => getAllProducts(options),
    staleTime: 5 * 60 * 1000,   
    cacheTime: 10 * 60 * 1000, 
    refetchOnMount: false,
    refetchOnWindowFocus: false,
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

// fetch a products categories
export const useProductCategories = () => {
    return useQuery({
      queryKey: ["products-categories"],
      queryFn: getProductByIdCategories,
    });
  };
  


