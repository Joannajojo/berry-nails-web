import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import "./index.css";
import ProductCatalog from "./pages/ProductCatalog";
import ProductDetail from "./pages/ProductDetail";
import { useCartStore } from "./store/cart";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import OrderFail from "./pages/OrderFail";
import "@fontsource/poppins"; // Import the Poppins font
import ProductCatalogGeneral from "./pages/ProductCatalogGeneral";
function App() {
  //const { fetchCartItems, cart } = useCartStore();
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);

  //retrieve current cart number
  // const [cartQuantity, setCartQuantity] = useState(0);
  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        {/* Wrap Routes with BrowserRouter */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/fail" element={<OrderFail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/:_id" element={<ProductDetail />} />
          <Route path="/prod/:category" element={<ProductCatalog />} />
          <Route path="/prod/topselling" element={<ProductCatalogGeneral />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
