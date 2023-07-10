import React from "react";
import backgroundImage from "../assets/hero.png";

export default function Hero(props) {

  const { h1, h2, h3,  p1, p2} = props

  return (
    <div
      className="hero h-100 sm:h-screen bg-blend-darke relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          mixBlendMode: "darken",
        }}
      ></div>
      <div className="hero-content">
        <div className="max-w-screen sm:mx-64 pt-16 sm:pt-0">
          <h1 className="mb-1 text-5xl sm:text-6xl xl:text-8xl p-2 text-white">{h1}</h1>
          <h1 className="mb-1 text-5xl sm:text-6xl xl:text-8xl p-2 text-white">
            {h2}
          </h1>
          <h1 className="mb-5 text-5xl sm:text-6xl xl:text-8xl p-2 text-yellow-400">
          {h3}
          </h1>
          <p className="text-2xl sm:text-3xl p-2 text-white">
          {p1}
          </p>
          <p className="mb-5 text-2xl sm:text-3xl p-2 text-white">{p2}</p>
        </div>
      </div>
    </div>
  );
}
