import React from "react";
import { logo } from "../assets/img";

const Header = ({ user }) => {
  return (
    <header className="w-full px-4 py-2 flex justify-between bg-white shadow-md border-b border-gray-400">
      <div className="flex items-center gap-12">
        <a href="/" className="flex items-center gap-4">
          <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
          <h2>Athea Beauty</h2>
        </a>
        <label
          htmlFor="search"
          id="search-box"
          className="flex items-center gap-3 py-1.5 pl-3 pr-2 rounded-md cursor-text border border-gray-400"
        >
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Cari sesuatu..."
            autoComplete="off"
            className="w-64 text-gray-800 bg-inherit text-base focus:outline-none peer/search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="w-5 h-5 stroke-gray-500 cursor-text peer-focus/search:stroke-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </label>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gray-500" />
        <h4>{user.role}</h4>
      </div>
    </header>
  );
};

export default Header;
