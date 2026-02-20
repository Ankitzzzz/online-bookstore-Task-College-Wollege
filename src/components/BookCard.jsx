import { ShoppingCart, Star } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const BookCard = ({ book, onClick }) => {
  const { addToCart } = useAppContext();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(book);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div
      onClick={onClick}
      className="book-card overflow-hidden cursor-pointer group"
    >
      {/* Book Cover Image */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      {/* Book Info */}
      <div className="p-4">
        {/* Category Badge */}
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
            {book.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-green-500 transition-colors duration-300 line-clamp-2">
          {book.title}
        </h3>

        {/* Author */}
        <p className="text-sm text-gray-600 mb-2">by {book.author}</p>

        {/* Rating */}
        <div className="mb-3">
          {renderStars(book.rating)}
        </div>

        {/* Price and Button */}
        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-500">
            {book.price.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR'
            })}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors duration-300"
            title="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Stock Status */}
        <p className="text-xs text-gray-500 mt-2">
          {book.stock > 0 ? `${book.stock} in stock` : 'Out of stock'}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
