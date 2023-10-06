import React from "react";
import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom/dist";

const CartNav = () => {
  return (
    <div className="max-w-[1520px] fixed w-full z-20">
      <div className="w-full bg-[#2b2f46] flex justify-center px-3 py-3 shadow-lg">
        <div className="flex gap-5 ">
          <ImBooks size={35} />
          <h2 className="text-2xl font-bold text-black">
            <Link to="/main">Page Turners</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CartNav;
