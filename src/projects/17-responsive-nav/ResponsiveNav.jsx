import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";

import { NavStyle } from "./NavStyle";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function ResponsiveNav() {
  const [showElement, setShowElement] = useState({
    navbarNav: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpened: false,
  });
  const [pageTitle, setPageTitle] = useState("");
  useEffect(() => {
    window.onresize = () => {
      let windowWidth = window.innerWidth;
      // console.log(windowWidth);
      windowWidth > 600 &&
        setShowElement({ navbarNav: true, hamburgerIcon: false });
      windowWidth < 600 &&
        setShowElement({ navbarNav: false, hamburgerIcon: true });
    };
  }, []);
  const openNav = () => {
    setShowElement({
      navbarNav: true,
      hamburgerIcon: false,
      closeIcon: true,
      navOpened: true,
    });
  };
  const closeNav = () => {
    setShowElement({
      navbarNav: false,
      hamburgerIcon: true,
      closeIcon: false,
      navOpened: false,
    });
  };

  const handleActive = (e) => {
    document
      .querySelectorAll(".nav-link")
      .forEach((navLink) => navLink.classList.remove("active"));
    e.target.classList.add("active");
    setPageTitle(e.target.innerText);
  };
  return (
    <>
      <NavStyle
        className={`navbar bg-primary text-light ${
          showElement.navOpened && "showNavbar"
        }`}
      >
        <div className="navbar-logo">
          <a href="#" className="navbar-brand">
            Norbert BM
          </a>
          {/* Open and close icons */}
          {showElement.hamburgerIcon && (
            <AiOutlineMenu onClick={openNav} />
          )}{" "}
          {showElement.closeIcon && <AiOutlineClose onClick={closeNav} />}
        </div>
        <div className="navbar-collapse">
          {showElement.navbarNav ? (
            <ul
              className={`navbar-items ${
                showElement.navOpened && "showNavbar"
              }`}
            >
              <NavItem text={"Home"} active="active" onClick={handleActive} />
              <NavItem text={"About"} onClick={handleActive} />
              <NavItem text={"Contact"} onClick={handleActive} />
            </ul>
          ) : null}
        </div>
      </NavStyle>
      <h1 className="title text-center text-primary">
        {!pageTitle ? "Home" : pageTitle}
      </h1>
    </>
  );
}
