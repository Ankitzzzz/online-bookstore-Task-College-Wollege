import { ArrowLeft, Heart, Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { books } from '../data';
import BookCard from './BookCard';

const BookDetailsPage = ({ bookId, onBack, onSelectBook }) => {
  const book = books.find(b => b.id === bookId);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToCart } = useAppContext();

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Book not found</p>
      </div>
    );
  }

  // Get related books (same category, excluding current book)
  const relatedBooks = books.filter(b => b.category === book.category && b.id !== book.id).slice(0, 4);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    for (let i = 0; i < quantity; i++) {
      addToCart(book);
    }
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 500);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-lg font-semibold text-gray-700">{rating} / 5</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-green-500 hover:text-green-600 font-semibold mb-8 transition-colors duration-300 animate-slideUp"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Catalog
        </button>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-slideUp" style={{ animationDelay: '0.1s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Book Cover */}
            <div className="flex items-center justify-center">
              <div className="relative group">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="max-w-sm w-full h-auto rounded-lg shadow-lg"
                />
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Heart
                    className={`w-6 h-6 transition-colors duration-300 ${
                      isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Book Details */}
            <div>
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-4 py-2 text-sm font-bold text-white bg-green-500 rounded-full">
                  {book.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                {book.title}
              </h1>

              {/* Author */}
              <p className="text-xl text-gray-600 mb-4">by {book.author}</p>

              {/* Rating */}
              <div className="mb-6">
                {renderStars(book.rating)}
              </div>

              {/* Divider */}
              <hr className="my-6" />

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-green-500">
                  ${book.price.toFixed(2)}
                </span>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <p className={`text-lg font-semibold ${
                  book.stock > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {book.stock > 0 ? `${book.stock} in stock` : 'Out of stock'}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3">Quantity:</label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                  >
                    <Minus className="w-5 h-5 text-gray-700" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 px-3 py-2 border border-gray-300 rounded-lg text-center font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                  >
                    <Plus className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={book.stock === 0 || isAddingToCart}
                className={`w-full flex items-center justify-center px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                  book.stock === 0
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                <ShoppingCart className="w-6 h-6 mr-2" />
                {isAddingToCart ? '✓ Added to Cart' : 'Add to Cart'}
              </button>

              {/* Book Specifications */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-bold text-gray-800 mb-4">About This Book</h3>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <span className="font-semibold">Publisher:</span> BookStore Press
                  </div>
                  <div>
                    <span className="font-semibold">ISBN:</span> 978-0-{Math.random().toString().slice(2, 11)}
                  </div>
                  <div>
                    <span className="font-semibold">Pages:</span> 320
                  </div>
                  <div>
                    <span className="font-semibold">Format:</span> Hardcover
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
          <div className={`text-gray-700 leading-relaxed ${!showFullDescription ? 'line-clamp-3' : ''}`}>
            <p>{book.description}</p>
            <p className="mt-4">
              This captivating work continues to resonate with readers across generations, offering profound insights into human nature, society, and the eternal questions that define our existence. The author's masterful prose and rich character development make this a must-read for anyone seeking literature that challenges and inspires.
            </p>
          </div>
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="mt-4 text-green-500 font-semibold hover:text-green-600 transition-colors duration-300"
          >
            {showFullDescription ? 'Read Less' : 'Read More'}
          </button>
        </div>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <div className="mt-16 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Related Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedBooks.map((relatedBook, index) => (
                <div
                  key={relatedBook.id}
                  className="animate-slideUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <BookCard
                    book={relatedBook}
                    onClick={() => onSelectBook(relatedBook.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetailsPage;
