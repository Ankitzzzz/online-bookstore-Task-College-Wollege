# 📚 Online Bookstore Website

A beautiful, modern, and responsive online bookstore built with React, Vite, and Tailwind CSS. Features a stunning UI with smooth animations, complete book catalog management, and a fully functional shopping cart.

## 🌟 Features

### Home Page
- **Hero Section**: Large banner with gradient background and call-to-action button
- **Featured Books**: Handpicked selection of 3-4 book cards with hover effects
- **Categories Grid**: 6 browsable category cards with emoji icons
- **New Arrivals**: Showcase of latest books added to the collection
- **Animations**: Fade-in effects on page load, smooth hover scale animations on cards

### Books Catalog Page
- **Responsive Grid Layout**: Shows books in a beautiful grid (1 column on mobile, 2 on tablet, 3 on desktop)
- **Book Cards**: Display cover image, title, author, price, and star ratings
- **Advanced Search**: Real-time search functionality by book title or author name
- **Category Filter**: Dropdown filter to browse books by specific categories
- **Pagination**: Smart pagination showing 12 books per page with Previous/Next buttons
- **Hover Effects**: Cards lift up with shadow on hover for interactive feedback

### Book Details Page
- **Responsive Layout**: Book cover on left, details on right (stacks on mobile)
- **Complete Information**: Title, author, price, star ratings, stock status
- **Expandable Description**: Full book description with Read More/Less toggle
- **Quantity Selector**: Plus/minus buttons to adjust purchase quantity
- **Add to Cart**: Prominent button with visual feedback when adding items
- **Related Books**: Shows 4 similar books from the same category at the bottom
- **Wishlist Feature**: Heart button to add books to wishlist

### Shopping Cart Page
- **Cart Items List**: Displays all added books with thumbnails, titles, prices, and quantities
- **Quantity Management**: Update quantities with +/- buttons or direct input
- **Remove Items**: Delete items from cart with confirmation dialog
- **Price Summary**: Auto-calculated subtotal, shipping fees, and tax (8%)
- **Order Total**: Clear breakdown of all costs
- **Empty State**: Friendly message with illustration when cart is empty
- **Checkout**: Prominent checkout button with order confirmation

### Navigation & Layout
- **Responsive Header**: Logo, navigation links, and mobile hamburger menu
- **Cart Badge**: Shows current number of items in cart
- **Footer**: Links, social media icons, and copyright information
- **Active Page Indicator**: Highlights current page in navigation
- **Smooth Navigation**: Seamless transitions between pages with scroll-to-top effect

## 🛠️ Technology Stack

- **Frontend Framework**: React 18+ with Hooks (useState, useEffect)
- **Build Tool**: Vite (lightning-fast development server)
- **Styling**: Tailwind CSS 3+ for all UI components
- **Icons**: Lucide React for beautiful, scalable icons
- **Language**: JavaScript ES6+
- **State Management**: React Context API

## 📋 Project Structure

```
online-bookstore/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation header with cart badge
│   │   ├── Footer.jsx           # Footer with links and social media
│   │   ├── BookCard.jsx         # Reusable book card component
│   │   ├── HomePage.jsx         # Hero, featured, and new arrivals sections
│   │   ├── CatalogPage.jsx      # Search, filter, and pagination
│   │   ├── BookDetailsPage.jsx  # Book details and related books
│   │   └── CartPage.jsx         # Shopping cart management
│   ├── context/
│   │   └── AppContext.jsx       # Global state management
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # React entry point
│   ├── index.css                # Global styles and animations
│   └── data.js                  # Sample book data and categories
├── public/
│   └── vite.svg
├── package.json                 # Project dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS customization
├── postcss.config.js           # PostCSS configuration
└── index.html                  # HTML entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (or navigate to the project directory)
```bash
cd online-bookstore
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in browser**
- The app will automatically open at `http://localhost:5173`
- If not, manually navigate to the URL shown in the terminal

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📚 Sample Data

The project includes 12 sample books across 8 different categories:

### Categories
- Fiction 📖
- Mystery 🔍
- Science 🔬
- Fantasy ✨
- Science Fiction 🚀
- Biography 👤
- Self-Help 💪
- Nature 🌿

### Featured Books
1. **The Great Gatsby** - F. Scott Fitzgerald
2. **Murder on the Orient Express** - Agatha Christie
3. **Sapiens** - Yuval Noah Harari
4. **The Hobbit** - J.R.R. Tolkien
5. **Educated** - Tara Westover
... and 7 more!

## 🎨 UI/UX Highlights

### Color Scheme
- **Primary**: Gray (#1F2937) - For text and backgrounds
- **Secondary**: Green (#10B981) - For buttons and accents
- **Accent**: Amber (#F59E0B) - For special highlights

### Animations
- **Fade In**: Smooth fade-in effect on component load
- **Slide Up**: Elements slide up from bottom on page load
- **Hover Scale**: Book cards scale up on hover
- **Smooth Transitions**: All interactions have smooth transitions

### Responsive Design
- **Mobile First**: Designed for mobile devices first
- **Tablet Optimized**: Enhanced layout for tablets
- **Desktop Enhanced**: Full-featured experience on desktop
- **Touch Friendly**: Large buttons and inputs for easy interaction

## 🔧 Key Components Breakdown

### AppContext
Manages global state including:
- Shopping cart items
- Search query
- Selected category filter
- Current page number
- Cart operations (add, remove, update quantity)

### BookCard
Reusable component displaying:
- Book cover image
- Category badge
- Title and author
- Star ratings
- Price
- Add to cart button

### Header
Navigation with:
- Logo and branding
- Navigation links (Home, Catalog, Cart)
- Mobile hamburger menu
- Cart button with item count badge

### HomePage
Landing page featuring:
- Hero section with CTA button
- Category grid
- Featured books section
- New arrivals showcase

### CatalogPage
Product listing with:
- Search bar with real-time filtering
- Category filter dropdown
- Book grid with pagination
- Clear filters button
- No results message

### BookDetailsPage
Product page with:
- Book cover image
- Full product information
- Rating display
- Description with read more toggle
- Quantity selector
- Add to cart button
- Related books carousel
- Wishlist button

### CartPage
Shopping cart with:
- Item list with thumbnails
- Quantity controls
- Remove buttons with confirmation
- Price calculation
- Order summary sidebar
- Checkout button
- Empty cart state

## 💾 Data Structure

### Book Object
```javascript
{
  id: 1,
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  price: 12.99,
  category: 'Fiction',
  rating: 4.5,
  cover: 'https://...', // Image URL
  description: 'A classic American novel...',
  stock: 15
}
```

### Category Object
```javascript
{
  id: 1,
  name: 'Fiction',
  icon: '📖'
}
```

## 🎯 Usage Guide

### Adding a New Book
1. Open `src/data.js`
2. Add a new book object to the `books` array
3. Include all required fields (id, title, author, price, category, rating, cover, description, stock)

### Adding a New Category
1. Open `src/data.js`
2. Add a new category object to the `categories` array
3. Use an emoji icon for visual representation

### Customizing Colors
1. Open `tailwind.config.js`
2. Modify the `colors` section in the `extend` object
3. Update component styles using Tailwind classes

### Modifying Animations
1. Open `tailwind.config.js`
2. Edit the `animation` and `keyframes` sections
3. Apply to components using `className="animate-fadeIn"`

## 📱 Responsive Breakpoints

- **Mobile**: Up to 640px
- **Tablet**: 641px to 1024px
- **Desktop**: 1025px and above

## 🔐 Security Notes

- No real payment processing (e.g., Stripe integration would be needed for production)
- Checkout shows a mock confirmation alert
- All data is stored client-side (use a database for production)

## 🚀 Performance Optimizations

- Lazy loading of images
- Optimized CSS with Tailwind's purging
- Fast build times with Vite
- Smooth animations using CSS transforms
- Efficient state management with Context API

## 🐛 Known Limitations

- No backend/database integration (mock data only)
- No user authentication
- No payment processing system
- No order history or user accounts
- Images load from external URLs (Unsplash)

## 🔄 Future Enhancements

- [ ] User authentication (login/signup)
- [ ] Backend API integration
- [ ] Real payment processing (Stripe/PayPal)
- [ ] Order history and tracking
- [ ] User reviews and ratings
- [ ] Book recommendations based on history
- [ ] Wishlist persistence
- [ ] Dark mode theme
- [ ] Multi-language support
- [ ] Advanced search filters

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created with ❤️ using React & Tailwind CSS

## 💬 Support

For issues, questions, or suggestions, feel free to reach out!

---

**Happy Reading! 📖✨**
