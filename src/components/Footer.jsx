import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-6">
      <div className="max-w-[1240px] mx-auto flex flex-col ">
        <div className="sm:flex text-center justify-between items-center">
          <div className="flex flex-col md:items-start">
            <h2>Purvi Tours & Travels</h2>
            <p className=" py-4">
              All rights reserved by
              <span className="text-sky-500 "> Purvi Tours & Travels. </span>
              Copyright &copy;
              {new Date().getFullYear()}
            </p>
          </div>
          <div className="px-4 flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />

            <FaYoutube className="icon" />

            <FaInstagram className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
