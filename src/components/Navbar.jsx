import React, { useState } from "react";
import { ShoppingCart, User, Menu, Search, ChevronDown, LogIn } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useProductCategories } from "../hooks/useProducts";
import { useAuth } from "../context/AuthContext";
import { Logout } from "@mui/icons-material";
import Swal from "sweetalert2";
import { useCart } from "../context/CartProvider";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const { cart , clearCart} = useCart();
  const { data: productCategories, isLoading, isError } = useProductCategories();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  console.log(isAuthenticated);

  function handleLogout() {
    Swal.fire({
      title: "Are you want to logout ?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      icon: "question",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        clearCart()
      }
    });
  }

  const ProductDropdown = () => {
    return (
      <div
        className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200"
        onMouseLeave={() => setIsProductDropdownOpen(false)}
      >
        <div className="container mx-auto px-4 py-6 grid grid-cols-4 gap-6">
          {/* Clothes Category */}
          <div>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <NavLink to={`/products?category=${category}`} className="text-gray-600 hover:text-blue-500 transition-colors">
                    {category.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="absolute top-0 left-0 bg-white ">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md ">
        <div className="container mx-2 px-6 py-3 flex items-center justify-between space-x-4 max-w-full">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl font-bold text-gray-800 hidden md:block">
              <Link to={"/"}>ECom</Link>{" "}
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-800">
              <Menu size={24} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex-grow mx-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </form>
          </div>

          {/* Nav Link */}
          <div className="hidden md:flex flex-grow mx-4 space-x-4 text-xs">
            <NavLink
              to="/"
              className={({ isActive }) => `
      px-3 py-2 rounded-lg transition-colors duration-300
      ${isActive ? "bg-blue-500 text-white font-semibold" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
    `}
            >
              Home
            </NavLink>
            <div className="relative" onClick={() => setIsProductDropdownOpen(true)}>
              <NavLink
                to="/products"
                className={({ isActive }) => `
              px-3 py-2 rounded-lg transition-colors duration-300 flex items-center
              ${isActive ? "bg-blue-500 text-white font-semibold" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
            `}
              >
                Products
                <ChevronDown size={16} className="ml-1" />
              </NavLink>

              {isProductDropdownOpen && <ProductDropdown />}
            </div>
            <NavLink
              to="/about-us"
              className={({ isActive }) => `
      px-3 py-2 rounded-lg transition-colors duration-300
      ${isActive ? "bg-blue-500 text-white font-semibold" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
    `}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `
      px-3 py-2 rounded-lg transition-colors duration-300
      ${isActive ? "bg-blue-500 text-white font-semibold" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
    `}
            >
              Contact Us
            </NavLink>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <button className="relative" onClick={() => navigate("/cart")}>
              <ShoppingCart size={24} className="text-gray-600 hover:text-gray-900" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs">{cart.length > 0 ?cart.length : "0"}</span>
            </button>
            {isAuthenticated ? (
              <>
                <button onClick={() => navigate("/profile")}>
                  <User size={24} className="text-gray-600 hover:text-gray-900" />
                </button>
                <button onClick={handleLogout}>
                  <Logout size={24} className="text-gray-600 hover:text-gray-900" />
                </button>
              </>
            ) : (
              <button onClick={() => navigate("/login")}>
                <LogIn size={24} className="text-gray-600 hover:text-gray-900" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
        ${isMenuOpen ? "block" : "hidden"} 
        md:hidden bg-white shadow-md
      `}
        >
          <nav>
            <ul className="flex flex-col items-center">
              <li className="w-full text-center">
                <a href="#home" className="block text-gray-600 hover:text-gray-900 px-4 py-2">
                  Home
                </a>
              </li>
              <li className="w-full text-center">
                <a href="#products" className="block text-gray-600 hover:text-gray-900 px-4 py-2">
                  Products
                </a>
              </li>
              <li className="w-full text-center">
                <a href="#about" className="block text-gray-600 hover:text-gray-900 px-4 py-2">
                  About Us
                </a>
              </li>
              <li className="w-full text-center">
                <a href="#contact" className="block text-gray-600 hover:text-gray-900 px-4 py-2">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
