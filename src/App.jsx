import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="bg-stone-50 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Products />
      </main>
      <Footer />
    </div>
  );
}



const products = [
  {
    id: 1,
    name: 'Artisanal Clay Vase',
    price: '$48.00',
    imageUrl: 'https://placehold.co/500x500/F5F5F4/333333?text=Fayloft+Vase',
    category: 'Pottery',
  },
  {
    id: 2,
    name: 'Handwoven Macrame Hanger',
    price: '$35.00',
    imageUrl: 'https://placehold.co/500x500/E9E4DE/333333?text=Fayloft+Hanger',
    category: 'Textiles',
  },
  {
    id: 3,
    name: 'Natural Dye Starter Kit',
    price: '$62.00',
    imageUrl: 'https://placehold.co/500x500/D8CDBF/333333?text=Fayloft+Kit',
    category: 'Kits',
  },
  {
    id: 4,
    name: 'Minimalist Wooden Coasters (Set of 4)',
    price: '$25.00',
    imageUrl: 'https://placehold.co/500x500/C1B4A5/333333?text=Fayloft+Coasters',
    category: 'Woodwork',
  },
    {
    id: 5,
    name: 'Organic Beeswax Candles',
    price: '$28.00',
    imageUrl: 'https://placehold.co/500x500/F5F5F4/333333?text=Fayloft+Candles',
    category: 'Home Goods',
  },
  {
    id: 6,
    name: 'Leather Craft Journal',
    price: '$55.00',
    imageUrl: 'https://placehold.co/500x500/E9E4DE/333333?text=Fayloft+Journal',
    category: 'Accessories',
  },
  {
    id: 7,
    name: 'Ceramic Pour-Over Coffee Set',
    price: '$75.00',
    imageUrl: 'https://placehold.co/500x500/D8CDBF/333333?text=Fayloft+Coffee+Set',
    category: 'Pottery',
  },
  {
    id: 8,
    name: 'DIY Embroidery Hoop Art',
    price: '$42.00',
    imageUrl: 'https://placehold.co/500x500/C1B4A5/333333?text=Fayloft+Embroidery',
    category: 'Kits',
  },
];

// --- SVG Icons (No external libraries needed) ---
const ShoppingCartIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const MenuIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const XIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);


// --- Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#products', label: 'Products' },
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Contact' },
  ];

  return (
    <header className="bg-stone-50/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-stone-800 tracking-wider">
          Fayloft
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
             <a key={link.label} href={link.href} className="text-stone-600 hover:text-stone-900 transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
            <button className="relative text-stone-600 hover:text-stone-900 transition-colors duration-300">
                <ShoppingCartIcon className="w-6 h-6"/>
                <span className="absolute -top-2 -right-2 bg-stone-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
            </button>
            <button className="md:hidden text-stone-600 hover:text-stone-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <XIcon className="w-6 h-6"/> : <MenuIcon className="w-6 h-6"/>}
            </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
         <div className="md:hidden bg-stone-50">
            <nav className="flex flex-col items-center space-y-4 py-4">
                 {navLinks.map(link => (
                    <a key={link.label} href={link.href} className="text-stone-600 hover:text-stone-900 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                        {link.label}
                    </a>
                ))}
            </nav>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="bg-stone-100">
      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-stone-800 leading-tight mb-4">
          Handcrafted with Heart.
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-8">
          Discover unique creations and artisanal accessories for your home and soul. Each piece tells a story.
        </p>
        <a href="#products" className="bg-stone-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-stone-700 transition-all duration-300 transform hover:scale-105">
          Explore Our Collection
        </a>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  return (
      <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1 sm:hover:-translate-y-2 w-full max-w-sm mx-auto">
          {/* Image Container with Gradient Overlay */}
          <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
              <img 
                  src={product.imageUrl} 
                  alt={`Image of ${product.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x500/F5F5F4/333333?text=Image+Not+Found'; }}
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Price badge - responsive positioning */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                  {product.price}
              </div>
          </div>

          {/* Product Details - responsive padding and text sizes */}
          <div className="p-4 sm:p-6 text-left relative z-10 bg-white">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                  {product.name}
              </h3>
              <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">Premium Quality</p>
                  <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                      ))}
                  </div>
              </div>
          </div>

          {/* Enhanced Hover Overlay - responsive button sizes */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-700/40 to-transparent flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              {/* Main CTA Button - responsive sizing */}
              <button className="bg-white text-purple-700 font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:bg-purple-50 hover:scale-105 shadow-xl border border-purple-200 mb-2 sm:mb-3 text-sm sm:text-base">
                  <span className="flex items-center space-x-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l2.5-5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"></path>
                      </svg>
                      <span className="hidden sm:inline">Add to Cart</span>
                      <span className="sm:hidden">Add</span>
                  </span>
              </button>
              
              {/* Secondary Actions - responsive sizing */}
              <div className="flex space-x-2 sm:space-x-3 transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full hover:bg-white/30 transition-colors duration-300" aria-label="Add to wishlist">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full hover:bg-white/30 transition-colors duration-300" aria-label="Quick view">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                  </button>
              </div>
          </div>

          {/* Decorative corner accent */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full -translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
      </div>
  );
};
const Products = () => {
  return (
    <section id="products" className="bg-stone-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800">Featured Products</h2>
            <p className="text-lg text-stone-500 mt-2">Curated just for you.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
         <div className="text-center mt-16">
            <a href="#" className="border border-stone-800 text-stone-800 font-bold py-3 px-8 rounded-lg hover:bg-stone-800 hover:text-white transition-all duration-300">
                View All Products
            </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
    return (
        <footer className="bg-stone-800 text-stone-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Fayloft</h3>
                        <p className="text-stone-400">Handcrafted goods for a mindful life.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Shop</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="text-lg font-semibold text-white mb-4">About</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Craftsmanship</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                        <p className="text-stone-400 mb-4">Join our community on social media.</p>
                        {/* In a real app, these would be links to your social profiles */}
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                                {/* SVG for Instagram */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.141 0-3.499.012-4.71.069-2.734.124-3.951 1.343-4.075 4.075-.057 1.211-.069 1.569-.069 4.71s.012 3.499.069 4.71c.124 2.733 1.343 3.951 4.075 4.075 1.211.057 1.569.069 4.71.069s3.499-.012 4.71-.069c2.733-.124 3.951-1.343 4.075-4.075.057-1.211.069-1.569.069-4.71s-.012-3.499-.069-4.71c-.124-2.733-1.343-3.951-4.075-4.075-1.211-.057-1.569-.069-4.71-.069zm0 2.88c-1.801 0-3.271 1.47-3.271 3.271s1.47 3.271 3.271 3.271 3.271-1.47 3.271-3.271-1.47-3.271-3.271-3.271zm0 5.234c-1.079 0-1.963-.884-1.963-1.963s.884-1.963 1.963-1.963 1.963.884 1.963 1.963-.884 1.963-1.963 1.963zm4.597-5.32c-.529 0-.958.43-.958.958s.43.958.958.958.958-.43.958-.958-.429-.958-.958-.958z"></path></svg>
                            </a>
                            <a href="#" aria-label="Pinterest" className="hover:text-white transition-colors">
                                {/* SVG for Pinterest */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.633 7.844 6.271 9.395-.073-.348-.126-.92-.152-1.294-.06-.29.006-.525.188-.737.16-.188.423-.55.632-.825.22-.287.35-.494.524-.858.21-.444.105-.812-.224-1.22-.33-.408-.802-1.268-.802-2.399 0-2.022 1.48-3.55 3.33-3.55 1.583 0 2.56.918 2.56 2.193 0 1.483-.872 3.226-1.373 4.965-.418 1.444.73 2.613 2.19 2.613 2.62 0 4.398-3.13 4.398-6.195C20.406 7.103 16.89 4.2 12.83 4.2c-4.48 0-6.855 3.123-6.855 6.325 0 .97.317 1.638.742 2.052.17.167.195.23.14.43-.053.2-.18.72-.22.885-.05.18-.11.23-.268.14-.99-.58-1.6-2.4-1.6-3.79 0-3.084 2.227-6.07 7.02-6.07 3.824 0 6.64 2.647 6.64 5.92 0 3.51-2.03 6.22-5.11 6.22-1.01 0-1.956-.525-2.288-1.123l-.68 2.57c-.24.91-.87 1.99-1.33 2.613C9.366 21.6 10.63 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-stone-700 pt-8 text-center text-stone-400">
                    <p>&copy; {new Date().getFullYear()} Fayloft. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
