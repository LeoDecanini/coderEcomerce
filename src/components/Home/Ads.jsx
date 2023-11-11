import React from "react";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <div className="container pb-16">
      <Link to="#">
        <img src="images/offer.jpg" alt="ads" className="w-full" />
      </Link>
    </div>
  );
};

export default Ads;
