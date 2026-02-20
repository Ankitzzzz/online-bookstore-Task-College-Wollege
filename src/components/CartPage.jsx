import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const CartPage = ({ onBack, onNavigate }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useAppContext();
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleRemove = (bookId) => {
    removeFromCart(bookId);
    setConfirmDelete(null);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert('Thank you for your purchase! Your order has been placed successfully. Order #' + Math.floor(Math.random() * 100000));
      setIsCheckingOut(false);
    }, 1000);
  };

  const shipping = cart.length > 0 ? 10 : 0;
  const tax = (cartTotal + shipping) * 0.08; // 8% tax
  const total = cartTotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('catalog')}
          className="flex items-center text-green-500 hover:text-green-600 font-semibold mb-8 transition-colors duration-300 animate-slideUp"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Continue Shopping
        </button>

        {/* Page Header */}
        <div className="mb-8 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center space-x-3 mb-2">
            <ShoppingCart className="w-8 h-8 text-green-500" />
            <h1 className="text-4xl font-bold text-gray-800">Shopping Cart</h1>
          </div>
          <p className="text-gray-600">
            You have {cart.length} item{cart.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100 border-b">
                        <th className="px-6 py-4 text-left font-bold text-gray-800">Book</th>
                        <th className="px-6 py-4 text-left font-bold text-gray-800 hidden md:table-cell">Price</th>
                        <th className="px-6 py-4 text-left font-bold text-gray-800">Quantity</th>
                        <th className="px-6 py-4 text-left font-bold text-gray-800 hidden md:table-cell">Total</th>
                        <th className="px-6 py-4 text-center font-bold text-gray-800">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, index) => (
                        <tr
                          key={item.id}
                          className="border-b hover:bg-gray-50 transition-colors duration-300 animate-slideUp"
                          style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                        >
                          {/* Product Info */}
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-4">
                              <img
                                src={item.cover}
                                alt={item.title}
                                className="w-16 h-24 object-cover rounded-lg"
                              />
                              <div>
                                <p className="font-bold text-gray-800">{item.title}</p>
                                <p className="text-sm text-gray-600">{item.author}</p>
                              </div>
                            </div>
                          </td>

                          {/* Price */}
                          <td className="px-6 py-4 font-semibold text-gray-800 hidden md:table-cell">
                            ${item.price.toFixed(2)}
                          </td>

                          {/* Quantity Controls */}
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                              >
                                <Minus className="w-4 h-4 text-gray-700" />
                              </button>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                className="w-12 px-2 py-1 border border-gray-300 rounded-lg text-center font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
                              />
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                              >
                                <Plus className="w-4 h-4 text-gray-700" />
                              </button>
                            </div>
                          </td>

                          {/* Total */}
                          <td className="px-6 py-4 font-bold text-green-600 hidden md:table-cell">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>

                          {/* Remove Button */}
                          <td className="px-6 py-4 text-center">
                            <button
                              onClick={() => setConfirmDelete(item.id)}
                              className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors duration-300"
                              title="Remove from cart"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>

                            {/* Delete Confirmation */}
                            {confirmDelete === item.id && (
                              <div className="absolute bg-white rounded-lg shadow-xl p-4 z-10">
                                <p className="text-gray-800 font-semibold mb-3">Remove this item?</p>
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => handleRemove(item.id)}
                                    className="flex-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold transition-colors duration-300"
                                  >
                                    Yes
                                  </button>
                                  <button
                                    onClick={() => setConfirmDelete(null)}
                                    className="flex-1 px-3 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 font-semibold transition-colors duration-300"
                                  >
                                    No
                                  </button>
                                </div>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Summary */}
              <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
                <p className="text-gray-600 mb-2">
                  Subtotal: <span className="font-bold text-gray-800">${cartTotal.toFixed(2)}</span>
                </p>
              </div>
            </div>

            {/* Order Summary - Sidebar */}
            <div className="lg:col-span-1 animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
                <h2 className="font-bold text-2xl text-gray-800 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax (8%)</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <hr className="my-6" />

                <div className="flex justify-between mb-6">
                  <span className="font-bold text-lg text-gray-800">Total</span>
                  <span className="font-bold text-2xl text-green-500">${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                    isCheckingOut
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
                </button>

                <button
                  onClick={() => onNavigate('catalog')}
                  className="w-full mt-3 py-3 rounded-lg font-semibold border-2 border-green-500 text-green-500 hover:bg-green-50 transition-colors duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Empty Cart State
          <div className="bg-white rounded-lg shadow-lg p-12 text-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Your cart is empty</h2>
            <p className="text-gray-600 text-lg mb-8">
              Explore our collection and add some books to your cart to get started!
            </p>
            <button
              onClick={() => onNavigate('catalog')}
              className="px-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
