import React from "react";

import Banner from "../components/Home/Banner";
import Features from "../components/Home/Features";
import Categories from "../components/Home/Categories";
import Ads from "../components/Home/Ads";
import ProductoCard from "../components/Home/components/ProductoCard";

const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <Ads />
      <ProductoCard />
    </>
  );
};

export default Home;
