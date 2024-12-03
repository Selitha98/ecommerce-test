/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from "react";
import { loginUser } from "../services/auth";
import { setToken, removeToken, getToken } from "../utils/localStorage";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());

  // const login = async (username, password) => {
  //   try {
  //     const response = await loginUser(username, password);

  //     setToken(response.token);
  //     setIsAuthenticated(true);
  //     return response;
  //   } catch (error) {
  //     setIsAuthenticated(false);
  //     throw error;
  //   }
  // };

  const login = async (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = users.find((user) => user.email === email && user.password === password);

    if (!foundUser) {
      throw new Error("Authentication failed");
    }

    const token = btoa(`${email}:${password}`);

    setToken(token);
    setUser({
      id: foundUser.id,
      email: foundUser.email,
    });
    setIsAuthenticated(true);

    return { token, user: foundUser };
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
    removeToken();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
