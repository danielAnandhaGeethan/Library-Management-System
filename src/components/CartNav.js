import React from "react";
import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom/dist";

const CartNav = () => {
  return (
    <div className="max-w-[1520px] fixed w-full z-20">
      <div
        className="w-full flex justify-center px-3 py-3 shadow-lg"
        style={{ background: "linear-gradient(135deg, #2b2f46, #f7f7f7)" }}
      >
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
