import React from "react";
import { ImBooks } from "react-icons/im";
import { AiFillInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom/dist";

const Nav = () => {
  return (
    <div className="max-w-[1520px] h-[10%] w-full fixed z-20">
      <div className="w-full">
        <div className="flex justify-between w-full py-3 px-10 bg-[#2b2f46] shadow-lg">
          <div className="flex gap-3">
            <AiFillInfoCircle size={35} className="hidden md:block lg:block" />
            <button className="text-xl text-white bg-black font-bold rounded-full px-2 py-1 hover:scale-105">
              <Link to="/">About</Link>
            </button>
          </div>
          <div className="flex gap-5">
            <ImBooks size={35} className="hidden md:block lg:block" />
            <h2 className="text-2xl font-bold text-black">
              <Link to="/">Page Turners</Link>
            </h2>
          </div>
          <div className="flex gap-3">
            <button className="text-sm sm:text-xl text-white bg-black font-bold rounded-full px-2 py-1 hover:scale-105">
              <Link to="/login">Log In</Link>
            </button>
            <button className="text-sm sm:text-xl text-white px-2 py-1 bg-black font-bold rounded-full hover:scale-105">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
