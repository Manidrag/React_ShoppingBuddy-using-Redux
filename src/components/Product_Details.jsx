import {useState} from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";


import { useFetch } from "../util/Thefetch";

export default function ProductDetails() {
  const dispatch=useDispatch();
  const [notification, setNotification] = useState(false);
   const { id } = useParams();
    const items= useSelector((state) => state.cart.cartItems);
  const url = `https://dummyjson.com/products/${id}`;
  
  
  const { products, loading, error } = useFetch(url);
 if (error) {
    return <div className="text-red-500">Error fetching product: {error.message} 
    <h1 className="text-xl font-bold">Check Internet Connection also.</h1>
    <Link to="/" className="text-blue-500 underline">Go back to home</Link>
    </div>;
  }
  if (loading) {
    return <Loader />;
  }

   function handleClick() {
        const item={
            id:products.id,
            title: products.title,
            price: products.price,
            quantity: 1,
            image:products.images[0],
        
        }

    dispatch({ type: "cart/addItems", payload: item });
      setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 4000);
    console.log(items);
    }
    
  

  return (
    <>
      {/* Notification */}
      {notification && (
        <div className="fixed top-8 left-1/2 z-50 flex items-center justify-center px-8 py-4 rounded-2xl shadow-2xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold text-lg animate-bounce transform -translate-x-1/2 transition-all duration-500">
          <svg className="w-7 h-7 mr-3 text-white animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Item added to cart!
        </div>
      )}

      <div className="container mx-auto p-6 flex justify-center items-center min-h-[80vh]">
        {products ? (
          <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-12 w-full max-w-4xl border border-blue-200 hover:shadow-blue-300 transition-shadow duration-300">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-xl group relative">
              <img
                src={products.images[0]}
                alt={products.title}
                className="w-80 h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-4 py-1 rounded-full shadow-lg animate-pulse font-bold tracking-wide">
                New
              </span>
            </div>
            {/* Details */}
            <div className="flex-1 flex flex-col gap-5">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-1 drop-shadow-lg">{products.title}</h2>
              <div className="flex items-center gap-4 mb-1">
                <span className="text-gray-400 line-through text-xl">
                  ${(products.price * 100/(100-products.discountPercentage)).toFixed(2)}
                </span>
                <span className="text-sm bg-green-200 text-green-800 px-4 py-1 rounded-full font-bold tracking-wide shadow">
                  {products.discountPercentage + "% OFF"}
                </span>
              </div>
              <span className="text-3xl font-bold text-green-600 mb-2 drop-shadow">
                ${products.price}
              </span>
              <p className="text-gray-700 mb-2 text-lg">{products.description}</p>
              <div className="flex flex-wrap gap-4 mb-2">
                <span className="text-gray-700 bg-gray-100 px-5 py-1 rounded-full font-medium shadow">Brand: {products.brand}</span>
                <span className="text-gray-700 bg-gray-100 px-5 py-1 rounded-full font-medium shadow">Category: {products.category}</span>
                <span className="text-gray-700 bg-yellow-100 px-5 py-1 rounded-full flex items-center gap-2 font-medium shadow">
                  Rating: {products.rating}
                  <img src="/download.png" alt="Star Icon" className="inline-block w-5 h-5" />
                </span>
              </div>
              <button
                onClick={handleClick}
                className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-green-400 text-white px-12 py-4 rounded-full shadow-2xl cursor-pointer font-bold text-lg mt-4 transition-all duration-300 hover:from-blue-700 hover:to-green-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m1-13h2a2 2 0 012 2v2a2 2 0 01-2 2h-2.5" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}