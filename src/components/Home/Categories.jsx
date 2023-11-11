import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        Categorias para su busqueda
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="images/category/category-1.jpg"
            alt="category 1"
            className="w-full"
          />
          <Link
            to="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 hover:border-subtle hover:border-4 transition"
          >
            Trajes para Hombres
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="images/category/category-2.jpg"
            alt="category 1"
            className="w-full"
          />
          <Link
            to="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 hover:border-subtle hover:border-4 transition"
          >
            Vestidos Formales para Mujeres
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="images/category/category-3.jpg"
            alt="category 1"
            className="w-full"
          />
          <Link
            to="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 hover:border-subtle hover:border-4 transition"
          >
            Accesorios para Trajes
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="images/category/category-4.jpg"
            alt="category 1"
            className="w-full"
          />
          <Link
            to="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 hover:border-subtle hover:border-4 transition"
          >
            Ropa Formal para Mujeres
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="images/category/category-5.jpg"
            alt="category 1"
            className="w-full"
          />
          <Link
            to="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 hover:border-subtle hover:border-4 transition"
          >
            Ropa de Ceremonia
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="images/category/category-6.jpg"
            alt="category 1"
            className="w-full"
          />
          <Link
            to="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 hover:border-subtle hover:border-4 transition"
          >
            Ropa Formal para Niños
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
