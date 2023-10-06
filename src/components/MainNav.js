import React from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom/dist";

const TopNav = ({ setSearchTerm, onSearch }) => {
  return (
    <div className="max-w-[1520px] w-full z-10 fixed">
      <div className="flex justify-between items-center bg-[#2b2f46] p-3 shadow-lg">
        <div className="hidden gap-2 lg:flex md:flex">
          <ImBooks size={35} />
          <h2 className="text-2xl font-bold text-black">
            <Link to="/">Page Turners</Link>
          </h2>
        </div>
        <div className="flex gap-2 items-center sm:w-[60%] lg:w-[30%] md:w-[30%]">
          <AiOutlineSearch
            size={35}
            onClick={onSearch}
            className="cursor-pointer"
          />
          <input
            type="text"
            placeholder="Search. . . "
            className="focus:outline-none w-[100%] border border-slate-800 rounded-full px-2 py-1"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineShoppingCart
            size={35}
            className="hidden lg:block md:block"
          />
          <button className="text-xl text-white px-2 py-1 bg-black font-bold rounded-full hover:scale-105">
            <Link to="/cart">Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
