
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const ProductsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
