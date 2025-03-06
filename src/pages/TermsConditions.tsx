import React from 'react';
import { HomeButton } from '../components/common/HomeButton';

export function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <div className="prose prose-blue">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Product Usage</h2>
          <p className="mb-4">
            All digital products are for personal or single business use unless otherwise specified.
            Redistribution or resale is prohibited without written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Payment and Delivery</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>All prices are in USD</li>
            <li>Payment is processed via PayPal or WhatsApp</li>
            <li>Digital products are delivered after payment confirmation</li>
            <li>No refunds on digital products once downloaded</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
          <p className="mb-4">
            All products, content, and materials are protected by copyright and intellectual
            property laws. Unauthorized use is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Contact</h2>
          <p>
            For any questions regarding these terms, please contact us via WhatsApp
            at +212678302632.
          </p>
        </section>
      </div>
      <HomeButton />
    </div>
  );
}