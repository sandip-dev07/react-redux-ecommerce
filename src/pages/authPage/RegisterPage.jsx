import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const RegisterPage = () => {
  return (
<div className=" flex items-center justify-center w-full h-screen bg-[#f5f5f6] sm:bg-white">
        {/* auth card */}
        <div className=" flex  bg-white w-[50rem] h-[550px] rounded-xl shadow-lg sm:flex-col sm:h-[800px] sm:rounded-none py-3 sm:shadow-[0]">
        {/* left */}
        <div className="flex-1 flex items-center justify-center">
          <div className=" flex flex-col gap-8">
            <h3 className=" text-4xl font-semibold">Sign up</h3>
            <form action="submit" className=" flex flex-col gap-6">
              <div className=" flex items-center space-x-4 border-b-[1px] border-black py-2">
                <FaUserAlt />
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  id=""
                />
              </div>
              <div className=" flex items-center space-x-4 border-b-[1px] border-black py-2">
                <FaUserAlt />
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  id=""
                />
              </div>
              {/* <div className=" flex items-center py-2">
                <MdEmail />
                <input type="radio" name="email" placeholder="Email" id="" />
              </div> */}
              <div className=" flex items-center space-x-4 border-b-[1px] border-black py-2">
                <MdEmail />
                <input type="email" name="email" placeholder="Email" id="" />
              </div>
              <div className=" flex items-center space-x-4 border-b-[1px] border-black py-2">
                <FaLock />
                <input
                  type="password"
                  name="last-name"
                  placeholder="Password"
                  id=""
                />
              </div>
            </form>
            <button className=" bg-[#fd164c] w-full text-center py-2 px-4 text-white text-base rounded-md">
              Register
            </button>
            <div>
              {" "}
              <Link className=" text-sm hover:text-primary" to="/login">
                Already member? <span className=" text-[#fd164c]">Login</span>
              </Link>{" "}
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center justify-between gap-5 w-">
            <p className=" text-5xl font-semibold text-[#fd164c]"> Redux Store</p>
            <img
              src="https://i.postimg.cc/BZRNJ5tQ/Pngtree-shopping-on-mobile-5354478.png"
              alt=""
              className="w-[280px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
