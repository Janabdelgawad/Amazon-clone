import { useState } from "react";
import { Icon } from "react-icons-kit";
import { mapMarker } from "react-icons-kit/fa/mapMarker";
import { caretDown } from "react-icons-kit/fa/caretDown";
import { shoppingCart } from "react-icons-kit/fa/shoppingCart";
import { search } from "react-icons-kit/fa/search";
import { logo } from "../../assets/index";
import HeaderBottom from "./HeaderBottom";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const [showAll, setShowAll] = useState(false);
  const cart = useSelector(state=>state.cart)
  const categories = [
    "Men's clothing",
    "Women's clothing",
    "Jewelry",
    "Electronics",
  ];

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/* ============ Image Start here ================ */}
        <Link to="/">
          <div className="headerHover hidden md:inline-block">
            <img className="w-24 mt-2" src={logo} alt="logo" />
          </div>
        </Link>
        {/* ============ Image End here ================== */}
        {/* ============ Deliver Start here ============== */}
        <div className="headerHover hidden mdl:inline-block">
          <Icon size={25} icon={mapMarker} />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Egypt
            </span>
          </p>
        </div>
        {/* ============ Deliver End here ================ */}
        {/* ============ Search Start here =============== */}
        <div className="h-10 rounded-md flex flex-shrink mdl:flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All <span></span>
            <Icon size={15} icon={caretDown} />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-fit top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                {categories.map((item) => (
                  <li className="text-sm font-titleFont border-b-[1px] border-b-transparent hover:bg-gray-800 hover:text-white  cursor-pointer duration-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <Icon size={28} icon={search} />
          </span>
        </div>
        {/* ============ Search End here ================= */}
        {/* ============ Signin Start here =============== */}

        <Link to={"/Signin"}>
          <div className="flex flex-col items-start justify-center headerHover hidden sml:inline-block">
            <p className="text-xs text-lightText font-light">Hello, sign in</p>
            <p className="text-sm font-semibold -mt-1 text-whiteText">
              Accounts & Lists{" "}
              <span>
                <Icon size={15} icon={caretDown} />
              </span>
            </p>
          </div>
        </Link>
        {/* ============ Signin End here ================= */}
        {/* ============ Orders Start here =============== */}
        <div className="flex flex-col items-start justify-center headerHover hidden mdl:inline-block">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* ============ Orders End here ================= */}
        {/* ============ Cart Start here ================= */}
        <Link to="/Cart">
          <div className="flex items-start justify-center headerHover relative hidden sm:inline-block">
            <Icon size={25} icon={shoppingCart} />
            <p className="text-xs font-semibold mt-3 text-whiteText">
              Cart{" "}
              <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {cart.length}
              </span>
            </p>
          </div>
        </Link>
        {/* ============ Cart End here =================== */}
      </div>
      <HeaderBottom />
    </div>
  );
}

export default Header;
