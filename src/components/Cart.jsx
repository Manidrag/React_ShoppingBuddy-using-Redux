import { useSelector } from "react-redux"
import CartItems from "./CartItems";


export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity,0);
  return (
 
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id}>
              <CartItems item={item} />
            </li>
          ))}
        </ul>
      )}
    {/* Display total amount and quantity */}
      <div className="mt-6 border-t pt-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Amount</h3>
        <p className="text-2xl font-bold text-green-600">
          ${totalAmount.toFixed(2)}
        </p>
        <p className="text-gray-600 mt-2">Total Items: {totalQuantity}</p>
      </div>
      {cartItems.length > 0 && (
        <div className="mt-6 text-center">
          <button className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-6 py-3 rounded-full shadow hover:from-blue-600 hover:to-green-500 transition-all duration-300 font-semibold">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  )
}
