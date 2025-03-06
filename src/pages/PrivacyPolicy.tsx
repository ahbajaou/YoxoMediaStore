import React from 'react';
import { HomeButton } from '../components/common/HomeButton';

export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose prose-blue">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">When you use our digital marketplace, we collect:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Contact information (name, email)</li>
            <li>Purchase history</li>
            <li>Product usage data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Process your orders and payments</li>
            <li>Send order confirmations and updates</li>
            <li>Provide customer support</li>
            <li>Improve our products and services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information.
            Your data is encrypted and stored securely.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have questions about our privacy policy, please contact us via WhatsApp
            at +212678302632.
          </p>
        </section>
      </div>
      <HomeButton />
    </div>
  );
}