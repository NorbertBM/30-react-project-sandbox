import React from "react";

export default function Button({ text = "click", btnClass, icon, onClick }) {
  return (
    <button className={`btn ${btnClass}`} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
