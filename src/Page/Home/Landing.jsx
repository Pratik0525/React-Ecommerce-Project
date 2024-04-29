import React from "react";

const Landing = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-fit  ">
        <div className="bg-green-500 flex flex-col justify-center px-24 gap-5 py-40">
          <div>
            <span className="text-3xl text-[#AD43AD]">25% Discount</span>
          </div>
          <div className="w-96">
            <span className="text-4xl ">
              Upgrade Your Style with Discounts!
            </span>
          </div>
          <div>
            <span className="text-lg">
              Stay Ahead of the Style Curve with Our Discounts!
            </span>
          </div>
          <div>
            <button className=" bg-[#AD43AD] text-white font-light rounded-md p-2">
              Buy Now
            </button>
          </div>
        </div>
        <div className="bg-red-500">Image</div>
      </div>
    </>
  );
};

export default Landing;
