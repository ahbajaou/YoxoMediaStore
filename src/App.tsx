import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductGrid } from './components/ProductGrid';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { CartDrawer } from './components/cart/CartDrawer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { ProductDetail } from './pages/ProductDetail';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar onCartClick={() => setIsCartOpen(true)} />
            
            <Routes>
              <Route path="/" element={
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Digital Products</h2>
                  <ProductGrid onProductAdded={() => setIsCartOpen(true)} />
                </main>
              } />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;