import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const BreadCrumb = ({ children, ruta }) => {
  return (
    <Link to={`/${ruta}`} className="container py-4 flex items-center gap-3">
      <span className="text-2xl text-gray-400">
        <IoIosArrowRoundBack />
      </span>
      <p className="text-black font-medium">{children}</p>
    </Link>
  );
};

export default BreadCrumb;
