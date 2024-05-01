import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
const Contact = [
  {
    type: "text",
    placeholder: "Your Name",
  },
  {
    type: "text",
    placeholder: "Your Email",
  },
  {
    type: "text",
    placeholder: "Your Phone",
  },
  {
    type: "text",
    placeholder: "Subject",
  },
];
const Contactus3 = () => {
  return (
    <>
      <div className="w-11/12 mx-auto  flex py-10 ">
        <div className="w-9/12  mx-auto ">
          <div className="grid grid-cols-2 gap-5 w-11/12 mx-auto">
            {Contact.map((val, i) => {
              return (
                <input
                  type="text"
                  className="placeholder:text-[#0F060F] placeholder:text-sm  bg-[#F7ECF7] w-80 rounded-md px-2  h-10"
                  placeholder={val.placeholder}
                />
              );
            })}
          </div>
          <div className="pt-3 w-10/12 ml-10 mt-4">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="placeholder:text-black placeholder:text-sm  bg-[#F7ECF7] w-full rounded-md px-2  h-64 "
            ></textarea>
          </div>
        </div>
        <div className="w-3/12  flex flex-col">
          <div className=" w-10/12 mx-auto flex flex-col gap-5 pb-5 bg-white border-b-[1px] border-b-[#0F060F]">
            <div className="flex justify-start items-center gap-3">
              <div className="rounded-full bg-[#AD43AD] w-fit h-fit p-2">
                <IoCallSharp className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-lg">Call to us </p>
              </div>
            </div>
            <div className="">
              <p>
                We are available 24/7. Call us anytime if you have any problem
              </p>
            </div>
            <div className="">
              <span>Phone: +8801611112222</span>
            </div>
          </div>
          <div className=" w-10/12 mx-auto flex flex-col gap-5 py-6 ">
            <div className="flex justify-start items-center gap-3">
              <div className="rounded-full bg-[#AD43AD] w-fit h-fit p-2">
                <MdOutlineEmail className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-lg">Write to us </p>
              </div>
            </div>
            <div className="">
              <p>Fill out our form and we will contact you within 24 hours.</p>
            </div>
            <div className="">
              <span>Emails: customer@exclusive.com</span>
            </div>
            <div className="">
              <span>Emails: support@exclusive.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus3;
