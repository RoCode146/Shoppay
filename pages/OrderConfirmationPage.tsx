
import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="text-center py-20 bg-white rounded-lg shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You for Your Order!</h1>
      <p className="text-gray-600 mb-8">Your order has been placed successfully. A confirmation email has been sent to you.</p>
      <Link to="/" className="bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 font-semibold transition">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmationPage;
