"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "プロフィール", to: "profile" },
    { name: "制作実績", to: "works" },
    { name: "強み", to: "strength" },
    { name: "経歴", to: "timeline" },
    { name: "お問い合わせ", to: "contact" },
  ];

  return (
    <header className="fixed w-full bg-white border-b-4 border-double border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="top"
            smooth={true}
            duration={500}
            className="cursor-pointer h-full py-2"
          >
            <img
              src="icons/headerImg.png"
              alt="ノンのポートフォリオサイト"
              className="h-full w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-cyan-500 transition-colors cursor-pointer font-bold"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-cyan-500"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-gray-600 hover:text-cyan-500 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
