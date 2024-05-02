import React from "react";

import Images1 from "../../assets/Bestseller/1.png";
// import Images2 from "../assets/Bestseller/1.png";
// import Images3 from "../assets/Bestseller/1.png";
// import Images4 from "../assets/Bestseller/1.png";
const Box = [
  {
    Image: Images1,
    topic: "Nico Robin",
    location: "Kathmandu Nepal",
    description:
      "uam tempus dapibus. In hac habitasse platea dictumst. Sed feugiat, urna ",
  },
  {
    Image: Images1,
    topic: "Nico Robin",
    location: "Kathmandu Nepal",
    description:
      "uam tempus dapibus. In hac habitasse platea dictumst. Sed feugiat, urna ",
  },
  {
    Image: Images1,
    topic: "Nico Robin",
    location: "Kathmandu Nepal",
    description:
      "uam tempus dapibus. In hac habitasse platea dictumst. Sed feugiat, urna ",
  },
  {
    Image: Images1,
    topic: "Nico Robin",
    location: "Kathmandu Nepal",
    description:
      "uam tempus dapibus. In hac habitasse platea dictumst. Sed feugiat, urna ",
  },
];
const ClientsSaying = () => {
  return (
    <>
      <div className="pt-10 pb-5 w-11/12 mx-auto">
        <div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl">
              What our{" "}
              <span className="text-[#AD43AD] "> clients are saying </span>
            </span>
            <p className="text-sm">
              Discover the Stories of Satisfied Customers and Their Experiences
              with Us
            </p>
          </div>
          <div className="  flex justify-between items-center  py-10">
            {Box.map((val, i) => {
              return (
                <div className="w-64 h-80 px-1 rounded-lg shadow-lg shadow-gray-200 bg-[#fff] flex flex-col justify-center items-center gap-5 ">
                  <div className="text-6xl text-[#AD43AD] ">
                    <img
                      src={val.Image}
                      alt=""
                      className="w-52 h-36 object-cover"
                    />
                  </div>
                  <div align="center">
                    <span className="text-xl ">{val.topic}</span>
                    <p className="text-[#A19BA1]">{val.location}</p>
                  </div>

                  <div className="text-xs text-[#383638] px-3" align="center">
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

export default ClientsSaying;
