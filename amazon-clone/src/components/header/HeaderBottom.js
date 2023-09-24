import React, { useEffect, useRef, useState } from "react";
import { Icon } from "react-icons-kit";
import { bars } from "react-icons-kit/fa/bars";
import { motion } from "framer-motion";
import { close } from "react-icons-kit/fa/close";
import { userCircleO } from "react-icons-kit/fa/userCircleO";
import SideNavContent from "./SideNavContent";
import { Link } from "react-router-dom";
import About from "../../pages/About";

const HeaderBottom = () => {
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  }, [ref, sidebar]);

  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      {/* ============ ListItems Start here ============ */}
      <ul
        className=" items-center gap-2 text-sm tracking-wide font-titleFont border-b-[1px]
        border-b-transparent hover:bg-gray-800 hover:text-white cursor-pointer
        duration-200 md:flex md:flex-row"
      >
        <ul>
          <li
            onClick={() => setSidebar(true)}
            className="headerHover flex items-center headerHover "
          >
            <Icon size={20} icon={bars} />
            All
          </li>
        </ul>
        <ul className=" hidden md:flex md:flex-row">
          <li className="headerHover ">
            <Link to={"/AboutAmazon"}>About amazon</Link>
          </li>
          <li className="headerHover ">
            <Link>Men's clothing</Link>
          </li>
          <li className="headerHover ">
            <Link>Women's clothing</Link>
          </li>
          <li className="headerHover ">
            <Link>Jewelry</Link>
          </li>
          <li className="headerHover ">
            <Link>Electronics</Link>
          </li>
          <li className="headerHover ">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </ul>
      {/* ============ ListItems End here ============== */}
      {/* ============ sideNav Start here ============== */}
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[350px] h-full bg-white border border-black"
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                <Icon size={25} icon={userCircleO} />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
              <span
                onClick={() => setSidebar(false)}
                className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-white flex items-center justify-center border-none bg-transparent hover:shadow-md duration-300"
              >
                <Icon size={20} icon={close} />
              </span>
            </motion.div>
          </div>
        </div>
      )}
      {/* ============ sideNav End here ================ */}
    </div>
  );
};

export default HeaderBottom;
