import React from "react";
// import Images from "./src/assets/Aboutpage/Ourmisson.jpg";
import Images4 from "../../assets/Aboutpage/Ourmisson.jpg";

const Ourmission = () => {
  return (
    <>
      <div className="w-11/12 mx-auto py-10 flex flex-col gap-5">
        <div>
          <span className="text-3xl">
            Our <span className="text-[#9A0099]">Mission</span>
          </span>
          <p className="text-lg text-[#A19BA1]">
            Committed to Making Your Shopping Experience Exceptional
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 items-center">
          <div>
            <p className="text-sm">
              Nunc fringilla dolor eu lacus euismod, in tempor lectus viverra.
              Integer bibendum, elit vel euismod feugiat, urna risus eleifend
              est, in finibus justo metus nec ante. Sed eu sapien a quam tempus
              dapibus. In hac habitasse platea dictumst. Sed feugiat, urna in
              congue fermentum, elit metus volutpat nisl, nec fermentum urna
              felis nec est. Sed sed justo lectus. Phasellus lacinia, risus quis
              vulputate gravida, oNunc fringilla dolor eu lacus euismod, in
              tempor lectus viverra. Integer bibendum, elit vel euismod feugiat,
              urna risus eleifend est, in finibus justo metus nec ante. Sed eu
              sapien a quam tempus dapibus. In hac habitasse platea dictumst.
              Sed feugiat, urna in congue fermentum, elit metus volutpat nisl,
              nec fermentum urna felis nec est. Sed sed justo lectus. Phasellus
              lacinia, risus quis vulputate gravida, oNunc fringilla dolor eu
              lacus euismod, in tempor lectus viverra. Integer bibendum, elit
              vel euismod feugiat, urna risus eleifend est, in finibus justo
              metus nec ante. Sed eu sapien a quam tempus dapibus. In hac
              habitasse platea dictumst. Sed feugiat, urna in congue fermentum,
              elit metus volutpat nisl, nec fermentum urna felis nec est. Sed
              sed justo lectus. Phasellus lacinia, risus quis vulputate gravida,
              o
            </p>
          </div>
          <div>
            <img src={Images4} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourmission;
