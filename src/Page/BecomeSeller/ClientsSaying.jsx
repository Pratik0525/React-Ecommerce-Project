import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaFistRaised, FaHandshake } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
import { MdPayments } from "react-icons/md";
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
const ClientsSaying = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <span>
              What our{" "}
              <span className="text-[#AD43AD]"> clients are saying </span>
            </span>
            <p>
              Discover the Stories of Satisfied Customers and Their Experiences
              with Us
            </p>
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

export default ClientsSaying;
