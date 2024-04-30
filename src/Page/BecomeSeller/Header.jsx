import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full h-96 text-black relative ">
        <img
          src="./src/assets/Aboutpage/AboutImage.jpeg"
          alt=""
          className="w-full h-96 object-cover absolute "
        />
        <div className="w-full h-96 bg-black  opacity-60 absolute"></div>
        <div className="absolute flex flex-col text-white gap-5    w-10/12 mx-20 mt-20">
          <p className="text-6xl ">Nepal’s No. 1 marketplace</p>
          <p className="text-2xl w-80">
            Become seller and start your business right away
          </p>
          <p className="text-sm w-80">
            Register you business in just 5 minutes and start selling today
          </p>
          <button className="w-28 h-12 bg-[#AD43AD] text-[#eeecec] rounded-md">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
