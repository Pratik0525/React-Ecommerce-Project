import React from "react";

const Bestseller = () => {
  return (
    <>
      <div>
        <div className="flex items-center  w-10/12 mx-auto">
          <span className="w-1/5 text-2xl">Best Sellers</span>
          <div className="w-full h-[1px] bg-black "></div>
        </div>
        <div className="bg-yellow-500  grid grid-cols-2 gap-4 w-10/12 mx-auto">
          <div className="bg-cyan-500 ">nf edhf</div>
          <div className="bg-red-600 ">mndfbsdhbf</div>
        </div>
      </div>
    </>
  );
};

export default Bestseller;
