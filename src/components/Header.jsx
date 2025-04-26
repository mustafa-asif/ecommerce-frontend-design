import React from 'react';
import logo from '../assets/Images/logo/logo.svg';
import {
  UserIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  ShoppingCartIcon,
  Bars3Icon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid';

const icons = [
  { Icons: UserIcon, label: 'Profile' },
  { Icons: ChatBubbleLeftRightIcon, label: 'Chat' },
  { Icons: HeartIcon, label: 'Favorites' },
  { Icons: ShoppingCartIcon, label: 'Cart' },
];

const Header = () => {
  return (
    <header className="shadow ">
      {/* === TOP NAV === */}
      <nav className="flex flex-col md:flex-row justify-between items-center bg-white py-4 px-4 md:px-10 gap-4 md:gap-0">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="logo" className="w-28" />
        </div>

        {/* Search */}
        <div className="w-full md:max-w-xl">
          <div className="flex items-center border-2 border-blue-500 rounded overflow-hidden">
            <input
              className="w-full border-r-1 border-r-blue-500 px-4 py-2 text-sm outline-none"
              type="text"
              placeholder="Search"
            />
            <select className=" px-3 text-sm outline-none text-gray-600 hidden sm:block">
              <option>All categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home</option>
            </select>
            <button className="bg-blue-500 text-white px-6 py-2 text-sm hover:bg-blue-600 transition">
              Search
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className=" md:flex items-center space-x-6">
          {icons.map(({ Icons, label }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-sm text-gray-500 hover:text-blue-500 transition"
            >
              <Icons className="w-5 h-5 mb-1" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </nav>

      {/* === SECONDARY NAV === */}
      <div className="hidden md:flex justify-between items-center bg-white px-4 md:px-10 py-3 text-sm text-gray-600">
        {/* Left menu */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-1 hover:text-blue-600 transition">
            <Bars3Icon className="w-5 h-5" />
            <span>All category</span>
          </button>
          <a href="#" className="hover:text-blue-600 transition">
            Hot offers
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Gift boxes
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Menu item
          </a>
          <button className="flex items-center space-x-1 hover:text-blue-600 transition">
            <span>Help</span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-1 hover:text-blue-600 transition">
            <span>English, USD</span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-600 transition">
            <span>Ship to</span>
            <img
              src="https://flagcdn.com/w40/de.png"
              alt="Germany"
              className="w-5 h-3 rounded-sm"
            />
            <ChevronDownIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
