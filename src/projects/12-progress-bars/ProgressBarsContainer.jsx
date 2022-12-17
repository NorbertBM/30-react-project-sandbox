import React, { useRef, useEffect, useState } from "react";
import Title from "../components/Title";
import { Progressbar } from "../components/Progressbar";
export default function ProgressBarsContainer() {
  const [completed, setCompleted] = useState(51);
  const [status, setStatus] = useState({
    ui: 20,
    ux: 73,
    data: 20,
  });

  const projectDate = [
    { bgColor: "#7633f9", completed: status.ui },
    { bgColor: "#28a745", completed: status.ux },
    { bgColor: "#dc3545", completed: status.data },
  ];
  const inputStyle = {
    width: 50,
    border: "none",
    outline: "none",
    textAlign: "center",
    borderBottom: "1px solid lightgray",
  };

  const uiInput = useRef(null);

  useEffect(() => {
    uiInput.current.focus();
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);
  return (
    <div className="container container-sm mx-auto text-center">
      <Title text={"Progress bars"} />
      <h2>Project status:</h2>
      <ul>
        <li>
          UI Status:{" "}
          <input
            type="number"
            style={inputStyle}
            ref={uiInput}
            value={status.ui}
            onChange={(e) => setStatus({ ...status, ui: e.target.value })}
          />
        </li>
        <li>
          UX Status:{" "}
          <input
            type="number"
            style={inputStyle}
            value={status.ux}
            onChange={(e) => setStatus({ ...status, ux: e.target.value })}
          />
        </li>{" "}
        <li>
          DATA Status:{" "}
          <input
            type="number"
            style={inputStyle}
            value={status.data}
            onChange={(e) => setStatus({ ...status, data: e.target.value })}
          />
        </li>
      </ul>
      {/* progress bars */}
      {projectDate.map((date, idx) => (
        <Progressbar
          key={idx}
          bgColor={date.bgColor}
          completed={date.completed}
        />
      ))}
      <Progressbar
        bgColor={completed > 50 ? "#7633f9" : "#dc3545"}
        completed={completed}
      />
    </div>
  );
}
