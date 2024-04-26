import React from "react";
import { CiMail, CiTwitter, CiInstagram, CiFacebook } from "react-icons/ci";

const Subheader = () => {
  return (
    <>
      <div className="bg-purple-400 h-6 flex items-center text-white">
        <div className="flex justify-between w-9/12 mx-auto">
          <div className="text-xs flex gap-4">
            <span>Become Seller</span>
            <span>Help & Support</span>
            <span>Teams & Services</span>
            <span>Coupon & Discount</span>
          </div>
          <div className="flex gap-4">
            <CiMail />
            <CiTwitter />
            <CiInstagram />
            <CiFacebook />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subheader;
