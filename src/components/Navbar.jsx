import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="animate-pulse flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        {/* <img className=" relative w-44 h-30" alt="logo" src={logo2} /> */}
        <h1>Purvi Tours & Travels</h1>
      </div>
      <ul className="hidden md:flex pr-8">
        <li className="px-8">Home</li>
        <li className="px-8">About</li>
        <li className="px-8">Testimonials</li>
        <li className="px-8">Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100 text-center px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>Purvi Tours & Travels</h1>
          <li className="border-b">Home</li>
          <li className="border-b">About</li>
          <li className="border-b">Testimonials</li>
          <li className="border-b">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
