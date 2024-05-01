import React from "react";
import { LuDot } from "react-icons/lu";
const Points = [
  {
    icon: <LuDot />,
    title: "Use of the Website",
    description:
      "You must be at least 18 years old to use our website. You agree to use the website for lawful purposes only and not engage in any activity that violates applicable       laws, regulations, or the rights of others.",
  },
  {
    icon: <LuDot />,
    title: "Intellectual Property",
    description:
      "All content on our website, including text, graphics, logos, images, and software, is the property of [Your Ecommerce Website] or its licensors and is protected by intellectual property laws. You may not use, reproduce, distribute, or modify our content without our explicit permission.",
  },
  {
    icon: <LuDot />,
    title: "Privacy",
    description:
      "Your use of our website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your information. By using our website, you consent to our Privacy Policy.",
  },
  {
    icon: <LuDot />,
    title: "Products and Services",
    description:
      "We make every effort to accurately display our products and services on our website. However, we do not warrant that product descriptions, prices, or availability are always accurate. We reserve the right to correct any errors or omissions and to change product prices and availability at any time.",
  },
  {
    icon: <LuDot />,
    title: "Use of the Website",
    description:
      "You must be at least 18 years old to use our website. You agree to use the website for lawful purposes only and not engage in any activity that violates applicable       laws, regulations, or the rights of others.",
  },
  {
    icon: <LuDot />,
    title: "Intellectual Property",
    description:
      "All content on our website, including text, graphics, logos, images, and software, is the property of [Your Ecommerce Website] or its licensors and is protected by intellectual property laws. You may not use, reproduce, distribute, or modify our content without our explicit permission.",
  },
  {
    icon: <LuDot />,
    title: "Privacy",
    description:
      "Your use of our website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your information. By using our website, you consent to our Privacy Policy.",
  },
  {
    icon: <LuDot />,
    title: "Products and Services",
    description:
      "We make every effort to accurately display our products and services on our website. However, we do not warrant that product descriptions, prices, or availability are always accurate. We reserve the right to correct any errors or omissions and to change product prices and availability at any time.",
  },
  {
    icon: <LuDot />,
    title: "Use of the Website",
    description:
      "You must be at least 18 years old to use our website. You agree to use the website for lawful purposes only and not engage in any activity that violates applicable       laws, regulations, or the rights of others.",
  },
  {
    icon: <LuDot />,
    title: "Intellectual Property",
    description:
      "All content on our website, including text, graphics, logos, images, and software, is the property of [Your Ecommerce Website] or its licensors and is protected by intellectual property laws. You may not use, reproduce, distribute, or modify our content without our explicit permission.",
  },
  {
    icon: <LuDot />,
    title: "Privacy",
    description:
      "Your use of our website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your information. By using our website, you consent to our Privacy Policy.",
  },
  {
    icon: <LuDot />,
    title: "Products and Services",
    description:
      "We make every effort to accurately display our products and services on our website. However, we do not warrant that product descriptions, prices, or availability are always accurate. We reserve the right to correct any errors or omissions and to change product prices and availability at any time.",
  },
];
const Termspoints = () => {
  return (
    <>
      <div>
        <div className="w-11/12 mx-auto flex flex-col gap-5 py-10">
          <div className="flex flex-col gap-3">
            <p className="text-3xl">Our Terms & Conditions</p>
            <span className="text-md">
              Welcome to [Your Ecommerce Website] ("we," "our," or "us"). These
              Terms and Conditions govern your use of our website and services.
              By accessing or using our website, you agree to comply with and be
              bound by these terms. If you do not agree with these terms, please
              do not use our website.
            </span>
          </div>
          <div className="flex flex-col gap-10">
            {Points.map((val, i) => {
              return (
                <div>
                  <div className="flex items-center">
                    <div className="flex items-end">
                      <p className="text-xl">{i + 1}</p>
                      <p>{val.icon}</p>
                    </div>
                    <div className="text-xl font-semibold">{val.title}</div>
                  </div>
                  <div className="w-11/12 ">
                    <p>{val.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Termspoints;
