import React from "react";

export default function Alert(props) {
  const { content, info } = props;

  return (
    <div className="alert my-8 text-white bg-black border-white sm:text-2xl">
      <span className="sm:text-2xl p-8">{content}</span>
    </div>
  );
}
