import React from 'react';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function HomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      aria-label="Return to Home"
    >
      <Home className="h-6 w-6" />
    </button>
  );
}