import React from "react";
import { Link } from "react-router-dom";
import productos from "../../data/productos.json";

const ProductoCard = ({ selectedSize }) => {
  const filteredProductos = selectedSize
    ? productos.filter((producto) => producto.sizes.includes(selectedSize))
    : productos;

  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
      {filteredProductos.map((producto) => (
        <Link
          to={`/producto/${producto.id}`}
          key={producto.id}
          className="bg-white shadow rounded overflow-hidden group hover:border-4 hover:border-subtle"
        >
          <div className="relative">
            <img
              src={producto.imageSrc}
              alt={producto.name}
              className="w-full"
            />
          </div>
          <div className="pt-4 pb-3 px-4">
            <div>
              <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                {producto.name}
              </h4>
            </div>
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
          <button className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
            Add to cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductoCard;
