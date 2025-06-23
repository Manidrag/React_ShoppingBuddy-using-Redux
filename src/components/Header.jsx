import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const totalItems=useSelector((state)=>state.cart.cartItems.length);
  return (

    // Header Component
    // This component renders the header with a logo, navigation links, and a cart icon
    <header className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-3xl font-extrabold tracking-tight drop-shadow-lg">🛒 ShoppingGlobe</Link>
      <nav>
        <ul className="flex space-x-6 bg-white/20 backdrop-blur-md p-2 rounded-full shadow-xl border border-white/30">
          <li>
            <a
              href="/"
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-blue-500/80 transition-colors duration-300 group"
              title="Home"
            >
              <img
                src="/Home.png"
                alt="Home"
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
              />
            </a>
          </li>
          <li>
            
            <a
              href="/cart"
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-green-500/80 transition-colors duration-300 group"
              title="Cart"
            >{totalItems > 0 ?
              <span className="absolute -top-2 -right-2 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg border-2 border-white animate-bounce z-10">
  {totalItems}
</span>
              : null}
              <img
                src="/cart.png"
                alt="Cart"
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
