import React from "react";
import { CiMail, CiTwitter, CiInstagram, CiFacebook } from "react-icons/ci";
import { Link } from "react-router-dom";

const Subheader = () => {
  return (
    <>
      <div className="bg-[#AD43AD] h-6 flex items-center text-white">
        <div className="flex justify-between w-10/12 mx-auto">
          <div className="text-xs flex gap-4">
            <Link to="/Seller">Become Seller</Link>
            <span>Help & Support</span>
            <Link to="/TermsandServices">Terms & Services</Link>
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
