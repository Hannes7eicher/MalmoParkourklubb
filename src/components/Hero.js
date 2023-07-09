import React from "react";
import backgroundImage from "../assets/hero.png";

export default function Hero() {
  return (
    <div
      className="hero h-100 sm:h-screen bg-blend-darken relative"
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
        <div className="max-w-screen sm:mx-64">
          <h1 className="mb-1 text-5xl sm:text-6xl xl:text-8xl p-2 text-white">Malmö</h1>
          <h1 className="mb-1 text-5xl sm:text-6xl xl:text-8xl p-2 text-white">
            Parkourklubb
          </h1>
          <h1 className="mb-5 text-5xl sm:text-6xl xl:text-8xl p-2 text-yellow-400">
            Träna Nu!
          </h1>
          <p className="text-2xl sm:text-3xl p-2 text-white">
            Nu öppnar Malmö Parkourklubb inför sommaren!
          </p>
          <p className="mb-5 text-2xl sm:text-3xl p-2 text-white">Kom och träna i Malmös
            största parkouranläggning.</p>
{/*           <div className="bg-white w-9/12 rounded-lg hidden sm:flex justify-between">
            <p className="text-xl sm:text-xl text-black m-4">Öppettider/Priser</p>
            <a href="#beginning">
              <button className="btn btn-primary m-2">Läs Mer</button>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
