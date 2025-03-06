import React, { useState } from 'react';
import { X } from 'lucide-react';
import { SignupForm } from './SignupForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={onClose} />
        <div className="relative w-full max-w-md rounded-lg bg-white p-8">
          <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {isLogin ? 'Sign in to your account' : 'Create an account'}
            </h2>
          </div>
          
          {isLogin ? (
            <form className="space-y-4">
              {/* Login form fields */}
            </form>
          ) : (
            <SignupForm />
          )}
          
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}