import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="opacity-75 py-2 md:py-4 px-5">
      <nav className="h-1 flex justify-between border-b border-slate-200 max-w-[1440px] mx-auto items-center">
        <div className="logo">
          <a href="/" className="font-bold text-pretty text-2xl text-white">
            Naol <span className="font-thin">.W</span>
          </a>
        </div>
        {/* <div className="menu-container">
          <ul className="flex gap-10">
            <li>
              <Link
                to="/about"
                className="text-white font-light px-3 py-2 rounded-md text-base hover:text-lightGreen1 text-sh transition duration-500"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white font-light px-3 py-2 rounded-md text-base hover:text-lightGreen1 text-sh transition duration-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white font-light px-3 py-2 rounded-md text-base hover:text-lightGreen1 text-sh transition duration-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
