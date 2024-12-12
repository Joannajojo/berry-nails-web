import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage";
import "./index.css";
import ProductCatalog from "./pages/ProductCatalog";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        {/* Wrap Routes with BrowserRouter */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/prod/:category" element={<ProductCatalog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
