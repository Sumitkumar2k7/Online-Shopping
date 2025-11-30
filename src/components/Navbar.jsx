import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Online Store</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-blue-600 transition duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle button */}
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white shadow-md py-4 px-6 space-y-4 text-lg font-medium">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setOpen(false)}
                className="block hover:text-blue-600 transition duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
