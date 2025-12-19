// src/components/ProductDisplay/ProductDisplay.tsx
import React from 'react';
import { ProductDisplayProps } from '../../types';

// STEP 1: Accept a ProductDisplayProps object for strong typing
export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children
}) => {
  const { id, name, price, description, imageUrl, inStock } = product;

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 rounded-xl shadow-md bg-white border border-gray-100">
      {/* Product image */}
      {imageUrl && (
        <div className="md:w-32 md:h-32 w-full h-40 bg-gray-50 overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Product info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="mt-1 text-base font-bold text-indigo-600">
            ${price.toFixed(2)}
          </p>

          {showDescription && (
            <p className="mt-2 text-sm text-gray-600">
              {description}
            </p>
          )}

          {children && (
            <div className="mt-2 text-xs text-gray-500">
              {children}
            </div>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between">
          {showStockStatus && (
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                inStock
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          )}

          {onAddToCart && (
            <button
              type="button"
              disabled={!inStock}
              onClick={() => onAddToCart(id)}
              className={`ml-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
                inStock
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
