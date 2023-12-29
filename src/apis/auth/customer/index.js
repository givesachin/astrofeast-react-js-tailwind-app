// auth.js

import axios from 'axios';
import { BACKEND_BASE_URL, BEARER_TOKEN, } from '../..';


const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${BACKEND_BASE_URL}/login`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${BEARER_TOKEN}`,
          // Include any other necessary headers here
        },
        withCredentials: true, // Include this if dealing with cookies
      }
    );

    // Assuming your API returns a token upon successful login
    const token = response.data.token;

    // Store the token in localStorage or a state management solution (e.g., Redux)
    localStorage.setItem('token', token);

    return { success: true, token: token };
  } catch (error) {
    console.error('Login error:', error);

    // You can customize the error handling based on your API response
    return { success: false, error: error.response.data.message || 'Login failed' };
  }
};

export { login };
