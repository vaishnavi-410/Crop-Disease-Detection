import React from "react";
import { FiSearch } from "react-icons/fi"; // Make sure you installed react-icons
import Logo from "./Logo"; // your existing logo component

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo and Name */}
      <div className="flex items-center gap-2">
        <Logo />
        <h1 className="text-xl font-bold">Agriमित्र</h1>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </header>
  );
};

export default Header;
