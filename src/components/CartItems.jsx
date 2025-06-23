import { useDispatch } from "react-redux";



import PropTypes from "prop-types";

CartItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

// CartItems componentb
// This component displays a single item in the cart with its details, quantity input, and remove
export default function CartItems({ item }) {
   
    const dispatch = useDispatch();
    function handleChange(value) {
        const newQuantity = parseInt(value, 10);
        if (!isNaN(newQuantity)) {
            dispatch({ type: "cart/updateQuantity", payload: { id: item.id, quantity: newQuantity } });
        }
    }
    function handleRemove() {
         const confirmed = window.confirm("Are you sure you want to remove this item from the cart?");
  if (confirmed) {
        dispatch({ type: "cart/removeItem", payload: { id: item.id } });
  }
       
    }
   
    return (
        <>
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img
                  src={item.image}
                  alt={item.title}
                className="w-16 h-16 object-cover rounded-lg mr-4 border border-gray-200"
            />
            <h3 className="flex-1 text-lg font-semibold text-gray-800">{item.title}</h3>
            <input
                onChange={(e) => handleChange(e.target.value)}
                type="number"
                value={item.quantity}
                min={1}
                className="w-16 text-center border border-gray-300 rounded-md px-2 py-1 mx-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <p className="text-green-600 font-bold mx-2">${item.price} <span className="text-gray-500 font-normal">x {item.quantity}</span></p>
            <button
                onClick={handleRemove}
                className="ml-4 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow hover:from-red-600 hover:to-pink-600 transition-all duration-300 font-semibold hover:scale-110"
            >
                Remove
            </button>
        </div>
        </>

    );
}
