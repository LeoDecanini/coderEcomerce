import React from "react";

const Sidebar = () => {
  return (
    <div className="col-span-3">
      <div className="px-4 py-3 shadow flex items-center gap-4">
        <div className="flex-shrink-0">
          <img
            src="images/avatar.png"
            alt="profile"
            className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
          />
        </div>
        <div className="flex-grow">
          <p className="text-gray-600">Hello,</p>
          <h4 className="text-gray-800 font-medium">John Doe</h4>
        </div>
      </div>

      <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
        <div className="space-y-1 pl-8">
          <a
            href="#"
            className=" text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="fa-regular fa-address-card"></i>
            </span>
            Profile information
          </a>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <a
            href="#"
            className=" hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="fa-solid fa-box-archive"></i>
            </span>
            My order history
          </a>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <a
            href="#"
            className=" hover:text-red-600 block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="fa-solid fa-right-from-bracket"></i>
            </span>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
