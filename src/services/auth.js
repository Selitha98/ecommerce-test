/* eslint-disable no-useless-catch */
import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      username,
      password
    });

    return {
      token: response.data.token,
    };
    
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (username, password) => {
  // Note: Fake Store API doesn't support user registration
  // You'll need to mock this or use a different approach
  throw new Error('Registration not supported by this API');
};