import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import VistaProducto from "./pages/VistaProducto";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

import Navigation from "./components/Nav";
import Footer from "./components/Footer";

import Cart from "./components/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/producto/:id" element={<VistaProducto />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/profile" element={<Profile />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
