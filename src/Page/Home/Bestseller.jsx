import React from "react";
import BestSeller2 from "./BestSeller2";
import BestSeller1 from "./BestSeller1";

const Bestseller = () => {
  return (
    <>
      <div className="py-10">
        <div className="w-10/12 mx-auto bg-pink-500">
          <div className="flex  items-center ">
            <span className="w-1/5 text-3xl">Best Sellers</span>
            <div className="w-full h-[1px] bg-black "></div>
          </div>

          <div className="flex bg-yellow-500 ">
            <BestSeller1 />
            <BestSeller2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bestseller;
