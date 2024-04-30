import React from "react";
import { CiMail, CiTwitter, CiInstagram, CiFacebook } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";

const Contact2 = () => {
  return (
    <>
      <div className="flex justify-around items-center py-10">
        <div className="flex flex-col gap-28 ">
          <div className="flex gap-5">
            <div className="bg-white flex justify-center items-center rounded-3xl p-3">
              <CiMail className="text-3xl text-[#9A0099]" />
            </div>
            <div className="text-white">
              <p className="text-xl">Email</p>
              <p>contact@flex.com</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-white flex justify-center items-center rounded-3xl p-3">
              <FaPhoneVolume className="text-3xl text-[#9A0099]" />
            </div>
            <div className="text-white">
              <p className="text-xl">Phone</p>
              <p>+7-843-672-431</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-white flex justify-center items-center rounded-3xl p-3">
              <FiBarChart2 className="text-3xl text-[#9A0099]" />
            </div>
            <div className="text-white">
              <p className="text-xl">Socials</p>
              <div className="flex gap-4 text-xl">
                <CiMail />
                <CiTwitter />
                <CiInstagram />
                <CiFacebook />
              </div>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0623506559!2d-74.30933245239254!3d40.69701927284329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2snp!4v1714406922553!5m2!1sen!2snp"
            width="600"
            height="450"
            //   style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact2;
