import React from "react";

const AboutHeader = () => {
  return (
    <>
      <div className="w-full h-80 text-black relative ">
        <img
          src="./src/assets/Aboutpage/AboutImage.jpeg"
          alt=""
          className="w-full h-80 object-cover absolute "
        />
        <div className="w-full h-80 bg-black  opacity-60 absolute"></div>
        <div className="absolute flex flex-col text-white gap-3    w-10/12 mx-20 mt-16">
          <p className="text-4xl ">About Us</p>
          <p className="text-xl">
            Empowering Your Lifestyle, One Click at a Time
          </p>
          <p className="text-lg">Nepal’s no.1 Ecommerce website</p>
          <button className="w-28 h-12 bg-[#AD43AD] text-[#eeecec] rounded-md">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
