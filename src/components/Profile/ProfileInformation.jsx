import React from "react";

const ProfileInformation = () => {
  return (
    <>
      <div class="col-span-9 grid grid-cols-3 item gap-4 justify-end">
        <div class="shadow rounded bg-white px-4 pt-6 pb-8">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-medium text-gray-800 text-lg">Personal Profile</h3>
            <a href="#" class="text-primary">
              Edit
            </a>
          </div>
          <div class="space-y-1">
            <h4 class="text-gray-700 font-medium">John Doe</h4>
            <p class="text-gray-800">example@mail.com</p>
            <p class="text-gray-800">0811 8877 988</p>
          </div>
        </div>

        <div class="shadow rounded bg-white px-4 pt-6 pb-8">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-medium text-gray-800 text-lg">Shipping address</h3>
            <a href="#" class="text-primary">
              Edit
            </a>
          </div>
          <div class="space-y-1">
            <h4 class="text-gray-700 font-medium">John Doe</h4>
            <p class="text-gray-800">Medan, North Sumatera</p>
            <p class="text-gray-800">20371</p>
            <p class="text-gray-800">0811 8877 988</p>
          </div>
        </div>

        <div class="shadow rounded bg-white px-4 pt-6 pb-8">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-medium text-gray-800 text-lg">Billing address</h3>
            <a href="#" class="text-primary">
              Edit
            </a>
          </div>
          <div class="space-y-1">
            <h4 class="text-gray-700 font-medium">John Doe</h4>
            <p class="text-gray-800">Medan, North Sumatera</p>
            <p class="text-gray-800">20317</p>
            <p class="text-gray-800">0811 8877 988</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInformation;
