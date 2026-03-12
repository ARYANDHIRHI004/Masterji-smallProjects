import { Search, SearchIcon } from "lucide-react";
import React from "react";
import Swipper from "./Swipper";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

const HeroSection = () => {
  return (
    <div className="h-screen bg-linear-to-b from-primary to-transparent flex flex-col justify-center items-center">
      <div className="mt-5 w-full flex items-center ">
        <div className="flex items-center bg-white w-[50%] rounded-full  m-auto px-2">
          <input type="text" className=" focus:outline-none w-full m-auto p-3 rounded-full" placeholder="Search for your favorite items"  />
          <button className="bg-primary px-8 py-1 rounded-full"><SearchIcon width={12} color="white"/></button>
        </div>
      </div>
      <div className="w-[90%] flex justify-between items-center h-[80%] p-5 m-auto ">
        <div className="h-full w-[50%] m-2 flex items-center justify-center">
          <div className="font-primary text-9xl">
            <h1>Fashion and</h1>
            <h1 className="text-primary">Trend</h1>
          </div>
        </div>
        <div className="h-full w-[50%] m-2 flex  ">
          <img className="0 absolute h-[70%] bottom-0" height={10} src={image1} alt="" />
          <img height={10} className=" absolute h-[85%] bottom-0 right-50 scale-x-[-1] transform" src={image2} alt="" />
        </div>
      </div>
      {/* <Swipper/> */}
    </div>
  );
};

export default HeroSection;
