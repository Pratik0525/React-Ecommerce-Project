import React from "react";
import BestSeller2 from "./BestSeller2";
import BestSeller1 from "./BestSeller1";

const Bestseller = () => {
  return (
    <>
      <div className="py-10">
        <div className="w-10/12 mx-auto  ">
          <div className="flex  items-center  py-5">
            <span className="w-1/5 text-3xl">Best Sellers</span>
            <div className="w-full h-[1px] bg-black "></div>
          </div>
          <div className="  grid grid-cols-5">
            <BestSeller1 />
            <BestSeller2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bestseller;
