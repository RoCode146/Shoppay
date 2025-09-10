
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../hooks/useCart';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const productId = id ? parseInt(id, 10) : undefined;
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-gray-700">Product not found</h1>
        <Link to="/products" className="text-indigo-600 hover:underline mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img className="w-full h-auto rounded-lg object-cover" src={product.imageUrl} alt={product.name} />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-2xl text-indigo-600 font-semibold mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
          <div className="flex items-center mb-6">
            <span className="text-sm font-semibold text-gray-500 mr-2">Category:</span>
            <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">{product.category}</span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 text-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
