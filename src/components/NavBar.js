import React, { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    /* navbar config */
    <div className="navbar bg-black justify-between">
      <div className="flex content-right">
        <a className="btn btn-ghost normal-case text-xl">MPK</a>
      </div>
      <div className="flex sm:justify-end">
        {" "}
        {/* nav items being triggered depended on state */}
        <ul
          className={`fixed inset-0 flex flex-col justify-center items-center text-white text-xl 
          bg-black z-50 transition-all ease-in-out duration-500 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <li className="btn btn-ghost normal-case text-xl m-8">Om oss</li>
          <li className="btn btn-ghost normal-case text-xl m-8">Bli Medlem</li>
          <li className="btn btn-outline m-8">Kontakt</li>
        </ul>
        {/* Circle button for closing */}
        <button onClick={toggleOpen} className={`btn btn-circle z-50 ${
            open ? "" : "hidden"
          }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* hamburger menu button */}
        <button
          onClick={toggleOpen}
          className={`btn btn-square btn-ghost sm:hidden flex ${
            open ? "hidden" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
