import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import Images1 from "../../assets/Landingpagebestseller/Shoes.png";

const BestSeller1 = () => {
  return (
    <>
      <div className="flex flex-col gap-6 bg-[#F3ECF3]  px-5 rounded-lg w-96 h-fit">
        <div className="flex justify-between items-center ">
          <div className="w-16 flex justify-center items-center h-8 bg-[#AD43AD] rounded-md text-white">
            New
          </div>
          <IoMdStarOutline className="text-2xl cursor-pointer" />
        </div>
        <div>
          <img src={Images1} alt="" className="w-72  h-72 object-cover" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-md font-light">DJI Phantom 4 Multispectral</div>
          <div className="flex gap-2 items-center">
            <span className="font-bold text-lg">$232</span>
            <span className="line-through text-gray-400 text-sm">$300</span>
          </div>
          <div className="flex gap-2 items-center">
            <IoStar className="text-yellow-500 text-xl" />
            <IoStar className="text-yellow-500 text-xl" />
            <IoStar className="text-yellow-500 text-xl" />
            <IoStar className="text-yellow-500 text-xl" />
            <IoMdStarOutline className="text-yellow-500 text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller1;

//    <div className="bg-cyan-500 w-6/12 ">
// <div className=" h-fit   py-8 flex  gap-10  ">
//   {Flashsales.map((val, i) => {
//     return (

//     );
//   })}
// </div>
// </div>
