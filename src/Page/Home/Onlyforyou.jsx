import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { IoCartOutline, IoStar } from "react-icons/io5";
import Images1 from "../../assets/Onlyforyou/Coatlady.jpeg";
import Images2 from "../../assets/Onlyforyou/Cycle.png";
// import Images1 from "../../assets/Onlyforyou/Coatlady.jpeg";
// import Images1 from "../../assets/Onlyforyou/Coatlady.jpeg";
import Images5 from "../../assets/Onlyforyou/Car1.jpeg";
import Images6 from "../../assets/Onlyforyou/Car2.png";
import Images7 from "../../assets/Onlyforyou/Car3.png";
import Images8 from "../../assets/Onlyforyou/Car4.jpeg";
import Images9 from "../../assets/Onlyforyou/Jacket1.jpeg";
import Images10 from "../../assets/Onlyforyou/Jacket2.png";
import Images11 from "../../assets/Onlyforyou/Jacket3.png";
import Images12 from "../../assets/Onlyforyou/Jacket4.png";
import Images13 from "../../assets/Onlyforyou/Shoes1.jpeg";
import Images14 from "../../assets/Onlyforyou/Shoes2.jpg";
import Images15 from "../../assets/Onlyforyou/Boot.png";
import Images16 from "../../assets/Onlyforyou/Converse.jpeg";
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
    image: Images1,
    title: "DJI Phantom 4 Multispectral",
    price: "$250",
  },
  {
    image: Images1,
    title: "DJI Phantom 4 Multispectral",
    price: "$500",
  },
  {
    image: Images5,
    title: "DJI Phantom 4 Multispectral",
    price: "$232",
  },
  {
    image: Images6,
    title: "DJI Phantom 4 Multispectral",
    price: "$233",
  },
  {
    image: Images7,
    title: "DJI Phantom 4 Multispectral",
    price: "$250",
  },
  {
    image: Images8,
    title: "DJI Phantom 4 Multispectral",
    price: "$500",
  },
  {
    image: Images9,
    title: "DJI Phantom 4 Multispectral",
    price: "$232",
  },
  {
    image: Images10,
    title: "DJI Phantom 4 Multispectral",
    price: "$233",
  },
  {
    image: Images11,
    title: "DJI Phantom 4 Multispectral",
    price: "$250",
  },
  {
    image: Images12,
    title: "DJI Phantom 4 Multispectral",
    price: "$500",
  },
  {
    image: Images13,
    title: "DJI Phantom 4 Multispectral",
    price: "$232",
  },
  {
    image: Images14,
    title: "DJI Phantom 4 Multispectral",
    price: "$233",
  },
  {
    image: Images15,
    title: "DJI Phantom 4 Multispectral",
    price: "$250",
  },
  {
    image: Images16,
    title: "DJI Phantom 4 Multispectral",
    price: "$500",
  },
];
const Onlyforyou = () => {
  return (
    <>
      <div className=" w-10/12 mx-auto py-10">
        <div className="flex items-center justify-between">
          <span className=" text-2xl">Only for you</span>
          <div className=" w-9/12 bg-black h-[1px]  "></div>
          <span className="text-[#AD43AD] border-[1px] border-[#AD43AD] bg-white p-2 hover:bg-[#ad43ad] hover:text-white transition-all delay-75 duration-300 ease-out cursor-pointer">
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
