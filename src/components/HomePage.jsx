import { ArrowRight, ChevronRight } from 'lucide-react';
import { books, categories } from '../data';
import BookCard from './BookCard';

const HomePage = ({ onNavigate, onSelectBook }) => {
  const featuredBooks = books.slice(0, 3);
  const newArrivals = books.slice(9, 12);

  const handleCategoryClick = (categoryName) => {
    onNavigate('catalog', categoryName);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-slideUp">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Your Next Great Read
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Explore thousands of books across all genres. From timeless classics to contemporary bestsellers, find the perfect book for you.
              </p>
              <button
                onClick={() => onNavigate('catalog')}
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                Start Exploring
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-96 bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                  alt="Featured Book"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slideUp">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Browse by Category</h2>
            <p className="text-gray-600 text-lg">Find books in your favorite genres</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {categories.slice(0, 8).map(category => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className="category-card transform transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${category.id * 0.1}s` }}
              >
                <span className="text-5xl mb-3">{category.icon}</span>
                <h3 className="font-bold text-lg text-center">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slideUp">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Books</h2>
            <p className="text-gray-600 text-lg">Handpicked selections just for you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <div
                key={book.id}
                className="animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BookCard
                  book={book}
                  onClick={() => onSelectBook(book.id)}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('catalog')}
              className="inline-flex items-center px-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              View All Books
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slideUp">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">New Arrivals</h2>
            <p className="text-gray-600 text-lg">Latest additions to our collection</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newArrivals.map((book, index) => (
              <div
                key={book.id}
                className="animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BookCard
                  book={book}
                  onClick={() => onSelectBook(book.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slideUp">
          <h2 className="text-4xl font-bold mb-6">Start Your Reading Journey Today</h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of readers exploring new worlds through our curated book collection
          </p>
          <button
            onClick={() => onNavigate('catalog')}
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            Explore Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
