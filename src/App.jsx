import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
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
  );
}

export default App;
