import React from "react";
import HorizontalCards from "../components/HorizontalCards";
import cloths from "../assets/cloths.png";
import earPods from "../assets/earPods.png";

const Items = () => {

  const itemList = [
    {
      image: cloths,
      content: "Save upto 50% On Cloths",
      tagLine: ""
    },
    {
      image: earPods,
      content: "Fisher AirPods",
      tagLine: "Free Delivery on order of ₹1000"
    },
    {
      image: earPods,
      content: "Smart Watches",
      tagLine: "Free Delivery on order of ₹1000"
    },
  ]

  return (
    <div>
      <div className="flex flex-wrap w-[80%] m-auto gap-5 mt-10">
        {itemList.map((item, index) => (
          <HorizontalCards image={item.image} content={item.content} tagLine={item.tagLine} />
        ))}
      </div>
    </div>
  );
};

export default Items;
