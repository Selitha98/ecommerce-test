import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">About Us</h4>
          <ul>
            <li className="mb-2 hover:text-blue-300 cursor-pointer">Our Story</li>
            <li className="mb-2 hover:text-blue-300 cursor-pointer">Careers</li>
            <li className="mb-2 hover:text-blue-300 cursor-pointer">Press</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Customer Service</h4>
          <ul>
            <li className="mb-2 hover:text-blue-300 cursor-pointer">Contact</li>
            <li className="mb-2 hover:text-blue-300 cursor-pointer">Shipping</li>
            <li className="mb-2 hover:text-blue-300 cursor-pointer">Returns</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Shop</h4>
          <ul>
            <li className="mb-2 hover:text-blue-300 cursor-pointer">Men</li>
            <li className="mb-2 hover:text-blue-300 cursor-pointer">Women</li>
            <li className="mb-2 hover:text-blue-300 cursor-pointer">Kids</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <Facebook className="hover:text-blue-500 cursor-pointer" />
            <Twitter className="hover:text-blue-400 cursor-pointer" />
            <Instagram className="hover:text-pink-500 cursor-pointer" />
            <Linkedin className="hover:text-blue-600 cursor-pointer" />
          </div>
          <div className="mt-4">
            <input 
              type="email" 
              placeholder="Subscribe to our newsletter" 
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
            <button className="mt-2 w-full bg-blue-600 py-2 rounded hover:bg-blue-700">
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