import React from "react";

const Haveanyquestion = () => {
  return (
    <>
      <div className="w-full h-72 text-black relative ">
        <img
          src="./src/assets/Aboutpage/AboutImage.jpeg"
          alt=""
          className="w-full h-72 object-cover absolute "
        />
        <div className="w-full h-72 bg-black  opacity-60 absolute"></div>
        <div className="absolute flex flex-col justify-center items-center inset-0 text-white gap-5     ">
          <p className="text-4xl ">Have any Question?</p>

          <p className="text-xs  w-80" align="center">
            eget ligula dignissim malesuada a id metus. Cras euismod vel felis a
            facilisis. Fusce in justo vel risus eleifend
          </p>
          <button className="w-28 h-12 bg-[#AD43AD] text-[#eeecec] rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Haveanyquestion;
