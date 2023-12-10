import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import SlideBar from "../components/Shop/SlideBar";
import Select from "../components/Shop/Select";
import ProductoCard from "../components/Shop/ProductoCard";

const Shop = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategory.includes(category)
      ? selectedCategory.filter((cat) => cat !== category)
      : [...selectedCategory, category];
    setSelectedCategory(updatedCategories);
  };

  return (
    <>
      <BreadCrumb ruta="">Shop</BreadCrumb>
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <SlideBar
          onSizeChange={handleSizeChange}
          onCategoryChange={handleCategoryChange}
        />
        <div className="col-span-3">
          <Select />
          <ProductoCard
            selectedSize={selectedSize}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </>
  );
};

export default Shop;
