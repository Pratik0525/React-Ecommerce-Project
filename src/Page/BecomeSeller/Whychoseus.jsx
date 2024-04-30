import React from "react";
// import { IconBase } from "react-icons";
import { BsCart2 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaFistRaised, FaHandshake } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
import { MdPayments } from "react-icons/md";
import Images1 from "../../assets/Aboutpage/1.png";
import Images2 from "../../assets/Aboutpage/2.png";
import Images3 from "../../assets/Aboutpage/3.png";
import Images4 from "../../assets/Aboutpage/4.jpg";
const Box = [
  {
    Icon: <CiDeliveryTruck />,
    topic: "Fast Delivery",
    description:
      "Count on timely and reliable delivery services, so you can enjoy your purchases when and where you want them.",
  },
  {
    Icon: <FaPeopleGroup />,
    topic: "Reach",
    description:
      "you have access to a world of shopping opportunities. Our online marketplace connects buyers and sellers from around the globe, giving you  ",
  },
  {
    Icon: <MdPayments />,
    topic: "Fast Payment ",
    description:
      "That's why we offer a lightning-fast and hassle-free checkout process.With our secure and efficient payment system, you can complete your transactions in just a few clicks,",
  },
  {
    Icon: <FcOnlineSupport />,
    topic: "24/7 support ",
    description:
      " Our dedicated customer support team is here to assist you with any questions or concerns, ensuring your satisfaction. ",
  },
];

const Whychoseus = () => {
  return (
    <>
      <div>
        <div className="w-11/12 mx-auto flex flex-col gap-5 py-10 ">
          <div>
            <p className="text-3xl font-semibold">Why Choose us?</p>
          </div>
          <div className="  flex justify-between items-center  ">
            {Box.map((val, i) => {
              return (
                <div className="w-64 h-72 px-3 rounded-lg shadow-lg shadow-gray-300 bg-[#F1DAF1] flex flex-col justify-center items-center gap-5 ">
                  <div className="text-6xl text-[#AD43AD] ">{val.Icon}</div>
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

export default Whychoseus;
