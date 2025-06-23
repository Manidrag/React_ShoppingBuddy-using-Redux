
import { useSelector,useDispatch} from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// PropTypes is used to validate the props passed to the component
ProductItem.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    // add other fields as needed
  }).isRequired,
};
export default function ProductItem({ products}) {
  const [notification, setNotification] = useState(false);
  const dispatch=useDispatch();
 const items= useSelector((state) => state.cart.cartItems);
   function handleClick() {
    
        const item={
            id:products.id,
            title: products.title,
            price: products.price,
            quantity: 1,
            image: products.images[0],

        }
    dispatch({type: "cart/addItems", payload: item }  );
     setNotification(true);
    setTimeout(() => {
        setNotification(false)
    }, 4000)
    console.log(items);
    }

    return (
        <>
        {/* Notification for adding item to cart */}
            {notification && (
        <div className="fixed top-8 left-1/2 z-50 flex items-center justify-center px-8 py-4 rounded-2xl shadow-2xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold text-lg animate-bounce transform -translate-x-1/2 transition-all duration-500">
          <svg className="w-7 h-7 mr-3 text-white animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Item added to cart!
        </div>
      )}
        {/* // Product Item Component
        // This component displays a single product with its details and an "Add to Cart" button*/}
        <div className="bg-white rounded-xl shadow-lg p-6 m-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center"> 
  <img src={products.images[0]} alt={products.title} className="w-32 h-32 object-cover rounded-lg mb-4" />
  <h2 className="text-lg font-bold text-gray-800 mb-2">{products.title}</h2>
  <span className="text-yellow-500">{products.rating}★</span>
  <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-400 line-through text-lg">
            ${(products.price * 100/(100-products.discountPercentage)).toFixed(2)}
          </span>
          <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
            {products.discountPercentage + "% OFF"}
          </span>
        </div>
        <span className="text-2xl font-bold text-green-600 mb-4">
          ${products.price}
        </span>  <button onClick={handleClick} className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-6 py-2 rounded-full shadow cursor-pointer hover:from-blue-600 hover:to-green-500 transition-colors duration-300">
    Add to Cart
  </button>
  <Link to={`/product/${products.id}`} className="bg-gray-200 mt-5 text-gray-800 px-4 py-2 rounded-full shadow cursor-pointer hover:bg-gray-300 transition-colors duration-300"> Details </Link>
</div>
        </>
    )
}
