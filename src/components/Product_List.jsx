import ProductItem from "./Product_Item"
import Loader from "./Loader"
import { useFetch } from "../util/Thefetch"
import { useState } from "react";


export default function ProductList() {
   

    const url="https://dummyjson.com/products";
    // Fetch products from the API when the component mounts

    const { products, loading, error } = useFetch(url);
     // Initialize searchedProducts with the fetched products
    const [searchedProducts, setSearchedProducts] = useState([]);
   if (error) {
    return <div className="text-red-500">Error fetching product: {error.message} 
    <h1 className="text-xl font-bold">Check Internet Connection.</h1>
    <Link to="/" className="text-blue-500 underline">Go back to home</Link>
    </div>;
  }

    if (loading) {
        return <><Loader /></>
    }

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredProducts=products.filter(products=>products.title.toLowerCase().includes(searchTerm));
        setSearchedProducts(filteredProducts);
    }
    
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-8 px-2">
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg animate-fade-in-up">
            Welcome to <span className="underline decoration-wavy decoration-pink-400">Our Store</span>
          </h1>
          <p className="mt-2 text-lg text-gray-600 animate-fade-in">Find your favorite products below!</p>
          <div className="mt-6 w-full max-w-md flex items-center bg-white rounded-full shadow-lg px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-pink-400">
            <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search products..."
              className="flex-1 bg-transparent outline-none text-lg text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {(searchedProducts && searchedProducts.length > 0) ? (
             searchedProducts.map((product) => (
                 <ProductItem key={product.id} products={product} />
             ))
         ) : (
             products.map((product) => (
                 <ProductItem key={product.id} products={product} />
             )))}
        </div>
      </div>
      <style>{`
          @keyframes fade-in-up {
              0% { opacity: 0; transform: translateY(30px); }
              100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
              animation: fade-in-up 1s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes fade-in {
              0% { opacity: 0; }
              100% { opacity: 1; }
          }
          .animate-fade-in {
              animation: fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
          }
      `}</style>
    </>
  )
}
