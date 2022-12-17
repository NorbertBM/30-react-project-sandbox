import React from "react";

export default function SpaceShipObj({ changeShip, scale, start }) {
  let animation = start;
  return (
    <>
      <img
        src={changeShip}
        alt="Space ship"
        style={{ position: "absolute", bottom: 50, zIndex: 1, width: scale }}
        className={animation}
      />
    </>
  );
}
