import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">
            Terms & Conditions
          </Link>
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} YoxoMarket. All rights reserved.
        </p>
      </div>
    </footer>
  );
}