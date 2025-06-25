import { createSlice } from "@reduxjs/toolkit";


const localitem = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const cart = createSlice({
    name: "cart",
    initialState: {
        cartItems: localitem,
       
    },
    reducers: {// Reducers for managing cart items
        addItems: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.cartItems.push(newItem);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeItem: (state, action) => {
            const removeItem = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== removeItem.id);
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          
        },
        updateQuantity: (state, action) => {
            const getItem = action.payload;
            const index = state.cartItems.findIndex(item => item.id === getItem.id);
            if (index !== -1) {
                state.cartItems[index].quantity = getItem.quantity;
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
    }
}
)

export const { addItems, removeItem, updateQuantity,clearCart } = cart.actions;
export default cart.reducer;