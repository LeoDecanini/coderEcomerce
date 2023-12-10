import React from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "../Context/CarritoContext";
import productos from "../data/productos.json";

const Cart = ({ isOpen, closeCart }) => {
  const { cartItems, addToCart, removeFromCart } = useCarrito();

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="relative font-poppins">
        <div className="fixed inset-0 bg-gray-700 opacity-25"></div>
        <div className="fixed top-0 bottom-0 right-0 z-10 w-full max-w-xl bg-white">
          <div className="p-6 bg-white md:pt-12 md:pb-6 md:px-12">
            <div className="text-right">
              <button className="text-gray-700 " onClick={closeCart}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center mb-10">
              <h2 className="text-3xl font-bold">Shopping Cart</h2>
            </div>
            {cartItems.map((item) => {
              const product = productos.find((p) => p.id === item.id);

              return (
                <div
                  key={item.id}
                  className="block pb-6 mb-6 -mx-4 border-b border-gray-200 md:flex"
                >
                  <div className="w-full px-4 mb-6 md:w-1/3 md:mb-0">
                    <div className="flex w-full h-96 md:h-32 md:w-32">
                      <img
                        src={product.imageSrc}
                        alt={product.name}
                        className="object-cover w-full h-full rounded-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:2/3">
                    <div className="flex justify-between">
                      <div className="">
                        <h2 className="mb-2 text-xl font-bold">
                          {product.name}
                        </h2>
                        <p className="mb-4 text-sm font-medium text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                        <div>
                          <button className="px-4 py-2 mb-4 mr-4 font-medium text-center text-primary border border-primary rounded-md md:mb-0 hover:bg-primary hover:text-gray-100">
                            Edit
                          </button>
                          <button
                            className="px-4 py-2 font-medium text-center text-primary border border-primary rounded-md hover:bg-primary hover:text-gray-100"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-primary">{`$${product.price}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-between text-base">
              <p>Subtotal</p>
              <p>{`$${cartItems.reduce(
                (total, item) => total + item.price,
                0
              )}`}</p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Shipping calculated at checkout period.
            </p>
            <div className="flex items-center justify-center mt-6">
              <Link
                to={"/checkout"}
                className="w-full text-center py-3 text-lg font-medium bg-primary rounded-md text-gray-50 hover:bg-primary/70"
              >
                Checkout
              </Link>
            </div>
            <div className="flex items-center justify-center mt-6">
              <p>
                <span className="">or,</span>
                <Link
                  to={"/shop"}
                  onClick={closeCart}
                  className="pl-1 text-primary hover:underline"
                >
                  Continue Shopping
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
