# ShoppyGlobe 🛒

ShoppyGlobe is a modern, responsive e-commerce web application built with React, Redux Toolkit, and Tailwind CSS. It allows users to browse products, view details, manage a shopping cart, and experience a seamless shopping interface.

---

## ✨ Features

- **Product Listing:** Browse a wide range of products fetched from [DummyJSON API](https://dummyjson.com/products).
- **Product Details:** View detailed information about each product, including images, price, discount, brand, category, and rating.
- **Search Functionality:** Instantly filter products by name using the search bar.
- **Shopping Cart:** Add, remove, and update quantities of products in your cart.
- **Redux State Management:** Cart state is managed globally using Redux Toolkit.
- **Responsive Design:** Fully responsive and mobile-friendly UI using Tailwind CSS.
- **Error Handling:** Graceful error messages for failed API requests.
- **Routing:** Navigate between Home, Product Details, Cart, and Checkout pages using React Router.
- **404 Page:** Custom NotFound page for unknown routes.
- **Performance:** Code splitting and lazy loading for faster load times.

---

##  Project Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── ProductList.jsx
│   ├── ProductItem.jsx
│   ├── Product_Details.jsx
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   └── NotFound.jsx
│
├── redux/
│   ├── Store.jsx
│   └── Slice.jsx
│
├── util/
│   └── Thefetch.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or above recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/manidrag/h
   cd shoppyglobe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

---

## 🛠️ Usage

- **Browse Products:** The home page displays all products.
- **Search:** Use the search bar to filter products by name.
- **View Product Details:** Click on a product to view its details.
- **Add to Cart:** Click "Add to Cart" to add a product to your cart.
- **View Cart:** Click the cart icon in the header to view your cart.
- **Update/Remove Items:** Change quantities or remove items directly from the cart.
- **Checkout:** Proceed to checkout from the cart page.
- **404 Page:** Try navigating to a non-existent route to see the custom 404 page.

---

## 🧩 Technologies Used

- **React** – Frontend library
- **Redux Toolkit** – State management
- **React Router DOM** – Routing
- **Tailwind CSS** – Styling and responsiveness
- **DummyJSON API** – Product data

---

## 📂 Folder Details

- **components/**: All UI components (Header, ProductList, ProductItem, etc.)
- **redux/**: Redux store and slice for cart management.
- **util/**: Custom hooks and utility functions (e.g., `useFetch`).
- **App.jsx**: Main app component, sets up routes.
- **main.jsx**: Entry point, renders the app.

---

## 🧪 Testing

> _You can add unit and integration tests using Jest and React Testing Library. (Not included by default in this template.)_

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📸 Screenshots

> _Add screenshots of your app here for better presentation!_

---

## 📄 License

This project is licensed under the MIT License.

---

**Happy Shopping with ShoppyGlobe!**