import React from 'react';

const DiscountBanner = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
      <div className="text-center px-4">
        <h2 className="text-5xl font-bold mb-6">Summer Sale!</h2>
        <p className="text-2xl mb-8">Get up to 50% off on selected items</p>
        <div className="flex justify-center space-x-6">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-100 transition">
            Shop Now
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;