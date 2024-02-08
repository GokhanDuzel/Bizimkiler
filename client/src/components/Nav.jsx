import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./Nav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  const onClickHandler = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setClicked(false); // Reset the state if the viewport width is more than 768px
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
      <nav className="navbar">
        <img className="logo" src={logo} alt="Bizimkiler logo" />
        <div className="nav-elements">
          <div className="menu-on-off">
            <FontAwesomeIcon
              icon={clicked ? faXmark : faBars}
              onClick={onClickHandler}
              style={{ color: "#000000" }}
            />
          </div>
          <ul className={clicked ? "dropdown-options" : "options"}>
            <li>
              <a href="#home">Ana sayfa</a>
            </li>
            <li>
              <a href="#about">Hakkımızda</a>
            </li>
            <li>
              <a href="#books">Kitaplar</a>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Nav;
