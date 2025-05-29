import React, { useState } from "react";
import { NavbarMenu } from "../mockdata/data";
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md z-50 relative">
      <div className="container mx-auto flex justify-between items-center py-6 px-4">
        {/* LOGO */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <FaDumbbell />
          <p>Coders</p>
          <p className="text-secondary">Gym</p>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block py-1 px-3 hover:text-primary font-semibold"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-4">
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <CiSearch />
          </button>
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <PiShoppingCartThin />
          </button>
          <button className="hidden md:block hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200">
            Login
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <MdMenu className="text-4xl cursor-pointer" />
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
