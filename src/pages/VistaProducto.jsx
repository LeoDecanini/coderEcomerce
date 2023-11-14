import React from "react";
import { useParams } from "react-router-dom";

import productos from "../data/productos.json";

import BreadCrumb from "../components/BreadCrumb";
import Img from "../components/Product/Img";
import Detalles from "../components/Product/Detalles";
import Description from "../components/Product/Description";
import ProductoCard from "../components/Product/ProductoCard";

const VistaProducto = () => {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id === parseInt(id));

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <>
      <BreadCrumb ruta="shop">shop/<span className="text-gray-500">{producto.name}</span></BreadCrumb>

      <div className="container grid grid-cols-2 gap-6">
        <Img producto={producto} />
        <Detalles producto={producto} />
      </div>

      <Description producto={producto} />

      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          Related products
        </h2>
        <ProductoCard />
      </div>
    </>
  );
};

export default VistaProducto;
