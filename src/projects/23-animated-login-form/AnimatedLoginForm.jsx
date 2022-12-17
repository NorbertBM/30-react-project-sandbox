import React, { useRef, useEffect, useState } from "react";
import FormGroup from "../components/FormGroup";
import Button from "../components/Button";
import { LoginContainer, FormAnimation } from "./Form.Style";
export default function AnimatedLoginForm() {
  let email = useRef(),
    password = useRef();
  useEffect(() => {
    email.current.focus();
  });
  const [rotate, setRotate] = useState({
    animation: "",
    borderColor: "",
    background: "",
  });
  let formStyle = {
    width: 350,
    marginTop: "15vh",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.current.value !== "" && password.current.value !== "") {
      setRotate({
        animation: "animate",
        borderColor: "green",
        background: "green",
      });
    } else {
      setRotate({ animation: "", borderColor: "red" });
    }
  };

  return (
    <LoginContainer className={rotate.animation}>
      <FormAnimation
        background={rotate.background}
        borderColor={rotate.borderColor}
        className={rotate.animation}
      ></FormAnimation>
      <form
        style={formStyle}
        className="card m-1 m-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="subtitle my-2">Login</h2>
        <FormGroup labelText="Email" inputType="email" reference={email} />{" "}
        <FormGroup
          labelText="Password"
          inputType="password"
          reference={password}
        />
        <div className="form-group">
          <Button btnClass={"btn-block"} text="Submit" />
          <small className="text-accept"> Don't have a account?</small>
          <label
            className="mt-1 fw-200 text-right"
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Register
          </label>
        </div>
      </form>
    </LoginContainer>
  );
}
