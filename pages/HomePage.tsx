
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to Shopify</h1>
        <p className="text-lg text-gray-600 mb-8">Your one-stop shop for premium quality products.</p>
        <Link 
          to="/products" 
          className="bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 text-lg font-semibold transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
