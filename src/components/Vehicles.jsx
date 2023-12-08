import { kia, ertiga, tata, celerio, swift } from "../utils/constants";

const Vehicles = () => {
  return (
    <div className=" max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All Available Vehicles</h1>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="hover:animate-pulse w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={kia}
          alt="/"
        />
        <img
          className="hover:animate-pulse w-full h-full object-cover"
          src={ertiga}
          alt="/"
        />
        <img
          className="hover:animate-pulse w-full h-full object-cover"
          src={tata}
          alt="/"
        />
        <img
          className="hover:animate-pulse w-full h-full object-cover"
          src={celerio}
          alt="/"
        />
        <img
          className="hover:animate-pulse w-full h-full object-cover"
          src={swift}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Vehicles;
