import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CartItem } from '../../types';

interface WhatsAppCheckoutProps {
  items: CartItem[];
  total: number;
}

export function WhatsAppCheckout({ items, total }: WhatsAppCheckoutProps) {
  const formatWhatsAppMessage = () => {
    const message = items
      .map(item => `${item.quantity}x ${item.product.title} - $${item.product.price}`)
      .join('\n');
    return encodeURIComponent(`New Order:\n\n${message}\n\nTotal: $${total.toFixed(2)}`);
  };

  const handleCheckout = () => {
    const phoneNumber = '212678302632';
    window.open(`https://wa.me/${phoneNumber}?text=${formatWhatsAppMessage()}`, '_blank');
  };

  return (
    <button
      onClick={handleCheckout}
      className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Checkout via WhatsApp
    </button>
  );
}