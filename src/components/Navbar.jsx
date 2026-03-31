import { useState } from "react";
import { close, parthmittal, menu } from "../assets";
import { navLinks } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
<nav className="fixed top-0 left-0 right-0 z-50  bg-opacity-90 backdrop-blur-md shadow-md">

  <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-9 py-3">

    {/* Logo */}
    <a href="#home" className="flex items-center">
      <img
        src={parthmittal}
        alt="Akshat Shukla"
        className="w-[55px] h-[55px] sm:w-[45px] sm:h-[45px]  object-cover rounded-full border-2 border-blue-400 shadow-md hover:scale-105 transition duration-100"
      />
    </a>

    {/* Desktop Nav */}
    <ul className="list-none sm:flex hidden justify-end items-center flex-1 ml-10">
      {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[15px] sm:text-[16px]
          ${index === navLinks.length - 1 ? "mr-0" : "mr-8"}
          text-white relative group transition duration-300`}
          onClick={() => scrollToSection(nav.id)}
        >
          {nav.title}

          {/* Blue Hover Underline Effect */}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </li>
      ))}
    </ul>

    {/* Mobile Menu */}
    <div className="sm:hidden flex flex-1 justify-end items-center">

      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[26px] h-[26px] object-contain cursor-pointer"
        onClick={() => setToggle((prev) => !prev)}
      />

      {/* Dropdown */}
      <div
        className={`${toggle ? "flex" : "hidden"} flex-col items-center 
        p-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950
        absolute top-16 right-4 
        min-w-[160px] rounded-xl shadow-lg animate-fadeIn`}
      >
        <ul className="list-none flex flex-col justify-center items-center gap-4 w-full">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-poppins font-normal cursor-pointer text-[15px] text-white hover:text-blue-300 transition duration-200"
              onClick={() => {
                scrollToSection(nav.id);
                setToggle(false);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>

    </div>

  </div>
</nav>
  );
};

export default Navbar;
