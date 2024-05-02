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
    image: Images2,
    title: "DJI Phantom 4 Multispectral",
    price: "$233",
  },
  {
    image: Images3,
    title: "DJI Phantom 4 Multispectral",
    price: "$250",
  },
  {
    image: Images4,
    title: "DJI Phantom 4 Multispectral",
    price: "$500",
  },
];
const Flashsale = () => {
  return (
    <>
      <div className=" w-10/12 mx-auto py-10">
        <div className="flex items-center">
          <span className=" w-1/6 text-2xl">Flash Span</span>
          <div className="w-7/12 bg-black h-[1px]  "></div>
          <span className="text-gray-200">Ends In</span>
        </div>
        <div className=" ">
          <div className=" h-fit   py-8 flex  gap-10">
            {Flashsales.map((val, i) => {
              return (
                <div className="flex flex-col gap-5 bg-[#F3ECF3] py-5 rounded-lg h-fit w-fit px-2">
                  <div className="flex justify-between items-center px-2">
                    <div className="w-16 flex justify-center items-center h-fit bg-[#AD43AD] rounded-md text-white">
                      -20%
                    </div>
                    <IoMdStarOutline className="text-xl cursor-pointer" />
                  </div>
                  <div>
                    <img
                      src={val.image}
                      alt=""
                      className="w-52 h-36 object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-bold">{val.title}</div>
                    <div className="flex gap-2">
                      <span>{val.price}</span>
                      <span className="line-through text-gray-500">$300</span>
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Flashsale;
