import React from "react";
import VerticalCard from "../components/VerticalCard";
import smartWatch from "../assets/smartWatch.png";

const AllItems = () => {

  const items=[
    {
      image:smartWatch,
      content:"Apple's Products",
      Price:"₹10,000/-"
    },
    {
      image:smartWatch,
      content:"Apple's Products",
      Price:"₹10,000/-"
    },
    {
      image:smartWatch,
      content:"Apple's Products",
      Price:"₹10,000/-"
    },
    {
      image:smartWatch,
      content:"Apple's Products",
      Price:"₹10,000/-"
    },
    {
      image:smartWatch,
      content:"Apple's Products",
      Price:"₹10,000/-"
    },
  ] 
  
  return (
    <div className="  bg-primary">
      <div className="w-[80%] flex flex-wrap m-auto gap-6  mt-10 py-30 ">
       {
        items.map((item,index)=>(
          <VerticalCard image={item.image} content={item.content} Price={item.Price} />
        ))
       }
       
      </div>
    </div>
  );
};

export default AllItems;
