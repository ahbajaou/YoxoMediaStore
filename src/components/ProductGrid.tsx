import React from 'react';
import { ProductCard } from './ProductCard';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

interface ProductGridProps {
  onProductAdded: () => void;
}

export function ProductGrid({ onProductAdded }: ProductGridProps) {
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    onProductAdded();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}