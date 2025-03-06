import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';

interface CardCheckoutProps {
  total: number;
}

export function CardCheckout({ total }: CardCheckoutProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCardPayment = async () => {
    setIsProcessing(true);
    // Simulating payment processing
    setTimeout(() => {
      alert('This is a demo - in production, this would integrate with a payment processor like Stripe');
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <button
      onClick={handleCardPayment}
      disabled={isProcessing}
      className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 disabled:bg-blue-400"
    >
      <CreditCard className="mr-2 h-5 w-5" />
      {isProcessing ? 'Processing...' : 'Pay with Card'}
    </button>
  );
}