import React from "react";
import fridge from "../assets/fridge.png";
import earPods from "../assets/earPods.png";
import shoes from "../assets/shoes.png";

const products = [
  {
    title: "Home Appliances",
    price: "₹10,000/-",
    img: fridge,
    span: "row-span-2",
  },
  {
    title: "Ear pods",
    price: "₹700/-",
    img: earPods,
  },
  {
    title: "Wedding Cloths",
    price: "₹25,000/-",
    img: "",
  },
  {
    title: "Laptop",
    price: "₹70,000/-",
    img: "",
  },
  {
    title: "Shoes",
    price: "₹1,200/-",
    img: shoes,
  },
];

export default function BentoGrid() {
  return (
    <div className="min-h-screen p-8 flex justify-center">
      <div className="grid grid-cols-3 grid-rows-2 gap-6 max-w-[70%] w-full">

        {products.map((product, index) => (
          <div
            key={index}
            className={`bg-card rounded-2xl shadow-md p-10 flex flex-col justify-between ${product.span || ""}`}
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full  object-contain"
            />

            <div className="mt-4">
              <h3 className="text-gray-700 text-2xl font-secondary font-semibold">{product.title}</h3>

              <div className="flex items-center justify-between mt-2 text-2xl font-secondary">
                <p className="text-primary font-semibold">{product.price}</p>

                <div className="text-pink-500 text-2xl">
                  ★★★★★
                </div>
              </div>

              <button className="mt-4 w-full bg-primary text-white py-2 rounded-full hover:bg-pink-700 transition">
                Buy Now →
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}