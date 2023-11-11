import React from "react";

const Banner = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-top py-20 bg-[url('images/bannerVogue.jpg');]">
      <div className="mx-14 flex">
        <div className="bg-[#202020] p-5 pb-10 rounded-md ">
          <h1 className="text-6xl text-white font-medium mb-4">
            Ropa Laboral: <br /> Elegancia en el Oficio
          </h1>
          <p className="max-w-[600px] text-white mb-12">
            Encuentra el equilibrio perfecto entre comodidad y estilo con
            nuestra exclusiva colección de ropa laboral. Viste con confianza,
            destaca en cada momento de tu jornada laboral.
          </p>

          <a
            href="#"
            className="bg-primary border border-primary text-secondary px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
