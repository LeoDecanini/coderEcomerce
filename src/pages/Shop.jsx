import React, { useState } from "react";
import BreadCrumb from "../components/Shop/BreadCrumb";
import DrawerInitAndToggle from "../components/shop/DrawerInitAndToggle";
import Drawer from "../components/Shop/Drawer";
import SlideBar from "../components/Shop/SlideBar";
import Select from "../components/Shop/Select";
import ProductoCard from "../components/Shop/ProductoCard";

const Shop = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      <BreadCrumb />
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <DrawerInitAndToggle />
        <Drawer />
        <SlideBar onSizeChange={handleSizeChange} />
        <div className="col-span-3">
          <Select />
          <ProductoCard selectedSize={selectedSize} />
        </div>
      </div>
    </>
  );
};

export default Shop;
