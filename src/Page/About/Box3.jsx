import React from "react";
import { IconBase } from "react-icons";
import { BsCart2 } from "react-icons/bs";
import { FaFistRaised, FaHandshake } from "react-icons/fa";
const Box = [
  {
    Icon: <FaFistRaised />,
    topic: "Empowering shoppers everywhere",
    description:
      "usto metus nec ante. Sed eu sapien a quam tempus dapibus. In hac habitasse platea dictumst. Sed feugiat, urna in ",
  },
  {
    Icon: <FaHandshake />,
    topic: "Connecting People to Quality Products",
    description:
      "usto metus nec ante. Sed eu sapien a quam tempus dapibus. In hac habitasse platea dictumst. Sed feugiat, urna in ",
  },
  {
    Icon: <BsCart2 />,
    topic: "Making Shopping Simple and Delightful ",
    description:
      "usto metus nec ante. Sed eu sapien a quam tempus dapibus. In hac habitasse platea dictumst. Sed feugiat, urna in ",
  },
];
const Box3 = () => {
  return (
    <>
      <div className="w-11/12 pb-16 mx-auto  flex justify-between items-center ">
        {Box.map((val, i) => {
          return (
            <div className="w-80 h-fit px-10 bg-[#F1DAF1] flex flex-col justify-center items-center gap-5 py-10">
              <div className="text-6xl text-[#AD43AD] ">{val.Icon}</div>
              <div className="text-xl " align="center">
                {val.topic}
              </div>
              <div className="text-sm" align="center">
                {val.description}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Box3;
