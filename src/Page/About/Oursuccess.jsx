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
];
const Oursuccess = () => {
  return (
    <>
      <div>
        <div className="w-10/12 mx-auto bg-yellow-500">
          <div>
            <h1>Meet the Brilliant Minds Behind Our Success!</h1>
            <span>Our Team: The Powerhouse of Passion and Expertise</span>
          </div>
          <div className=" h-fit bg-pink-500  py-2">
            {Success.map((val, i) => {
              return (
                <>
                  <div
                    className="flex flex-col justify-center items-center w-72 "
                    // align="center"
                  >
                    <div className="bg-[#F6F5F6] w-full flex justify-center ">
                      <img src={val.image} alt="" className="h-64 " />
                    </div>

                    <div className=" bg-white">
                      <h1 className="text-2xl font-semibold">{val.name}</h1>
                      <p className="text-sm  text-">{val.decription}</p>
                    </div>
                    <div className="flex text-lg gap-3  bg-yellow-500">
                      <p>{val.icon1}</p>
                      <p>{val.icon2}</p>
                      <p>{val.icon3}</p>
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
