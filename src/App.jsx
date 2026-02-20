import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CatalogPage from './components/CatalogPage';
import BookDetailsPage from './components/BookDetailsPage';
import CartPage from './components/CartPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleNavigate = (page, category = null) => {
    setCurrentPage(page);
    setSelectedBook(null);
    if (category) {
      setSelectedCategory(category);
    }
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBook = (bookId) => {
    setSelectedBook(bookId);
    setCurrentPage('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromDetails = () => {
    setSelectedBook(null);
    setCurrentPage('catalog');
  };

  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen bg-white">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />

        <main className="flex-grow">
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onSelectBook={handleSelectBook}
            />
          )}

          {currentPage === 'catalog' && (
            <CatalogPage
              selectedCategory={selectedCategory}
              onSelectBook={handleSelectBook}
            />
          )}

          {currentPage === 'details' && selectedBook && (
            <BookDetailsPage
              bookId={selectedBook}
              onBack={handleBackFromDetails}
              onSelectBook={handleSelectBook}
            />
          )}

          {currentPage === 'cart' && (
            <CartPage
              onBack={handleBackFromDetails}
              onNavigate={handleNavigate}
            />
          )}
        </main>

        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
