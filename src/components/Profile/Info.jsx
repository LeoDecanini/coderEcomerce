import React from "react";

const Info = () => {
  return (
    <div class="col-span-9 shadow rounded px-6 pt-5 pb-7">
      <h4 class="text-lg font-medium capitalize mb-4">Profile information</h4>
      <div class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label for="first">First name</label>
            <input type="text" name="first" id="first" class="p-1 border-black border rounded-md" />
          </div>
          <div className="flex flex-col">
            <label for="last">Last name</label>
            <input type="text" name="last" id="last" class="p-1 border-black border rounded-md" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label for="birthday">Birthday</label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              class="p-1 border-black border rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label for="gender">Gender</label>
            <select name="gender" id="gender" class="p-1 border-black border rounded-md">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label for="email">Email Address</label>
            <input type="email" name="email" id="email" class="p-1 border-black border rounded-md" />
          </div>
          <div className="flex flex-col">
            <label for="phone">Phone number</label>
            <input type="text" name="phone" id="phone" class="p-1 border-black border rounded-md" />
          </div>
        </div>
      </div>

      <div class="mt-4">
        <button
          type="submit"
          class="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
        >
          save changes
        </button>
      </div>
    </div>
  );
};

export default Info;
