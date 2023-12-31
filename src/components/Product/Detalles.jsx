import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useCarrito } from "../../Context/CarritoContext";
import { useParams } from "react-router-dom";

const Detalles = ({ producto }) => {
  const availabilityText = producto.availability ? "In Stock" : "Out of Stock";
  const availabilityClass = producto.availability
    ? "text-green-600"
    : "text-red-600";

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const { id } = useParams();
  const { addToCart } = useCarrito();

  const productoSelected = {
    id: parseInt(id),
  };

  const handleAddToCart = () => {
    addToCart(productoSelected);
  };

  return (
    <div>
      <h2 className="text-3xl font-medium uppercase mb-2">{producto.name}</h2>
      <div className="flex items-center mb-4">
        <div className="flex gap-1 text-sm text-yellow-400">
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
          <span>
            <AiFillStar />
          </span>
        </div>
        <div className="text-xs text-gray-500 ml-3">({producto.reviews})</div>
      </div>
      <div className="space-y-2">
        <p className="text-gray-800 font-semibold space-x-2">
          <span>Availability: </span>
          <span className={availabilityClass}>{availabilityText}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">Brand: </span>
          <span className="text-gray-600">{producto.brand}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">Category: </span>
          <span className="text-gray-600">{producto.category}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">SKU: </span>
          <span className="text-gray-600">{producto.sku}</span>
        </p>
      </div>
      <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
        <p className="text-xl text-primary font-semibold">${producto.price}</p>
        <p className="text-base text-gray-400 line-through">
          ${producto.discountPrice}
        </p>
      </div>

      <p className="mt-4 text-gray-600">{producto.description}</p>

      <div className="pt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
        <div className="flex items-center gap-2">
          {producto.sizes.map((size) => (
            <div
              key={size}
              className={`size-selector ${
                selectedSize === size ? "selected" : ""
              }`}
              onClick={() => handleSizeChange(size)}
            >
              <input
                type="radio"
                name="size"
                id={`size-${size}`}
                className="hidden"
              />
              <label
                htmlFor={`size-${size}`}
                className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm ${
                  selectedSize === size
                    ? "text-white bg-subtle font-bold"
                    : "text-gray-600"
                }`}
              >
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
          Color
        </h3>
        <div className="flex items-center gap-2">
          {producto.colors.map((color) => (
            <div
              key={color}
              className={`color-selector ${
                selectedColor === color ? "selected" : ""
              }`}
              onClick={() => handleColorChange(color)}
            >
              <input type="radio" name="color" id={color} className="hidden" />
              <label
                htmlFor={color}
                className={`border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block ${
                  selectedColor === color ? "border-subtle" : ""
                }`}
                style={{ backgroundColor: color }}
              ></label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <div
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            onClick={() => handleQuantityChange(quantity - 1)}
          >
            -
          </div>
          <input
            type="number"
            className="h-8 w-8 text-base text-center border-r border-l border-gray-300"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
          />
          <div
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            +
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3 pb-5 pt-5">
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
    </div>
  );
};

export default Detalles;
