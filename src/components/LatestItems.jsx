import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartProvider';

const LatestItems = () => {
  const { data: products, isLoading, isError, error } = useProducts({limit: 10 });
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (item, quantity = 1) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image
    }, quantity);
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };
  
  return (
    <section className="container mx-auto px-4 py-12 mt-16">
    <h2 className="text-3xl font-bold text-left mb-8">Latest Products</h2>
    <div className="grid  gap-6 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5">
      {products?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-between bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative md:h-70 "
        >
          
          <img src={item.image} alt={item.title} className="w-full h-48 sm:h-56 md:h-60 object-cover hover:cursor-pointer" onClick={() => handleProductClick(item.id)}/>
          <div className="p-4 flex flex-col">
            <h3 className="font-semibold text-base mb-2 hover:cursor-pointer" onClick={() => handleProductClick(item.id)}>{item.title}</h3>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-blue-600">{`$ ${item.price}`}</span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{item?.rating?.rate}</span>
            </div>
            <button onClick={() => handleAddToCart(item)} className="w-full mt-4 bg-blue-600 text-white py-2 rounded flex items-center justify-center hover:bg-blue-700">
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