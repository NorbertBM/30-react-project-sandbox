import React, { useState } from "react";
import Button from "../components/Button";
export default function TemperatureControllerApp() {
  const [temperature, setTemperature] = useState(0);

  const increaseTemperature = () => {
    setTemperature(temperature + 1);
  };
  const decreaseTemperature = () => {
    setTemperature(temperature - 1);
  };
  return (
    <div className="container mt-3 text-center">
      <div className="card bg-light m-auto" style={{ width: 200 }}>
        <h1
          className={`text-light card border-50 ${
            temperature > 0 ? "bg-danger" : "bg-info"
          }`}
          style={{ height: 150, width: 150, border: "2px solid #666" }}
        >
          {temperature}° C
        </h1>
        <div className="d-flex my-2">
          <Button text="-" btnClass={"btn-lg"} onClick={decreaseTemperature} />
          <Button text="+" btnClass={"btn-lg"} onClick={increaseTemperature} />
        </div>
      </div>
    </div>
  );
}
