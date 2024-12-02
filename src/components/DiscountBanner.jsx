import React from 'react';
import BannerImage from './../assets/images/126800.jpg'

const DiscountBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={BannerImage}
          alt="Summer Sale Background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 to-purple-600/70 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Christmas Sale!
        </h2>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          Get up to 50% off on selected items
        </p>
        <div className="flex justify-center space-x-6">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full 
            hover:bg-blue-100 transition shadow-lg hover:shadow-xl">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;