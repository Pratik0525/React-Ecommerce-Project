import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { IoCartOutline, IoStar } from "react-icons/io5";
const Flashsales = [
  {
    image: "./src/assets/FlashSale/Coatlady.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$232",
  },
  {
    image: "./src/assets/FlashSale/BUrger.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$233",
  },
  {
    image: "./src/assets/FlashSale/Car.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$250",
  },
  {
    image: "./src/assets/FlashSale/Cycle.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$500",
  },
  {
    image: "./src/assets/FlashSale/Coatlady.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$232",
  },
  {
    image: "./src/assets/FlashSale/BUrger.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$233",
  },
  {
    image: "./src/assets/FlashSale/Car.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$250",
  },
  {
    image: "./src/assets/FlashSale/Cycle.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$500",
  },
  {
    image: "./src/assets/FlashSale/Coatlady.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$232",
  },
  {
    image: "./src/assets/FlashSale/BUrger.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$233",
  },
  {
    image: "./src/assets/FlashSale/Car.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$250",
  },
  {
    image: "./src/assets/FlashSale/Cycle.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$500",
  },
  {
    image: "./src/assets/FlashSale/Coatlady.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$232",
  },
  {
    image: "./src/assets/FlashSale/BUrger.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$233",
  },
  {
    image: "./src/assets/FlashSale/Car.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$250",
  },
  {
    image: "./src/assets/FlashSale/Cycle.jpeg",
    title: "DJI Phantom 4 Multispectral",
    price: "$500",
  },
];
const Onlyforyou = () => {
  return (
    <>
      <div className=" w-10/12 mx-auto">
        <div className="flex items-center justify-between">
          <span className=" text-2xl">Only for you</span>
          <div className=" w-9/12 bg-black h-[1px]  "></div>
          <span className="text-[#AD43AD] border-[1px] border-[#AD43AD] bg-white p-2">
            See More
          </span>
        </div>
        <div className=" ">
          <div className=" h-fit gap-10 py-8 grid grid-cols-4   ">
            {Flashsales.map((val, i) => {
              return (
                <>
                  <div className="flex flex-col gap-5 bg-[#F3ECF3] py-5 rounded-lg h-fit w-fit px-2">
                    <div className="flex justify-between items-center px-2">
                      <div className="w-16 flex justify-center items-center h-fit bg-[#AD43AD] rounded-md">
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
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Onlyforyou;

{
  /* <div className="flex flex-col gap-3 bg-[#F3ECF3] py-3 px-3 ">
               
                  <div className="flex justify-between items-center px-2">
                    <div className=" px-2 flex justify-center items-center h-fit bg-[#AD43AD] rounded-md text-white">
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
                  <div className="text-sm font-bold">{val.title}</div>
                  <div className="flex gap-2">
                    <span>{val.price}</span>
                    <span className="line-through text-gray-500">$300</span>
                  </div>
                  <div className="flex  items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <IoStar className="text-yellow-500 text-xl" />
                      <IoStar className="text-yellow-500 text-xl" />
                      <IoStar className="text-yellow-500 text-xl" />
                      <IoStar className="text-yellow-500 text-xl" />
                      <IoMdStarOutline className="text-yellow-500 text-2xl" />
                    </div>
                    <div>
                      <div className=" px-2 py-1 flex justify-center items-center h-fit bg-[#AD43AD] rounded-md text-white">
                        <IoCartOutline className="text-xl" />
                      </div>
                    </div>
                  </div>
                </div> */
}
