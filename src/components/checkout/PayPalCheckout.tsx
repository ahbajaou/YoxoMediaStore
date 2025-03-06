import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { CartItem } from '../../types';

interface PayPalCheckoutProps {
  items: CartItem[];
  total: number;
  onSuccess: () => void;
}

export function PayPalCheckout({ items, total, onSuccess }: PayPalCheckoutProps) {
  const initialOptions = {
    clientId: "test", // Replace with your PayPal client ID in production
    currency: "USD",
    intent: "capture"
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: total.toString(),
                breakdown: {
                  item_total: {
                    currency_code: "USD",
                    value: total.toString()
                  }
                }
              },
              items: items.map(item => ({
                name: item.product.title,
                quantity: item.quantity.toString(),
                unit_amount: {
                  currency_code: "USD",
                  value: item.product.price.toString()
                }
              }))
            }]
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order?.capture();
          if (order) {
            onSuccess();
          }
        }}
      />
    </PayPalScriptProvider>
  );
}