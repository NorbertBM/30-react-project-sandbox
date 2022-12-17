import React from "react";
import Button from "./Button";
export default function Popup({ type, title, text, handleClose, trigger }) {
  const popupContainer = {
    position: "absolute",
    top: "0",
    height: "100vh",
    width: "100vw",
    background: "rgba(0,0,0,0.1)",
    zIdex: "-1",
    textAlign: "left",
  };
  const popupStyle = {
    position: "relative",
    margin: "40vh auto",
    zIdex: "1",
  };
  //   let times = "&times;";
  return (
    trigger && (
      <div style={popupContainer}>
        <div className={`${type} text-left`} style={popupStyle}>
          <div className="alert-close ">
            <div className="d-flex flex-column ">
              <h4 className="mb-1 ">{title && title}</h4>
              <p>{text && text}</p>
            </div>
            <Button
              btnClass={"btn-close"}
              text={"x"}
              onClick={() => handleClose(false)}
            />
          </div>
        </div>
      </div>
    )
  );
}
