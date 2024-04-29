import React from "react";
import Images1 from "../../assets/Aboutpage/1.png";
import Images2 from "../../assets/Aboutpage/2.png";
import Images3 from "../../assets/Aboutpage/3.png";
import Images4 from "../../assets/Aboutpage/4.jpg";

const Whoweare = () => {
  return (
    <>
      <div className="w-11/12 mx-auto  grid grid-cols-2 pt-10 py-3">
        <div className=" flex flex-col gap-6 ">
          <h1 className="text-3xl font-semibold">Who we are?</h1>
          <p className="text-sm w-11/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            purus eget ligula dignissim malesuada a id metus. Cras euismod vel
            felis a facilisis. Fusce in justo vel risus eleifend suscipit. Nulla
            facilisi. Phasellus euismod euismod nunc, sit amet ultricies ligula
            ullamcorper id. Vestibulum eleifend velit eget arcu dignissim, nec
            fringilla ex consectetur. Sed rhoncus augue eget tortor iaculis, id
            bibendum nunc fringilla. Nunc fringilla dolor eu lacus euismod, in
            tempor lectus viverra. Integer bibendum, elit vel euismod feugiat,
            urna risus eleifend est, in finibus justo metus nec ante. Sed eu
            sapien a quam tempus dapibus. In hac habitasse platea dictumst. Sed
            feugiat, urna in congue fermentum, elit metus volutpat nisl, nec
            fermentum urna felis nec est. Sed sed justo lectus. Phasellus
            lacinia, risus quis vulputate gravida, odio nisi bibendum ex, id
            feugiat justo arcu non neque.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nullam in purus eget ligula dignissim malesuada a
            id metus. Cras euismod vel felis a facilisis. Fusce in justo vel
            risus eleifend suscipit. Nulla facilisi. Phasellus euismod euismod
            nunc, sit amet ultricies ligula ullamcorper id. Vestibulum eleifend
            velit eget arcu dignissim, nec fringilla ex consectetur. Sed rhoncus
            augue eget tortor iaculis, id bibendum nunc fringilla. Nunc
            fringilla dolor eu lacus euismod, in tempor lectus viverra. Integer
            bibendum, elit vel euismod feugiat, urna risus eleifend est, in
            finibus justo metus nec ante. Sed eu sapien a quam{" "}
          </p>
        </div>
        <div className=" grid grid-cols-2 gap-4 ">
          <img src={Images3} alt="" className="w-96 h-52 object-cover" />
          <img src={Images2} alt="" className="w-96 h-52 object-cover" />
          <img src={Images1} alt="" className="w-96 h-52 object-cover" />
          <img src={Images4} alt="" className="w-96 h-52 object-cover" />
        </div>
      </div>
    </>
  );
};

export default Whoweare;
