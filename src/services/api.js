/* eslint-disable no-unused-vars */
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = async (options = {}) => {
  try {
    const { limit = null, sort = null, category = null, page = null } = options;

    const queryParams = new URLSearchParams();

    if (limit) {
      queryParams.append("limit", limit);
    }

    if (sort) {
      queryParams.append("sort", sort);
    }

    let url = `${BASE_URL}/products`;

    if (category) {
      url = `${BASE_URL}/products/category/${category}`;
    }

    const queryString = queryParams.toString();
    const fullUrl = queryString ? `${url}?${queryString}` : url;

    const response = await axios.get(fullUrl);
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

export const getLimitProducts = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    throw error;
  }
};
