import React from "react";
import { ImBooks } from "react-icons/im";
import { AiFillInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom/dist";

const Nav = () => {
  return (
    <div className="max-w-[1520px] h-[10%] ">
      <div className="w-full">
        <div className="flex justify-around py-3 px-2 bg-white">
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
            <button className="text-xl sm:text-sm text-white bg-black font-bold rounded-full px-2 py-1 hover:scale-105">
              <Link to="/login">Log In</Link>
            </button>
            <button className="text-xl sm:text-sm text-white px-2 py-1 bg-black font-bold rounded-full hover:scale-105">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
