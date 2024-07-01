import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { elemetIdConst } from "../../App";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItemsObj = [
    {
      label: "Pricing",
      id: elemetIdConst.PRICING,
    },
    {
      label: "Products",
      id: elemetIdConst.ABOUT,
    },
    {
      label: "Contact",
      id: elemetIdConst.CONTACT,
    },
  ];

  const scrollToView = (elementId) => {
    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-between items-center h-12 pt-4 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Acme.</h1>
      <ul className="hidden md:flex">
        {navItemsObj.map((item) => (
          <li
            onClick={() => scrollToView(item.id)}
            className="p-4 cursor-pointer"
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-800 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Acme.</h1>
        {navItemsObj.map((item) => (
          <li
            onClick={() => scrollToView(item.id)}
            className="p-4 border-b border-gray-600"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
