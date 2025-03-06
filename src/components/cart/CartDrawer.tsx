import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { CartItem } from './CartItem';
import { WhatsAppCheckout } from '../checkout/WhatsAppCheckout';
import { PayPalCheckout } from '../checkout/PayPalCheckout';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { state, dispatch } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    dispatch({ type: 'CLEAR_CART' });
    onClose();
    alert('Payment successful! Thank you for your purchase.');
  };

  const handleCheckout = () => {
    if (!user) {
      onClose();
      navigate('/login');
      return;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 flex max-w-full">
        <div className="w-screen max-w-md">
          <div className="flex h-full flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-6">
              <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4">
              {state.items.map(item => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            <div className="border-t border-gray-200 px-4 py-6">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Total</p>
                <p>${state.total.toFixed(2)}</p>
              </div>
              <div className="space-y-4">
                {user ? (
                  <>
                    <PayPalCheckout 
                      items={state.items} 
                      total={state.total} 
                      onSuccess={handlePaymentSuccess}
                    />
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or</span>
                      </div>
                    </div>
                    <WhatsAppCheckout items={state.items} total={state.total} />
                  </>
                ) : (
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                  >
                    Sign in to Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}