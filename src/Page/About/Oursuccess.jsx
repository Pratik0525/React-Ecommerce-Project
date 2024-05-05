import React from "react";
import Images5 from "../../assets/Aboutpage/5.png";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
const Success = [
  {
    image: Images5,
    name: "Tom cruise",
    decription: "Founder & Chairman",
    icon1: <CiTwitter />,
    icon2: <CiInstagram />,
    icon3: <CiLinkedin />,
  },
  {
    image: Images5,
    name: "Tom cruise",
    decription: "Founder & Chairman",
    icon1: <CiTwitter />,
    icon2: <CiInstagram />,
    icon3: <CiLinkedin />,
  },
  {
    image: Images5,
    name: "Tom cruise",
    decription: "Founder & Chairman",
    icon1: <CiTwitter />,
    icon2: <CiInstagram />,
    icon3: <CiLinkedin />,
  },
];
const Oursuccess = () => {
  return (
    <>
      <div>
        <div className="w-10/12 mx-auto py-10">
          <div className="w-5/12">
            <h1 className="text-2xl font-semibold">
              Meet the Brilliant Minds Behind Our Success!
            </h1>
            <span className="text-lg">
              Our Team: The Powerhouse of Passion and Expertise
            </span>
          </div>
          <div className=" h-fit   py-2 flex justify-between">
            {Success.map((val, i) => {
              return (
                <>
                  <div className=" w-72  h-fit py-5 " align="center">
                    <div className="bg-[#F6F5F6] w-full flex justify-center ">
                      <img src={val.image} alt="" className="h-72 " />
                    </div>

                    <div className=" bg-white flex flex-col gap-2">
                      <h1 className="text-2xl font-semibold">{val.name}</h1>
                      <p className="text-sm  text-">{val.decription}</p>
                      <div className="text-xl flex justify-center gap-3  ">
                        <p>{val.icon1}</p>
                        <p>{val.icon2}</p>
                        <p>{val.icon3}</p>
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

export default Oursuccess;
