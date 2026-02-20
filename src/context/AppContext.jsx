import React, { useState, useCallback } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const addToCart = useCallback((book) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === book.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((bookId) => {
    setCart(prev => prev.filter(item => item.id !== bookId));
  }, []);

  const updateQuantity = useCallback((bookId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(bookId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === bookId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const getCartTotal = useCallback(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const value = {
    cart,
    cartCount: cart.length,
    cartTotal: getCartTotal(),
    addToCart,
    removeFromCart,
    updateQuantity,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
