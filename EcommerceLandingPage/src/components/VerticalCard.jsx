import React from "react";
import Button from "./Button";
import {
  Star,
  StarHalf,
  StarIcon,
  StarOff,
  StarOffIcon,
  Stars,
} from "lucide-react";

const VerticalCard = ({ image, content, Price }) => {
  return (
    <div className=" flex-4 min-w-60  m-auto bg-card rounded-2xl px-3 py-5 ">
      <div className="flex flex-col min-h-100 items-center justify-around font-secondary">
        <img src={image} alt="" className="w-full" />
        <div className="flex flex-col gap-2 ">
          <h1 className="text-2xl text-[#3D3D3D] font-semibold">{content}</h1>
          <div className="flex gap-3 ">
            <div>
              <h1 className="text-2xl font-bold text-primary mb-2 ">{Price}</h1>
              <div className="flex gap-1">
                <Star size={15} />
                <Star size={15} />
                <Star size={15} />
                <Star size={15} />
                <Star size={15} />
              </div>
            </div>
            <div>
              <Button button={{ name: "Shop Now" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
