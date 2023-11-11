import React from "react";
import productos from "../../../data/productos.json";
import { Link } from "react-router-dom";

const ProductoCard = () => {
  const primerosOchoProductos = productos.slice(0, 8);

  return (
    <div className="container pb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {primerosOchoProductos.map((producto) => (
          <Link
            to={`/producto/${producto.id}`}
            key={producto.id}
            className="bg-white shadow rounded overflow-hidden group"
          >
            <div className="relative">
              <img
                src={producto.imageSrc}
                alt={producto.name}
                className="w-full"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist"
                >
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  {producto.name}
                </h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">
                  ${producto.price}
                </p>
                <p className="text-sm text-gray-400 line-through">
                  ${producto.discountPrice}
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  {Array.from({ length: producto.rating }, (_, index) => (
                    <span key={index}>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-500 ml-3">
                  ({producto.reviews})
                </div>
              </div>
            </div>
            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to cart
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductoCard;
