import React from "react";
import ProductoCard from "./components/ProductoCard";

const Product = () => {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        recomended for you
      </h2>

      <ProductoCard />
    </div>
  );
};

export default Product;
