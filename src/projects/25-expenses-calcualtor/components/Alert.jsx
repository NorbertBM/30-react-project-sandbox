import React from "react";

export default function Alert({ type, text = "Alert" }) {
  return <div className={`alert alert-${type}`}>{text}</div>;
}
