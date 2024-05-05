import React from "react";
import Signup2 from "./Signup2";
import Signup1 from "./Signup1";

const MainSignup = () => {
  return (
    <>
      <div className="grid grid-cols-2 ">
        <Signup1 />
        <Signup2 />{" "}
      </div>
    </>
  );
};

export default MainSignup;
