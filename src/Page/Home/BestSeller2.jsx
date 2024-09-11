import React from "react";
import { GrStrikeThrough } from "react-icons/gr";
import { IoMdStarOutline } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import Images1 from "../../assets/FlashSale/BUrger.jpeg";
import Images2 from "../../assets/FlashSale/Car.jpeg";
import Images3 from "../../assets/FlashSale/Coatlady.jpeg";
import Images4 from "../../assets/FlashSale/Cycle.jpeg";
const Flashsales = [
  {
    image: Images1,
    title: "DJI Phantom 4 Multispectral",
    price: "$232",
  },
  {
    image: Images1,
    title: "DJI Phantom 4 Multispectral",
    price: "$232",
  },{
    image: Images1,
    title: "DJI Phantom 4 Multispectral",
    price: "$232",
  },{
    image: Images1,
    title: "DJI Phantom 4 Multispectral",
    price: "$232",
  },{
    image: Images1,
    title: "DJI Phantom 4 Multispectral",
    price: "$232",
  },{
    image: Images1,
    title: "DJI Phantom 4 Multispectral",
    price: "$232",
  },
  
];
const BestSeller2 = () => {
  return (
    <>
      <div className=" w-full  col-span-3">
        <div className="grid grid-cols-3 gap-3">
          {Flashsales.map((val, i) => {
            return (
              <div className="flex flex-col gap-4 bg-[#F3ECF3]  rounded-lg h-fit w-fit px-2 py-3">
                <div className="flex justify-between items-center ">
                  <div className="w-12 text-xs p-1 flex justify-center items-center h-fit bg-[#AD43AD] rounded-md text-white">
                    -20%
                  </div>
                  <IoMdStarOutline className="text-xl cursor-pointer" />
                </div>
                <div>
                  <img
                    src={val.image}
                    alt=""
                    className="w-36 h-28 object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-xs  font-bold">{val.title}</div>
                  <div className="flex gap-2">
                    <span>{val.price}</span>
                    <span className="line-through text-gray-500">$300</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <IoStar className="text-yellow-500 text-md" />
                    <IoStar className="text-yellow-500 text-md" />
                    <IoStar className="text-yellow-500 text-md" />
                    <IoStar className="text-yellow-500 text-md" />
                    <IoMdStarOutline className="text-yellow-500 text-xl" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BestSeller2;
