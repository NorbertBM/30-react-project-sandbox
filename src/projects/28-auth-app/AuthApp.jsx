import React, { useState, useRef, useEffect } from "react";
import Title from "../components/Title";
import FormGroup from "../components/FormGroup";
import Auth from "./components/Auth";
import { Wrapper } from "./components/Wrapper.style";
import { AuthContext } from "./context/auth-context";
export default function AuthApp() {
  // Autofocus
  const inputName = useRef(null);
  useEffect(() => {
    inputName.current.focus();
  }, [inputName]);

  //   Ui Control
  const [ui, setUi] = useState({
    wrapper: true,
    title: "Authenticate",
  });
  // Animation State
  const [animateDenied, setAnimateDenied] = useState(false);

  //   Control name and password

  const [userAuth, setUserAuth] = useState({
    name: "",
    password: "",
  });

  // const handleChangeName = (e) => {
  //   setUserAuth({ ...userAuth, name: e.target.value });
  // };
  // const handleChangePassword = (e) => {
  //   setUserAuth({ ...userAuth, password: e.target.value });
  // };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserAuth({ ...userAuth, [name]: value });
  };
  //   Authentication

  const [authStatus, setAuthStatus] = useState(null);

  const login = () => {
    if (userAuth.name === "Norbert" && userAuth.password === "1234") {
      setAuthStatus(true);
      clearInputs();
      authenticate();
    } else {
      setAuthStatus(false);
      setAnimateDenied(true);
      setTimeout(() => {
        setAnimateDenied(false);
      }, 600);
    }
  };

  function clearInputs() {
    setUserAuth({
      name: "",
      password: "",
    });
  }

  function authenticate() {
    setUi({ wrapper: false, title: `Welcome ${userAuth.name}` });
  }

  const logout = () => {
    window.location.reload(true);
  };
  return (
    <div className="container" style={{ width: 300 }}>
      <Title text={ui.title} />
      <AuthContext.Provider
        value={{ status: authStatus, login: login, logout: logout }}
      >
        {ui.wrapper && (
          <Wrapper className={animateDenied && "active"}>
            <FormGroup
              labelText={"User name"}
              inputType="text"
              name="name"
              placeholder={"Enter your name"}
              reference={inputName}
              values={userAuth.name}
              // onChange={handleChangeName}
              onChange={handleInputChange}
            />{" "}
            <FormGroup
              labelText={"Password"}
              inputType="password"
              name={"password"}
              placeholder={"Enter your password"}
              values={userAuth.password}
              // onChange={handleChangePassword}
              onChange={handleInputChange}
            />
          </Wrapper>
        )}
        <Auth />
      </AuthContext.Provider>
    </div>
  );
}
