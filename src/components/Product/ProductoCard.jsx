import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productos from "../../data/productos.json";
import { Link } from "react-router-dom";

import { useCarrito } from "../../Context/CarritoContext";
import { useParams } from "react-router-dom";

const ProductoCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { id } = useParams();
  const { addToCart } = useCarrito();

  const producto = {
    id: parseInt(id),
  };

  const handleAddToCart = () => {
    addToCart(producto);
  };

  return (
    <div className="container pb-16">
      <Slider {...settings}>
        {productos.map((producto) => (
          <Link
            to={`/producto/${producto.id}`}
            key={producto.id}
            className="p-4"
          >
            <div className="bg-white shadow rounded overflow-hidden group">
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

              <button
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                onClick={() => {
                  console.log("Botón 'Add to Cart' clickeado");
                  handleAddToCart();
                }}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ProductoCard;
