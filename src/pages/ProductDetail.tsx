import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { SocialShare } from '../components/SocialShare';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const currentUrl = window.location.href;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
          <p className="text-xl text-blue-600 font-semibold mb-4">${product.price}</p>
          
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2 mb-8"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>

          <div className="mb-8">
            <SocialShare
              url={currentUrl}
              title={product.title}
              description={product.description}
            />
          </div>

          <div className="prose prose-blue max-w-none">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc pl-5 text-gray-600">
              {product.category === 'photography' && (
                <>
                  <li>50+ Professional Presets</li>
                  <li>Compatible with Lightroom Mobile & Desktop</li>
                  <li>Free Updates</li>
                  <li>Video Tutorial Included</li>
                </>
              )}
              {product.category === 'business' && (
                <>
                  <li>Editable Excel Spreadsheets</li>
                  <li>Financial Projections Templates</li>
                  <li>Marketing Plan Templates</li>
                  <li>SWOT Analysis Tools</li>
                </>
              )}
              {product.category === 'marketing' && (
                <>
                  <li>Social Media Strategy Templates</li>
                  <li>Content Calendar</li>
                  <li>Analytics Guide</li>
                  <li>Engagement Tactics</li>
                </>
              )}
              {product.category === 'art' && (
                <>
                  <li>200+ Custom Brushes</li>
                  <li>Pressure Sensitivity Support</li>
                  <li>Multiple Styles</li>
                  <li>Regular Updates</li>
                </>
              )}
              {product.category === 'web-development' && (
                <>
                  <li>Responsive Design</li>
                  <li>Cross-browser Compatible</li>
                  <li>SEO Optimized</li>
                  <li>Documentation Included</li>
                </>
              )}
              {product.category === 'video' && (
                <>
                  <li>4K Resolution</li>
                  <li>Easy to Customize</li>
                  <li>Multiple Styles</li>
                  <li>Tutorial Included</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}