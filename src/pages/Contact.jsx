import React from "react";

const Contact = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-center bg-cover bg-[url(/images/bannerVogue.jpg)]">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-75"></div>
      <form
        action=""
        className="z-10 p-6 mx-2 rounded-md lg:mx-0 bg-stone-100"
      >
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-subtle">
            Contact Us{" "}
          </h2>
        </div>
        <div className="flex flex-wrap mb-4 -mx-2">
          <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
            <input
              className="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50"
              type="text"
              placeholder="First Name.."
              required=""
            />
          </div>
          <div className="w-full px-2 lg:w-1/2">
            <input
              className="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50"
              type="text"
              placeholder="Last Name.."
              required=""
            />
          </div>
        </div>
        <input
          className="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-gray-50"
          type="email"
          placeholder="abc@gmail.com"
          required=""
        />
        <textarea
          rows="4"
          type="message"
          placeholder="Write a message..."
          required=""
          className="block w-full px-4 mb-4 leading-tight text-gray-700 border rounded bg-gray-50 py-7 "
        ></textarea>
        <button className="w-full py-4 text-sm font-bold leading-normal text-white transition-all duration-300 bg-primary rounded-md hover:bg-white hover:text-primary hover:border-primary hover:border">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
