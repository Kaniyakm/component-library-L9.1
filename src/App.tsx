// src/App.tsx
import React, { useState } from 'react';
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import type { Product, User } from "./types";

// STEP 1: Example data for props
const demoUser: User = {
  id: 'user-1',
  name: 'Kaniya Martin',
  email: 'kaniya.martin@example.com',
  role: 'Frontend Developer',
  avatarUrl: ''
};

const demoProduct: Product = {
  id: 'prod-1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: 'https://via.placeholder.com/300x200',
  inStock: true
};

const App: React.FC = () => {
  // STEP 2: Local state to demo interaction between components
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems((prev) => [...prev, productId]);
    setShowAlert(true);
  };

  const handleEditUser = (userId: string) => {
    // In a real app, this might open a modal or navigate to an edit page
    alert(`Editing user profile with ID: ${userId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <header>
          <h1 className="text-2xl font-bold">Component Library Demo</h1>
          <p className="text-sm text-gray-600 mt-1">
            Reusable components built with React and TypeScript.
          </p>
        </header>

        {/* AlertBox shown when product is added to cart */}
        {showAlert && (
          <AlertBox
            type="success"
            message="Product added to cart!"
            onClose={() => setShowAlert(false)}
          >
            <p className="text-xs">
              Cart items: {cartItems.length}
            </p>
          </AlertBox>
        )}

        <main className="grid gap-6 md:grid-cols-2">
          {/* User profile card */}
          <UserProfileCard
            user={demoUser}
            showEmail
            showRole
            onEdit={handleEditUser}
          >
            <span>Last login: 2 hours ago</span>
          </UserProfileCard>

          {/* Product display */}
          <ProductDisplay
            product={demoProduct}
            showDescription
            showStockStatus
            onAddToCart={handleAddToCart}
          >
            <span>Free shipping available</span>
          </ProductDisplay>
        </main>
      </div>
    </div>
  );
};

export default App;
