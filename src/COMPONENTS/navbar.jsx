import React from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { GiZeppelin } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router";

function navbar() {
  return (
    <nav className="bg-red w-full border-blue-700 h-[57px] flex justify-center items-center bg-[#242424] absolute left-0 top-0">
      <div className="w-full py-3 relative mx-3 max-w-[1280px] ">
        <h1 className="flex font-bold rounded-xl text-black gap-1 items-center">
          <Link
            to="/"
            className="overflow-hidden text-blue-600 p-1 font-bold ml-1 bg-gray-200 rounded-full"
          >
            <GiZeppelin size={27} />
          </Link>
        </h1>
        <div className="flex absolute h-[57px] top-[1px] right-0">
          <button className="px-6 hover:bg-blue-100 font-bold  hover:text-blue-600 hover:border-b-blue-600">
            <PiShoppingCartBold size={21}></PiShoppingCartBold>
          </button>
          <button className="px-6 hover:bg-blue-100 font-bold  hover:text-blue-600 hover:border-b-blue-600">
            <FaRegUser size={18}></FaRegUser>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
