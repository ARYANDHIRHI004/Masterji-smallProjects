import React from "react";

const FooterSection = () => {
  const navLinks = [
    { name: "Home", link: "#" },
    { name: "Shop", link: "#" },
    { name: "Cart", link: "#" },
    { name: "About", link: "#" },
    { name: "Contact Us", link: "#" },
  ];
  return (
    <div className="bg-linear-to-b from-primary to-[#3C0015] h-[60vh]">
      <div className=" flex justify-center ">
        <h1 className=" absolute font-primary text-[17vw] blur-md text-[#ffffff17]">
          Fashion
        </h1>
      </div>
      <div className="flex justify-between m-30 ">
      <h1 className="text-5xl font-primary text-white">Trandies.com</h1>
      <ul className="gap-3 text-xl font-semibold  flex flex-col text-white w-50">
        {navLinks.map((link, index) => (
          <li className="hover:translate-y-[-3px] transition-all delay-75 relative" key={index}>
            <a className="hover:text-[#ffb7df] transition-colors delay-100  hover:text-shadow-2xs text-primary-sky-300 " href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default FooterSection;
