
import React from 'react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-10 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-700">Your cart is empty</h1>
        <Link to="/products" className="text-indigo-600 hover:underline mt-4 inline-block">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border-b pb-4">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100">-</button>
                <span className="px-4 py-1">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100">+</button>
              </div>
              <p className="font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Total: ${cartTotal.toFixed(2)}</h2>
        <Link to="/checkout" className="w-full md:w-auto bg-indigo-600 text-white text-center py-3 px-8 rounded-md hover:bg-indigo-700 text-lg font-semibold transition">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
