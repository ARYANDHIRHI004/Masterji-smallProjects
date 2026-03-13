import React from "react";
import VerticalCard from "../components/VerticalCard";

const AllItems = () => {
  return (
    <div className="  bg-primary">
      <div className="w-[80%] flex flex-wrap m-auto gap-6 lg:gap-10 mt-10 py-30 ">
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
      </div>
    </div>
  );
};

export default AllItems;
