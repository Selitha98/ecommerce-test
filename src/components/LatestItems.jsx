import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const LatestItems = () => {
  const items = [
    { 
      name: 'Casual T-Shirt', 
      price: '$29.99', 
      image: '/api/placeholder/300/400',
      discount: '20% OFF'
    },
    { 
      name: 'Leather Jacket', 
      price: '$129.99', 
      image: '/api/placeholder/300/400',
      discount: '15% OFF'
    },
    { 
      name: 'Denim Jeans', 
      price: '$59.99', 
      image: '/api/placeholder/300/400',
      discount: '10% OFF'
    },
    { 
      name: 'Sneakers', 
      price: '$89.99', 
      image: '/api/placeholder/300/400',
      discount: '25% OFF'
    },
    { 
      name: 'Hoodie', 
      price: '$49.99', 
      image: '/api/placeholder/300/400',
      discount: '15% OFF'
    },
    { 
      name: 'Cargo Pants', 
      price: '$69.99', 
      image: '/api/placeholder/300/400',
      discount: '20% OFF'
    },
    { 
      name: 'Winter Coat', 
      price: '$199.99', 
      image: '/api/placeholder/300/400',
      discount: '30% OFF'
    },
    { 
      name: 'Running Shoes', 
      price: '$99.99', 
      image: '/api/placeholder/300/400',
      discount: '25% OFF'
    },
    { 
      name: 'Sports Shirt', 
      price: '$39.99', 
      image: '/api/placeholder/300/400',
      discount: '10% OFF'
    },
    { 
      name: 'Bomber Jacket', 
      price: '$159.99', 
      image: '/api/placeholder/300/400',
      discount: '20% OFF'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Items</h2>
      <div className="grid  gap-6 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative md:h-70 "
          >
            <div className="absolute top-3 right-3 z-10">
              <Heart className="text-gray-300 hover:text-red-500 cursor-pointer" />
            </div>
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full sm:h-50 md:h-50 lg:h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">{item.price}</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  {item.discount}
                </span>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded flex items-center justify-center hover:bg-blue-700">
                <ShoppingCart className="mr-2" size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestItems;