
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const CheckoutPage: React.FC = () => {
  const { cartTotal, clearCart, cartItems } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/');
    }
  }, [cartItems, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would process payment here
    console.log('Order placed:', formData);
    clearCart();
    navigate('/confirmation');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP / Postal Code</label>
              <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
          </div>
          <div className="mt-8">
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 text-lg font-semibold transition">
              Place Order
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 h-fit">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between">
              <span className="truncate pr-2">{item.name} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="border-t mt-6 pt-4">
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
