import React from "react";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";
const Box = [
  {
    Icon: <TbDeviceLandlinePhone />,
    topic: "Call us",
    description: "+99923993",
  },
  {
    Icon: <FaClock />,
    topic: "Office hours",
    description: "9:00 am to 10:pm",
  },
  {
    Icon: <MdOutlineEmail />,
    topic: "Email Us",
    description: "blaba@gmail.com",
  },
  {
    Icon: <FaLocationDot />,
    topic: "Located In",
    description: "East Sea Nepal",
  },
];
const Contactus2 = () => {
  return (
    <>
      <div className="w-11/12 mx-auto py-5 ">
        <div>
          <div>
            <p className="text-3xl">Get in touch </p>
            <span className="text-[#A19BA1]">
              Want to know more about us? contact us right now
            </span>
          </div>
          <div className="  flex justify-between items-center  ">
            {Box.map((val, i) => {
              return (
                <div className="w-64 h-52 px-3 rounded-lg shadow-lg shadow-gray-300 bg-[#fff] flex flex-col justify-center items-center gap-2 ">
                  <div className="text-3xl text-[#AD43AD] ">{val.Icon}</div>
                  <div className="text-xl " align="center">
                    {val.topic}
                  </div>
                  <div className="text-xs text-[#A19BA1]" align="center">
                    {val.description}
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

export default Contactus2;
