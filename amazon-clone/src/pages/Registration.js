import React from "react";
import { darkLogo } from "../assets";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10 ">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <img src={darkLogo} alt="dark logo" className=" w-32  " />

          <div className="all w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4 ">
              Create Account
            </h2>
            <div className="smallbox1 flex flex-col gap-2">
              <p className="text-sm font-medium">your Name</p>
              <input
                type="text"
                className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]  focus-within:shadow-amazonInput duration-100"
              />
            </div>

            <div className="bigbox flex flex-col gap-3">
              <div className="smallbox2 flex flex-col gap-2">
                <p className="text-sm font-medium">
                  email or mopile phone number
                </p>
                <input
                  type="email"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]  focus-within:shadow-amazonInput duration-100"
                />
              </div>

              <div className="smallbox3 flex flex-col gap-2">
                <p className="text-sm font-medium">password</p>
                <input
                  type="password"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]  focus-within:shadow-amazonInput duration-100"
                />
              </div>

              <div className="smallbox4 flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter password</p>
                <input
                  type="password"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600]  focus-within:shadow-amazonInput duration-100"
                />
              </div>

              <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
                password must be at least 6 characters.
              </p>

              <button
                className=" w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800  "
                onClick={(e) => e.preventDefault()}
              >
                continue
              </button>

              <p className="text-xs text-black leading-4 mt-4">
                by cearating an account ,you agree to amazon's{" "}
                <span className="text-blue-600">conditions of use </span> and{" "}
                <span className="text-blue-600"> Privace Notice</span>
              </p>

              <p className="text-xs text-black leading-4 mt-4">
                Already have an account ?
                <Link to="/Signin">
                  <span className="text-blue-600 hover:text-purple-900">
                    Signin
                  </span>
                </Link>{" "}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registration;
