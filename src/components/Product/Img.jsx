import React from "react";

const Img = ({producto}) => {
  return (
    <div>
      <img src={producto.imageSrc} alt={producto.name} className="w-full" />
      <div className="grid grid-cols-5 gap-4 mt-4">
        <img
          src={producto.imageSrc}
          alt={producto.name}
          className="w-full cursor-pointer border border-primary"
        />
        <img
          src={producto.imageSrc}
          alt={producto.name}
          className="w-full cursor-pointer border"
        />
        <img
          src={producto.imageSrc}
          alt={producto.name}
          className="w-full cursor-pointer border"
        />
        <img
          src={producto.imageSrc}
          alt={producto.name}
          className="w-full cursor-pointer border"
        />
        <img
          src={producto.imageSrc}
          alt={producto.name}
          className="w-full cursor-pointer border"
        />
      </div>
    </div>
  );
};

export default Img;
