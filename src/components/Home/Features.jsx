import React from "react";
import { FaTruck } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";

const Features = () => {
  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <FaTruck className="w-12 h-12 text-subtle" />
          <div>
            <h4 className="font-medium capitalize text-lg">Envio gratis</h4>
            <p className="text-gray-500 text-sm">
              Apartir de una compra de $100.000 ARS.
            </p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <GiReceiveMoney className="w-12 h-12 text-subtle" />
          <div>
            <h4 className="font-medium capitalize text-lg">Devoluciones</h4>
            <p className="text-gray-500 text-sm">
              La devolucion se hacer en 30 dias.
            </p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <BiSupport className="w-12 h-12 text-subtle" />
          <div>
            <h4 className="font-medium capitalize text-lg">Soporte 24/7</h4>
            <p className="text-gray-500 text-sm">
              Soporte especializado para cada cliente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
