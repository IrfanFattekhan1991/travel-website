import React from "react";
import car3 from "../assets/car3.jpg";

const Home = () => {
  return (
    <div className=" w-full h-screen relative">
      <img className="w-full h-full object-cover" src={car3} />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className=" absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="font-bold text-4xl py-4 text-white ">
          Purvi Tours & Travels
        </h1>
        <h3 className="font-bold text-white pb-4">Assured Travel Safety</h3>
      </div>
    </div>
  );
};

export default Home;
