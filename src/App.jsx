import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import LayoutWithNavbarFooter from "./components/LayoutWithNavbarFooter";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import { CartProvider } from "./context/CartProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Router>
              <Routes>
                {/* Login and Register routes without Navbar/Footer */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Routes with Navbar and Footer */}
                <Route element={<LayoutWithNavbarFooter />}>
                  <Route path="/" element={<Home />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/profile" element={<Profile />} />
                  </Route>
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:productId" element={<ProductDetails />} />

                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/contact" element={<ContactUs />} />
                </Route>
              </Routes>
            </Router>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition:Bounce
            />
          </div>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
