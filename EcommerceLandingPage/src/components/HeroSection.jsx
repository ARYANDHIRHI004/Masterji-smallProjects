import { Search, SearchIcon } from "lucide-react";
import React from "react";
import Swipper from "./Swipper";
import heroSectionImages from "../assets/heroSectionImages.png";
import Items from "./Items";
import HorizontalCards from "./HorizontalCards";

const HeroSection = () => {
  return (
    <div className="h-screen bg-linear-to-b from-primary to-transparent flex flex-col justify-center items-center">
      <div className="mt-5 w-full flex items-center ">
        <div className="flex items-center bg-white w-[50%] rounded-full  m-auto px-2">
          <input type="text" className=" focus:outline-none w-full m-auto p-3 rounded-full" placeholder="Search for your favorite items"  />
          <button className="bg-primary px-8 py-1 rounded-full"><SearchIcon width={12} color="white"/></button>
        </div>
      </div>
      <div className=" w-[90%] flex justify-between items-center h-[80%] p-5 m-auto ">
        <div className="h-full w-[50%] m-2 flex items-center justify-center">
          <div className="font-primary text-7xl xl:text-[110px]">
            <h1>Fashion and</h1>
            <h1 className="text-primary">Trend</h1>
          </div>
        </div>
        <div className="h-full w-[50%] m-2 hidden lg:flex  ">
          <img className="0 absolute bottom-30 xl:h-[70%]" src={heroSectionImages} alt="" />
        </div>
        
      </div>
      {/* <Swipper/> */}
      <Items />
    </div>
  );
};

export default HeroSection;
