import React from "react";
import { darkLogo } from "../assets";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-9">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <img src={darkLogo} alt="dark logo" className=" w-32  " />

          <div className="all w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4 ">
              Signin
            </h2>

            <div className="bigbox flex flex-col gap-3">
              <div className="smallbox1 flex flex-col gap-2">
                <p className="text-sm font-medium">
                  email or mopile phone number
                </p>
                <input
                  type="email"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]  focus-within:shadow-amazonInput duration-100"
                />
              </div>

              <div className="smallbox2 flex flex-col gap-2">
                <p className="text-sm font-medium">password</p>
                <input
                  type="password"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]  focus-within:shadow-amazonInput duration-100"
                />
              </div>

              <button
                className=" w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800  "
                onClick={(e) => e.preventDefault()}
              >
                continue
              </button>
            </div>

            <p className="text-xs text-black leading-4 mt-4">
              continuing ,you agree to amazon's{" "}
              <span className="text-blue-600">conditions of use </span> and{" "}
              <span className="text-blue-600"> Privace Notice</span>
            </p>
            <p className="text-xs mt-4 cursor-pointer hover:text-orange-700">
              Need help?
            </p>
          </div>

          <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex "></span>
            <span className="w-1/3 text-center">New to Amazon?</span>
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex "></span>
          </p>

          <Link to="/Registration" className="w-full">
            <button className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput ">
              create your Amazon account
            </button>
          </Link>
        </form>
      </div>

      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex  flex-col  items-center  gap-4 justify-center py-10">
        <div className="flex items-center gap-6 ">
          <p className="text-xs text-blue-800 hover:text-orange-700  cursor-pointer">
            conditions of use
          </p>
          <p className="text-xs text-blue-800 hover:text-orange-700  cursor-pointer">
            Privacy Notice
          </p>
          <p className="text-xs text-blue-800 hover:text-orange-700  cursor-pointer">
            Privacy Notice
          </p>
        </div>
        <p className="text-xs text-gray-600 ">
          {" "}
          1996-2023, reacted.com, inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Signin;
