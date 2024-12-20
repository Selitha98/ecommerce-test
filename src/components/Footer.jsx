import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useProductCategories } from "../hooks/useProducts";
import { Link } from "react-router-dom";

const Footer = () => {
  const { data: productCategories, isLoading, isError } = useProductCategories();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold mb-4">
            <Link to={`/about-us`}>About Us</Link>
          </h4>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold mb-4">Customer Service</h4>
          <ul>
            <li className="mb-2 hover:text-blue-300 cursor-pointer">
              <Link to={`/contact`}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold mb-4">Shop</h4>
          <ul>
            {productCategories?.map((category, index) => (
              <li key={index} className="mb-2 hover:text-blue-300 cursor-pointer">
                <Link to={`/products?category=${category}`}>{category.toUpperCase()}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold mb-4">Connect</h4>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <Facebook className="hover:text-blue-500 cursor-pointer" />
            <Twitter className="hover:text-blue-400 cursor-pointer" />
            <Instagram className="hover:text-pink-500 cursor-pointer" />
            <Linkedin className="hover:text-blue-600 cursor-pointer" />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Subscribe to our newsletter" 
              className="w-full p-2 rounded bg-gray-800 text-white mb-2"
            />
            <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 py-4 text-center">
        <p>&copy; 2024 Your E-Commerce Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
