import React from "react";

const Wrapper = () => {
  return (
    <>
      <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <div className="col-span-8 border border-gray-200 p-4 rounded">
          <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="first-name" className="text-gray-600">
                  First Name <span className="text-primary">*</span>
                </label>
                <input
                  className="p-2 bg-gray-50 border rounded-md hover:cursor-pointer hover:border-subtle"
                  type="text"
                  name="first-name"
                  id="first-name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="last-name" className="text-gray-600">
                  Last Name <span className="text-primary">*</span>
                </label>
                <input
                  className="p-2 bg-gray-50 border rounded-md hover:cursor-pointer hover:border-subtle"
                  type="text"
                  name="last-name"
                  id="last-name"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="company" className="text-gray-600">
                Company
              </label>
              <input className="p-2 bg-gray-50 border rounded-md hover:cursor-pointer hover:border-subtle" type="text" name="company" id="company" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="region" className="text-gray-600">
                Country/Region
              </label>
              <input className="p-2 bg-gray-50 border rounded-md hover:cursor-pointer hover:border-subtle" type="text" name="Country" id="Country" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address" className="text-gray-600">
                Street address
              </label>
              <input className="p-2 bg-gray-50 border rounded-md hover:cursor-pointer hover:border-subtle" type="text" name="address" id="address" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="text-gray-600">
                City
              </label>
              <input className="p-2 bg-gray-50 border rounded-md hover:cursor-pointer hover:border-subtle" type="text" name="City" id="City" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-600">
                Phone number
              </label>
              <input className="p-2 bg-gray-50 border rounded-md hover:cursor-pointer hover:border-subtle" type="number" name="Phone" id="Phone" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600">
                Email address
              </label>
              <input className="p-2 bg-gray-50 border rounded-md hover:cursor-pointer hover:border-subtle" type="email" name="Email" id="Email" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="company" className="text-gray-600">
                Company
              </label>
              <input className="p-2 bg-gray-50 border rounded-md hover:cursor-pointer hover:border-subtle" type="text" name="company" id="company" />
            </div>
          </div>
        </div>

        <div className="col-span-4 border border-gray-200 p-4 rounded">
          <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            order summary
          </h4>
          

          <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
            <p>subtotal</p>
            <p>$0</p>
          </div>

          <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
            <p>shipment</p>
            <p>Free</p>
          </div>

          <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
            <p className="font-semibold">Total</p>
            <p>$0</p>
          </div>

          <div className="flex items-center mb-4 mt-2">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
            />
            <label
              htmlFor="aggrement"
              className="text-gray-600 ml-3 cursor-pointer text-sm"
            >
              I agree to the{" "}
              <a href="#" className="text-primary">
                terms & conditions
              </a>
            </label>
          </div>

          <a
            href="#"
            className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
          >
            Place order
          </a>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
