/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { ShoppingCart, Heart, Plus, Minus } from 'lucide-react';

const Product = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);

  console.log(product);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">

          {/* Main Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img src={selectedImage} alt={product.title} className="w-auto h-[500px] object-cover" />
          </div>

          {product.images && product.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer ${
                    selectedImage === image ? "border-2 border-blue-500" : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

          <p className="text-gray-600">{product.shortDescription}</p>

          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</span>

            {product.originalPrice && <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-lg">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:bg-gray-100">
                <Minus size={20} />
              </button>
              <span className="px-4 text-lg">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-gray-100">
                <Plus size={20} />
              </button>
            </div>

            <button className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <ShoppingCart className="mr-2" size={20} />
              Add to Cart
            </button>

            
          </div>

          <hr className="border-t border-gray-200" />

          <div>
            <h2 className="text-xl font-semibold mb-4">Product Description</h2>
            <div className="text-gray-700 prose max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
