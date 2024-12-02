import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartProvider';

const Cart = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    calculateTotal,
    clearCart 
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center mt-16">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <Link 
          to="/products" 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center border rounded-lg p-4 hover:shadow-sm transition-shadow"
            >
              {/* Product Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-24 h-24 object-cover rounded mr-4"
              />

              {/* Product Details */}
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>

              {/* Quantity Control */}
              <div className="flex items-center mr-4">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus size={20} />
                </button>
                <span className="px-4 text-lg">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus size={20} />
                </button>
              </div>

              {/* Remove Button */}
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={24} />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 rounded-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
          </div>

          <button 
            onClick={clearCart}
            className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Clear Cart
          </button>

          <button 
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;