"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Highlights", href: "#highlights" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <motion.h1
          className="text-2xl md:text-3xl font-heading font-extrabold text-white tracking-wide cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#hero">
            Vyom<span className="text-orange-500">Garud</span>
          </a>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white font-sans text-lg">
          {menuItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              className="hover:text-orange-500 transition cursor-pointer"
            >
              <a href={item.href}>{item.name}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          className="md:hidden bg-black/90 backdrop-blur-lg border-t border-gray-800"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
        >
          <ul className="flex flex-col space-y-6 px-6 py-6 text-white text-lg font-sans">
            {menuItems.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                className="hover:text-orange-500 cursor-pointer"
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
