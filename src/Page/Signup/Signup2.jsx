import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { FaApple, FaArrowCircleLeft, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import * as Yup from "yup";
const schema = Yup.object().shape({
  email: Yup.string()
    // .email("Please enter your email")
    .required("Enter your Email or Phone Number"),
  password: Yup.number().required("Please! Enter Your Password"),
});
const Links = [
  {
    icon: <FcGoogle />,
    title: "Continue with Google",
  },
  {
    icon: <FaFacebook />,
    title: "Continue with Facebook",
  },
  {
    icon: <FaApple />,
    title: "Continue with Apple",
  },
];
const Signup2 = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log("values");
          console.log("actions");
        }}
      >
        {({ handleSubmit }) => {
          return (
            <Form onSubmit={{ handleSubmit }}>
              <div className=" w-10/12 mx-auto flex flex-col gap-5 py-5">
                <div className="flex justify-end items-center ">
                  <Link to="/">
                    <FaArrowCircleLeft className="text-4xl text-[#AD43AD]" />
                  </Link>
                </div>
                <div>
                  <h1 className="text-3xl text-[#AD43AD]">Nepse</h1>
                  <p className="text-[#0F060F] text-md">
                    Login to your account{" "}
                  </p>
                  <span className="text-[#A19BA1] text-xs">
                    Sign In for Exclusive Access and Benefits
                  </span>
                </div>
                <div className="border-[1px] border-[#A19BA1] py-5 rounded-lg">
                  <div className="w-full   ">
                    <div>
                      {Links.map((val, i) => {
                        return (
                          <div className="flex  justify-evenly items-center p-2 border-[1px] border-[#A19BA1] w-10/12 mx-auto mb-2 rounded-lg">
                            <div className="text-2xl">{val.icon}</div>
                            <div className="text-sm">{val.title}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 w-10/12 mx-auto py-5">
                    <div className="w-1/2 h-[1px] bg-[#A19BA1]"></div>
                    <div>Or</div>
                    <div className="w-1/2 h-[1px] bg-[#A19BA1]"></div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="grid gap-1 w-10/12 mx-auto">
                      <label htmlFor="email" className="text-sm ">
                        Email or Phone Number:
                      </label>
                      <Field
                        type="email"
                        name="email"
                        className="w-full h-10 rounded-xl pl-2 border-2 border-[#c1c1c1]"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="email"
                        component="div"
                      />
                    </div>
                    <div className="grid  gap-1 w-10/12 mx-auto">
                      <label htmlFor="password" className="text-sm">
                        Password:
                      </label>
                      <Field
                        type="password"
                        name="password"
                        className="w-full h-10 rounded-xl pl-2 border-2 border-[#c1c1c1]"
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name="password"
                        component="div"
                      />
                    </div>

                    <div className=" flex flex-col gap-1 mt-2 w-10/12 mx-auto">
                      <div>
                        <button
                          type="submit"
                          className="text-sm  w-full rounded-lg h-fit p-2 transition-all delay-100 duration-200
                  ease-in-out text-white font-semibold hover:bg-[#c657c6] bg-[#AD43AD]"
                        >
                          Login
                        </button>
                      </div>
                      <div className="flex gap-2 justify-between mt-2 w-full mx-auto ">
                        <div className="flex gap-2">
                          <input
                            type="checkbox"
                            name="check"
                            id="checks"
                            className="text-lg "
                            align="center"
                          />
                          <label className="text-sm  " for="checks">
                            Remember me
                          </label>
                        </div>
                        <div>
                          <p className="text-sm ">forget password?</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center text-xs px-12 font-bold mt-3">
                      <span>
                        Don't have any account?{" "}
                        <span className="text-[#9A0099]">Sign Up</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Signup2;
