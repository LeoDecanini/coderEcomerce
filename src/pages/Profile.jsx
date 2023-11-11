import React from "react";
import BreadCrumb from "../components/Profile/BreadCrumb";
import Sidebar from "../components/Profile/Sidebar";
import Info from "../components/Profile/Info";
import ProfileInformation from "../components/Profile/ProfileInformation";

const Profile = () => {
  return (
    <>
      <BreadCrumb />

      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <Sidebar />

        <div className="col-span-9 grid grid-cols-3 item gap-4 justify-end">
          <Info />
          <ProfileInformation/>
        </div>
      </div>
    </>
  );
};

export default Profile;
