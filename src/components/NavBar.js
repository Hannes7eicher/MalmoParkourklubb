import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import MPKLogo from "../assets/mpkLogo.png";

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
          className="btn btn-ghost normal-case text-xl text-white"
        >
          <img src={MPKLogo} alt="MPK Logo" style={{ maxHeight: "48px", marginRight: "8px" }}/>{" "}
        </a>
      </div>
      <div className="flex sm:justify-end">
        {/* Desktop Navbar Icons */}
        <div className="lg:flex hidden">
          <ul>
            <li
              onClick={() => {
                navigate("/Membership");
              }}
              className="btn btn-ghost normal-case text-xl text-white mx-8"
            >
              Medlemskap / Träning
            </li>

            <li
              onClick={() => {
                navigate("/events");
              }}
              className="btn btn-ghost normal-case text-xl text-white mx-8"
            >
              Events
            </li>

            <li
              onClick={() => {
                navigate("/About");
              }}
              className="btn btn-ghost normal-case text-xl text-white mx-8"
            >
              Om oss
            </li>

            <li className="btn btn-outline text-white mx-8">
              <Link to="/Membership#contact">Kontakt</Link>
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
              navigate("/");
            }}
            className="btn btn-ghost normal-case text-xl text-white m-8"
          >
            Startsida
          </li>

          <li
            onClick={() => {
              toggleOpen();
              navigate("/Membership");
            }}
            className="btn btn-ghost normal-case text-xl text-white m-8"
          >
            Medlemskap & Träning
          </li>

          <li
            onClick={() => {
              toggleOpen();
              navigate("/Events");
            }}
            className="btn btn-ghost normal-case text-xl text-white m-8"
          >
            Event
          </li>

          <li
            onClick={() => {
              toggleOpen();
              navigate("/About");
            }}
            className="btn btn-ghost normal-case text-xl text-white m-8"
          >
            Om oss
          </li>
          <li
            onClick={() => {
              window.location.href = "mailto:info@malmoparkour.se";
            }}
            className="btn btn-outline text-white m-8"
          >
            Kontakt
          </li>
        </ul>

        {/* Circle button for closing */}
        <button
          onClick={() => {
            toggleOpen();
          }}
          className={`btn btn-circle text-white z-50 fixed right-3 top- ${
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
          className={`btn btn-square btn-ghost text-white lg:hidden flex ${
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
