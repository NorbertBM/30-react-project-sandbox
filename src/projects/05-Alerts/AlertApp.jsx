import React from "react";
import Alert from "../components/Alert";

export default function AlertApp() {
  return (
    <div className="container mx-auto">
      <Alert type={"success"} message={"Successful login"} />
      <Alert
        type={"info"}
        message={"Time triggered"}
        delay={true}
        delayTime={1000}
      />
    </div>
  );
}
