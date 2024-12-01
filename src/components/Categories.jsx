import React from 'react';
import { ShoppingBag, Shirt, Watch, Headphones } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      name: 'Fashion',
      icon: <Shirt className="w-12 h-12 text-blue-600" />,
      description: 'Trending Styles',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Accessories',
      icon: <Watch className="w-12 h-12 text-green-600" />,
      description: 'Latest Designs',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Electronics',
      icon: <Headphones className="w-12 h-12 text-purple-600" />,
      description: 'Tech Gadgets',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Bags',
      icon: <ShoppingBag className="w-12 h-12 text-red-600" />,
      description: 'Carry in Style',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-8 min-h-[50vh] flex items-center">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`${category.bgColor} rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center 
                          aspect-square hover:scale-105 transition-transform duration-300 cursor-pointer`}
            >
              <div className="mb-4">
                {category.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;