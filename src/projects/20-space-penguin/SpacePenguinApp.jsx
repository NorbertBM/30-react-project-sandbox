import React, { useState, useEffect } from "react";
import "./ship.css";
import Button from "../components/Button";
// Objects
import SpaceShipObj from "./objects/SpaceShipObj";
import PlanetObj from "./objects/PlanetObj";
import MoonObj from "./objects/MoonObj";
// Img
import Ship from "./svg/space-ship-rocket-svgrepo-com.svg";
import Earth from "./svg/planet-earth-svgrepo-com.svg";
import Moon from "./svg/moon-svgrepo-com.svg";
import Penguin from "./svg/penguin-svgrepo-com.svg";
export default function SpacePenguinApp() {
  // const [shipAction, setShipAction] = useState();
  // const [transformScale, setTransformScale] = useState(200);

  const [shipProps, setShipPros] = useState({
    action: "",
    scale: 200,
  });

  const startShip = () => {
    // setShipAction("fly");
    // setTransformScale(50);
    setShipPros({ action: "fly", scale: 50 });
  };

  const landShip = () => {
    // setShipAction("land");
    // setTransformScale(200);
    setShipPros({ action: "land", scale: 200 });
  };

  const [shipType, setShipType] = useState(Ship);
  useEffect(() => {
    if (shipProps.action === "land") {
      setShipType(Penguin);
      setTimeout(() => {
        setShipType(Ship);
      }, 5500);
    }
    if (shipProps.action === "fly") {
      setShipType(Ship);
    }
  }, [shipProps.action]);

  return (
    <div className="space">
      <Button text="Launch" btnClass={"btn-danger"} onClick={startShip} />
      <section className="env">
        <SpaceShipObj
          changeShip={shipType}
          scale={shipProps.scale}
          start={shipProps.action}
        />
        <MoonObj Moon={Moon} />
        <PlanetObj Planet={Earth} />
      </section>

      <Button text="Land" btnClass={"btn-info"} onClick={landShip} />
    </div>
  );
}
