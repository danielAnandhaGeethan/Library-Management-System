import React from "react";
import CartNav from "./CartNav";
import CartBody from "./CartBody";

const Cart = ({ data, setData }) => {
  return (
    <div className="max-w-[1520px] w-full h-screen">
      <CartNav />
      <CartBody data={data} setData={setData} />
    </div>
  );
};

export default Cart;
