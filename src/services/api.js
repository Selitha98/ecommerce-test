import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${productId}:`, error);
    throw error;
  }
};

export const getProductByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    throw error;
  }
};
