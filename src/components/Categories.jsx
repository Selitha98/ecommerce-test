import React from "react";
import { ShoppingBag, Shirt, Watch, Headphones, Gem } from "lucide-react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Categories = ({ data: productCategories, isLoading, isError }) => {
  // Mapping of category icons
  const categoryIcons = {
    electronics: <Headphones className="w-12 h-12 text-purple-600" />,
    jewelery: <Gem className="w-12 h-12 text-green-600" />,
    "men's clothing": <Shirt className="w-12 h-12 text-blue-600" />,
    "women's clothing": <Shirt className="w-12 h-12 text-pink-600" />,
  };

  // Mapping of category descriptions
  const categoryDescriptions = {
    electronics: "Tech Gadgets",
    jewelery: "Elegant Accessories",
    "men's clothing": "Men's Fashion",
    "women's clothing": "Women's Styles",
  };

  // Mapping of background colors
  const categoryBackgrounds = {
    electronics: "bg-purple-50",
    jewelery: "bg-green-50",
    "men's clothing": "bg-blue-50",
    "women's clothing": "bg-pink-50",
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen mt-16">
        <Spinner size={70} />
      </div>
    );
  }
  

  return (
    <section className="container mx-auto px-4 py-8 min-h-[50vh] flex items-center">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <Link key={index} to={`/products?category=${category}`}>
              <div
                className={`${categoryBackgrounds[category]} rounded-xl shadow-lg p-6 
                          flex flex-col items-center justify-center text-center 
                          aspect-square hover:scale-105 transition-transform 
                          duration-300 cursor-pointer`}
              >
                <div className="mb-4">{categoryIcons[category] || <ShoppingBag className="w-12 h-12 text-gray-600" />}</div>
                <h3 className="font-semibold text-lg mb-2 capitalize">{category}</h3>
                <p className="text-sm text-gray-500">{categoryDescriptions[category] || "Explore Collection"}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
