import React from "react";
import { CiFacebook, CiInstagram, CiMail, CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white   ">
        <div className="flex justify-around py-10">
          <div className="flex flex-col gap-7">
            <div>
              <span className="text-2xl font-black">Nepse</span>
            </div>
            <div className="w-64">
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                corruptiLorem ipsum dolor sit amet consectetur adipisicing elit.
                Modi corrupti reprehenderit quo et, optio eaque officiis sunt
                aut voluptate excepturi at dicta vel dolor? reprehenderit quo
                et, optio eaque officiis sunt aut voluptate excepturi at dicta
                vel dolor? Deserunt, distinctio qui? Totam, dolore veniam!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div>
              <span>Costumer Care</span>
            </div>
            <div className="flex flex-col gap-5 text-xs ">
              <Link to="/About" className="hover:underline">
                About us
              </Link>
              <Link to="/Contactus" className="hover:underline">
                Contact us
              </Link>
              <a href="" className="hover:underline">
                Help & Support
              </a>
              <a href="" className="hover:underline">
                Privacy & Policy
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div>
              <span>Quick Links</span>
            </div>
            <div className="flex flex-col gap-5 text-xs ">
              <a href="" className="hover:underline">
                Most Popular
              </a>
              <a href="" className="hover:underline">
                Best Seller
              </a>
              <a href="" className="hover:underline">
                Become Seller
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div>
              <span>My Account</span>
            </div>
            <div className="flex flex-col gap-5 text-xs ">
              <a href="" className="hover:underline">
                My Whistlist
              </a>
              <a href="" className="hover:underline">
                Cart
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div>
              <span>News Letter</span>
            </div>
            <div className="flex flex-col gap-5 text-xs ">
              <div className="w-52">
                <p>
                  Sign to our newsletter for further future updates so you won’t
                  miss anything{" "}
                </p>
              </div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="h-8 px-2"
                />
                <label className="bg-[#AD43AD] w-20 h-8 flex justify-center items-center text-sm">
                  Subscribe
                </label>
              </div>
              <div className="flex gap-2 flex-col">
                <div>
                  <span>Follow us on social media</span>
                </div>
                <div className="flex gap-2 text-lg">
                  <CiMail />
                  <CiTwitter />
                  <CiInstagram />
                  <CiFacebook />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <div>
              <span>Payment Methods</span>
            </div>
            <div>
              <img src="./src/assets/Footer.png" alt="" />
            </div>
          </div>
          <div className="w-full h-[1px] bg-white"></div>
          <div className="pb-3">
            <p>© 2021 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
