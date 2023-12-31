import React, { useState } from "react";
import { Link } from "react-router-dom";

import Cart from "./Cart";
import { useCarrito } from "../Context/CarritoContext";

const Nav = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCarrito();

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <>
      <div className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <Link to="/">
            <img src="/images/logo.png" alt="Logo" className="w-32" />
          </Link>

          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              name="search"
              id="search"
              className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
              placeholder="Search"
            />
            <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex items-center">
              Search
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={openCart}
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <div className="text-xs font-bold leading-3">Cart</div>
            </button>
            <Link
              to="/profile"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text-xs font-bold leading-3">Account</div>
            </Link>
          </div>
        </div>
      </div>

      <nav className="bg-secondary">
        <div className="container flex">
          <div className="px-20 py-4 bg-primary flex items-center cursor-pointer relative group">
            <span className="text-white">
              <i className="fa-solid fa-bars"></i>
            </span>
            <span className="capitalize ml-2 text-black">All Categories</span>

            <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              <Link
                to="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="/images/icons/icono1.png"
                  alt="sofa"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Trajes para Hombres</span>
              </Link>
              <Link
                to="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="/images/icons/icono2.png"
                  alt="terrace"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Vestidos Formales para Mujeres</span>
              </Link>
              <Link
                to="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="/images/icons/icono3.png"
                  alt="bed"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Accesorios para Trajess</span>
              </Link>
              <Link
                to="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="/images/icons/icono4.png"
                  alt="office"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Ropa Formal para Mujeres</span>
              </Link>
              <Link
                to="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="/images/icons/icono5.png"
                  alt="outdoor"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Ropa de Ceremonia</span>
              </Link>
              <Link
                to="#"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <img
                  src="/images/icons/icono6.png"
                  alt="Mattress"
                  className="w-5 h-5 object-contain"
                />
                <span className="ml-6 text-gray-600 text-sm">Ropa Formal para Niños</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
            <div className="flex items-center space-x-6 capitalize">
              <Link
                to="/"
                className="text-gray-200 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-gray-200 hover:text-white transition"
              >
                Shop
              </Link>
              <Link
                to="/contact"
                className="text-gray-200 hover:text-white transition"
              >
                Contact us
              </Link>
            </div>
            <Link
              to="/login"
              className="text-gray-200 hover:text-white transition"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      <Cart isOpen={isCartOpen} closeCart={closeCart} />
    </>
  );
};

export default Nav;
