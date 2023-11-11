import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-secondary pt-16 pb-16 border-t border-gray-100">
        <div className="container grid grid-cols-1 ">
          <div className="col-span-1 space-y-4">
            <img src="/images/logo.png" alt="logo" className="w-30" />
            <div className="mr-2">
              <p className="text-gray-500">
                Gracias por visitarnos. Esperamos que vuelvas.
              </p>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div>
                <div className="mt-4 space-y-4">
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-primary block"
                  >
                    Home
                  </Link>
                </div>
              </div>

              <div>
                <div className="mt-4 space-y-4">
                  <Link
                    to={"/shop"}
                    className="text-base text-gray-500 hover:text-primary block"
                  >
                    Shop
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="mt-4 space-y-4">
                  <Link
                    to={"/contact"}
                    className="text-base text-gray-500 hover:text-primary block"
                  >
                    Contact us
                  </Link>
                </div>
              </div>

              <div>
                <div className="mt-4 space-y-4">
                  <Link
                    to={"/profile"}
                    className="text-base text-gray-500 hover:text-primary block"
                  >
                    Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
