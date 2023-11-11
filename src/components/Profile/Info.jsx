import React from "react";

const Info = () => {
  return (
    <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
      <h4 className="text-lg font-medium capitalize mb-4">Profile information</h4>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="first">First name</label>
            <input type="text" name="first" id="first" className="p-1 border-black border rounded-md" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="last">Last name</label>
            <input type="text" name="last" id="last" className="p-1 border-black border rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="birthday">Birthday</label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              className="p-1 border-black border rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender" className="p-1 border-black border rounded-md">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" className="p-1 border-black border rounded-md" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Phone number</label>
            <input type="text" name="phone" id="phone" className="p-1 border-black border rounded-md" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
        >
          save changes
        </button>
      </div>
    </div>
  );
};

export default Info;
