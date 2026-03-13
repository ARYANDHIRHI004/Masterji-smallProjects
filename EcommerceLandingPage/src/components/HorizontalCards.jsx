import React from "react";
import Button from "./Button";

const HorizontalCards = ({ image, content, tagLine }) => {
  return (
    <div className="flex-1 min-w-70  bg-card rounded-2xl p-3 ">
      <div className="flex h-50 items-center">
        <img src={image} alt="" className="w-[35%]" />
        <div>
          <h1 className="text-4xl font-semibold">{content}</h1>
          <h1 className="text-xl font-semibold">{tagLine}</h1>
          <div className="w-30 mt-3 ">
            <Button button={{ name: "Shop Now" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards;
