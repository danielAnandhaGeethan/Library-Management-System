import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMobile, AiFillFacebook } from "react-icons/ai";
import HomeNav from "./HomeNav";
import { Link } from "react-router-dom/dist";
import signup from "../images/login.jpg";

const SignUp = () => {
  return (
    <div className="max-w-[1520px] w-full flex flex-col">
      <HomeNav />
      <div
        className="max-w-[1520px] w-full min-h-screen flex justify-center items-center bg-black bg-opacity-50 bg-center bg-cover"
        style={{ backgroundImage: `url(${signup})` }}
      >
        <div className="bg-[#ffffff] shadow-2xl z-10 min-w-[300px] max-w-[350px] h-[98%] flex flex-col justify-between items-center rounded-lg py-5 opacity-[85%]">
          <div>
            <h2 className="font-bold text-[#3f8880] text-3xl text-center">
              Enter into the world of learning
            </h2>
          </div>
          <div className="w-full">
            <form
              action=""
              className="py-5 w-full px-10 flex flex-col gap-4 justify-center items-center"
            >
              <input
                type="text"
                placeholder="Username/Email"
                className="w-[90%] focus:outline-none px-3 py-3 rounded-full  border border-slate-800"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-[90%] focus:outline-none px-3 py-3 rounded-full  border border-slate-800"
              />
              <button className="text-lg w-[50%] py-3 px-3 rounded-full font-bold bg-green-300 mt-[6%] hover:scale-105">
                <Link to="/main">Sign Up</Link>
              </button>
            </form>
          </div>
          <div className="w-full flex justify-center items-center flex-col gap-2">
            <button className="flex gap-2 p-2 justify-center items-center bg-[#2d307b] w-[70%] text-white font-bold">
              <AiFillFacebook size={25} />
              <span>SignUp with Facebook</span>
            </button>
            <button className="flex gap-2 p-2 justify-center items-center bg-[#1b58bb] w-[70%] text-white font-bold">
              <FcGoogle size={25} />
              <span>SignUp with Google</span>
            </button>

            <button className="flex gap-2 p-2 justify-center items-center bg-[#171717] w-[70%] text-white font-bold">
              <AiOutlineMobile size={25} />
              <span>SignUp with Mobile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
