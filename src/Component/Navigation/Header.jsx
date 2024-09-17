import React from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className=" bg-[#AD43AD] h-20 flex items-center">
        <div className="flex justify-between w-10/12  mx-auto ">
          <div className="flex gap-3 items-center">
            <div>
              <Link to="/" className="text-3xl text-white ">
                Nepse
              </Link>
            </div>
            <div className="flex bg-white items-center rounded-lg px-2">
              <input
                type="text"
                name=""
                id="search"
                placeholder="Discover Your Next Must-have"
                className="w-80 rounded-lg h-10 placeholder:text-sm outline-none"
              />
              <CiSearch to="search" className=" cursor-pointer  h-full w-6" />
            </div>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Category"
                className="w-28 h-10 rounded-lg px-2 placeholder:text-sm outline-none"
              />
            </div>
          </div>
          <div className="flex gap-3 items-center text-white text-sm">
            <CgProfile />
            <Link to="/Signup" className="text-sm ">
              Sign Up
            </Link>
            <FaHeart />
            <FaCartPlus />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
