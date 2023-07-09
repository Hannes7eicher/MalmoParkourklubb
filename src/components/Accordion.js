import React, { useState } from "react";

export default function CollapseExample() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      tabIndex="0"
      className={`collapse collapse-arrow border border-base-300 bg-base-200 ${
        collapsed ? "collapsed" : ""
      }`}
    >
      <div
        className="collapse-title text-white text-left sm:text-center sm_text-center text-xl sm:text-4xl"
        onClick={toggleCollapse}
      >
        Vi behöver er hjälp!
      </div>
      {!collapsed && (
        <div className="collapse-content">
          <p className="text-left text-xl sm:text-2xl text-white">
            Vi är ett gäng med tränare föräldrar som har tagit över den
            föredetta parkourföreningen Quality Runners. Tyvärr har en tidigare
            styrelse överlämnat en skuld på ca 200.000 kronor som det nu gäller
            att återbetala. Därför behöver vi er hjälp för att starta ett
            parkourcenter som Malmö förtjänar! Hur kan du hjälpa oss? Kom och
            träna!
          </p>
          <a className="flex mt-4" href="#beginning">
            <button className="btn btn-primary m-2">Läs Mer</button>
          </a>
        </div>
      )}
    </div>
  );
}
