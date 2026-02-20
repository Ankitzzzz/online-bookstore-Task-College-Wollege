import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Home, BookOpen, LogOut } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Header = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useAppContext();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'catalog', label: 'Catalog', icon: BookOpen },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer select-none"
            onClick={() => handleNavClick('home')}
          >
            <BookOpen className="w-8 h-8 text-green-500 mr-2" />
            <span className="font-bold text-xl text-gray-800 hidden sm:inline">
              BookStore
            </span>
            <span className="font-bold text-xl text-gray-800 sm:hidden">BS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                    currentPage === item.id
                      ? 'text-green-500 border-b-2 border-green-500'
                      : 'text-gray-600 hover:text-green-500'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <button
              onClick={() => handleNavClick('cart')}
              className="relative text-gray-600 hover:text-green-500 transition-colors duration-300"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-green-500 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 animate-slideUp">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 w-full px-4 py-2 rounded-lg mb-2 font-medium transition-colors duration-300 ${
                    currentPage === item.id
                      ? 'bg-green-100 text-green-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
