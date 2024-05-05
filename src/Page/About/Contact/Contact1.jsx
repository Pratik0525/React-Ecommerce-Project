import React from "react";
import { CiMail, CiTwitter, CiInstagram, CiFacebook } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto  ">
        <div className="flex flex-col gap-5">
          <header className="bg-white rounded-lg w-fit px-2">Contact</header>
          <span className="text-white text-3xl">Let’s stay connected</span>
          <div className="flex justify-between items-center">
            <p className="text-white w-9/12">
              It's never been easier to get in touch with Flex. Call us, use our
              live chat widget or email and we'll get back to you as soon as
              possible!
            </p>
            <button className="flex justify-center items-center gap-2 bg-white w-40 h-10 rounded-lg px-2">
              <CiMail className="text-xl" />
              <p className="font-semibold">Send Message</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
