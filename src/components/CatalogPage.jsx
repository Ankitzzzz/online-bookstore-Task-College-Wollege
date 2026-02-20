import React, { useMemo } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { books, categories } from '../data';
import BookCard from './BookCard';
import { useAppContext } from '../context/AppContext';

const CatalogPage = ({ selectedCategory, onSelectBook }) => {
  const { searchQuery, setSearchQuery, selectedCategory: contextCategory, setSelectedCategory, currentPage, setCurrentPage } = useAppContext();
  const categoryFilter = selectedCategory || contextCategory;
  const BOOKS_PER_PAGE = 12;

  const filteredBooks = useMemo(() => {
    let filtered = books;

    // Filter by category
    if (categoryFilter) {
      filtered = filtered.filter(book => book.category === categoryFilter);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [categoryFilter, searchQuery]);

  const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);
  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
  const paginatedBooks = filteredBooks.slice(startIndex, startIndex + BOOKS_PER_PAGE);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === categoryFilter ? '' : category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 animate-slideUp">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Books Catalog</h1>
          <p className="text-gray-600">Showing {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <div className="flex items-center mb-4">
                <Filter className="w-5 h-5 text-green-500 mr-2" />
                <h2 className="font-bold text-lg text-gray-800">Filters</h2>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('')}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-300 ${
                      !categoryFilter
                        ? 'bg-green-100 text-green-700 font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.name)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-300 ${
                        categoryFilter === category.name
                          ? 'bg-green-100 text-green-700 font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(categoryFilter || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setSearchQuery('');
                    setCurrentPage(1);
                  }}
                  className="w-full py-2 px-3 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200 transition-colors duration-300 text-sm"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title or author..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Books Grid */}
            {paginatedBooks.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {paginatedBooks.map((book, index) => (
                    <div
                      key={book.id}
                      className="animate-slideUp"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <BookCard
                        book={book}
                        onClick={() => onSelectBook(book.id)}
                      />
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center space-x-4 mt-12">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        currentPage === 1
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          : 'bg-green-500 text-white hover:bg-green-600'
                      }`}
                    >
                      <ChevronLeft className="w-5 h-5 mr-1" />
                      Previous
                    </button>

                    <div className="flex items-center space-x-2">
                      {[...Array(totalPages)].map((_, i) => {
                        const pageNum = i + 1;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                              currentPage === pageNum
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        currentPage === totalPages
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          : 'bg-green-500 text-white hover:bg-green-600'
                      }`}
                    >
                      Next
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No books found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setSearchQuery('');
                    setCurrentPage(1);
                  }}
                  className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
