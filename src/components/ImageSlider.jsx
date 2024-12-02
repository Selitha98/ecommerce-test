import React, { useState, useEffect } from "react";
import {  ChevronLeft, ChevronRight } from "lucide-react";
import { useProducts } from "../hooks/useProducts";


const products = [
  {
    id: 1,
    name: "Stylish Sneakers",
    description: "Comfortable and trendy sneakers",
    image: "/api/placeholder/800/400?text=Sneakers",
    price: 129.99,
  },
  {
    id: 2,
    name: "Leather Jacket",
    description: "Premium quality leather jacket",
    image: "/api/placeholder/800/400?text=Leather+Jacket",
    price: 249.99,
  },
  {
    id: 3,
    name: "Smart Watch",
    description: "Advanced fitness and health tracker",
    image: "/api/placeholder/800/400?text=Smart+Watch",
    price: 199.99,
  },
];

function ImageSlider() {
  const { data: limitProducts, isLoading, isError, error } = useProducts({ limit: 3 });
  console.log(limitProducts)

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      {/* Slider Images */}
      <div className="absolute inset-0 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {limitProducts.map((product, index) => (
          <div
            key={product.id}
            className="absolute w-full h-full flex items-center justify-center"
            style={{
              left: `${index * 100}%`,
              transform: "translateX(0)",
            }}
          >
            <div className="relative w-full h-full">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              {/* Product Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
                <h2 className="text-2xl font-bold">{product.title}</h2>
                <p className="mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">${product.price}</span>
                  <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white/75">
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
