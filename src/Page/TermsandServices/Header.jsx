import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full h-72 text-black relative ">
        <img
          src="./src/assets/Aboutpage/AboutImage.jpeg"
          alt=""
          className="w-full h-72 object-cover absolute "
        />
        <div className="w-full h-72 bg-black  opacity-60 absolute"></div>
        <div className="absolute flex flex-col justify-center items-center inset-0 text-white gap-3     ">
          <p className="text-4xl ">Terms & Conditions</p>

          <p className="text-sm  w-96" align="center">
            Understanding and Accepting Our Terms and Conditions: Your Agreement
            to Use Our Services Responsibly and Effectively"
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
