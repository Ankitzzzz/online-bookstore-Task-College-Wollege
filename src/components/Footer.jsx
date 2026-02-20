import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-green-500 mr-2" />
              <span className="font-bold text-xl">BookStore</span>
            </div>
            <p className="text-gray-400">
              Discover your next great read with our curated collection of books across all genres.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Catalog', 'About Us', 'Contact'].map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Fiction', 'Mystery', 'Science', 'Fantasy'].map(cat => (
                <li key={cat}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Mail, label: 'Email' },
              ].map(social => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>
            &copy; {currentYear} BookStore. All rights reserved. | Created with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
