import React from "react";
import AboutHeader from "../../Page/About/AboutHeader";
import Whoweare from "../../Page/About/Whoweare";
import Whoweare2 from "../../Page/About/Whoweare2";
import Ourmission from "../../Page/About/Ourmission";
import Box3 from "../../Page/About/Box3";
import Contact from "../../Page/About/Contact/Contacts";
import Oursuccess from "../../Page/About/Oursuccess";

const About = () => {
  return (
    <>
      <div>
        <AboutHeader />
        <Whoweare />
        <Whoweare2 />
        <Ourmission />
        <Box3 />
        <Contact />
        <Oursuccess />
      </div>
    </>
  );
};

export default About;
