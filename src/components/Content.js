import React from "react";
import { useNavigate } from "react-router-dom";

export default function Content(props) {

  const navigate = useNavigate();

    const { h1, p1, p2, p3, p4, p5, btn, showBtn } = props;

  return (
    <div className="m-4">
      <h1 className="text-white text-2xl sm:text-6xl pb-4 sm:pb-12">{h1}</h1>
      <div className="text-white">
        <p className="sm:text-3xl">{p1}</p>
        <br></br>
        <div className="sm:text-3xl">
          <p>{p2}</p>
          <p>{p3}</p>
          <p>{p4}</p>
          <p>{p5}</p>
          {showBtn && <button onClick={() => {navigate("/Membership");}} className="btn btn-primary my-4 sm:mt-8">{btn}</button>}
        </div>
      </div>
    </div>
  );
}
