import React from "react";

export default function List(props) {

  const { h1 } = props;

  return (
    <div>
      <p className="text-white sm:text-2xl">{h1}</p>
      <div className="divider"></div>
    </div>
  );
}
