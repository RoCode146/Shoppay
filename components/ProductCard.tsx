
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <Link to={`/products/${product.id}`}>
        <img className="w-full h-56 object-cover" src={product.imageUrl} alt={product.name} />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
