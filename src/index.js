import React from 'react';
import { createRoot } from "react-dom/client"; // Update the import statement
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';

import './index.scss';

const rootElement = document.getElementById("root");

createRoot(rootElement).render( // Use createRoot instead of render
<React.StrictMode>
<BrowserRouter>
  <UserProvider>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </UserProvider>
</BrowserRouter>
</React.StrictMode>,
rootElement
);
