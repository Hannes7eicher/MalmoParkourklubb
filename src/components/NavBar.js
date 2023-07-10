import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar(route) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    /* NavBar Icon */
    <div className="navbar bg-black justify-between fixed z-50 w-full bg-gray-950">
      <div className="flex content-right">
        <a
          onClick={() => navigate("/")}
          className="btn btn-ghost normal-case text-xl"
        >
          MPK
        </a>
      </div>
      <div className="flex sm:justify-end">
        {/* Desktop Navbar Icons */}
        <div className="sm:flex hidden">
          <ul>
            <li
              onClick={() => {
                navigate("/About");
              }}
              className="btn btn-ghost normal-case text-xl mx-8"
            >
              Om oss
            </li>

            <li
              onClick={() => {
                navigate("/Membership");
              }}
              className="btn btn-ghost normal-case text-xl mx-8"
            >
              Bli Medlem
            </li>
            <li
              onClick={() => {
                navigate("/About");
              }}
              className="btn btn-outline mx-8"
            >
              Kontakt
            </li>
          </ul>
        </div>

        {/* Mobile Navbar Icons */}

        <ul
          className={`fixed inset-0 flex flex-col justify-center items-center text-white text-xl 
          bg-black z-50 transition-all ease-in-out duration-500 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <li
            onClick={() => {
              toggleOpen();
              navigate("/About");
            }}
            className="btn btn-ghost normal-case text-xl m-8"
          >
            Om oss
          </li>

          <li
            onClick={() => {
              toggleOpen();
              navigate("/Membership");
            }}
            className="btn btn-ghost normal-case text-xl m-8"
          >
            Bli Medlem
          </li>
          <li className="btn btn-outline m-8">Kontakt</li>
        </ul>

        {/* Circle button for closing */}
        <button
          onClick={() => {
            toggleOpen();
          }}
          className={`btn btn-circle z-50 fixed right-3 top- ${
            open ? "" : "hidden"
          }`}
        >
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
