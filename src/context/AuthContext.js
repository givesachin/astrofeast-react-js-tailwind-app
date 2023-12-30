// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { login } from '../apis/auth/customer';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    token: null,
  });

  // Check if the user is authenticated on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthState({ isAuthenticated: true, token: token });
    }
  }, []);

  const loginHandler = async (email, password) => {
    const result = await login(email, password);

    if (result.success) {
      setAuthState({ isAuthenticated: true, token: result.token });
      // Store the token in localStorage
      localStorage.setItem('token', result.token);
    }

    return result;
  };

  const logoutHandler = () => {
    setAuthState({ isAuthenticated: false, token: null });
    // Remove the token from localStorage
    localStorage.removeItem('token');
  };

  const isAuthenticated = () => {
    return authState.isAuthenticated;
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login: loginHandler,
        logout: logoutHandler,
        isAuthenticated: isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
