import React, { useState } from "react";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import { HeaderStyle } from "./Header.style";
import { Navbar } from "../navbar/Navbar";

export const Header = ({ isNavShowing, setIsNavShowing }) => {
  return (
    <HeaderStyle>
      <div className="wrapper">
        <div className="left">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="right">
          {!isNavShowing && (
            <img
              className="burger"
              src={hamburger}
              alt="Hamburger menu"
              onClick={() => setIsNavShowing(true)}
            />
          )}
          <Navbar
            setIsNavShowing={setIsNavShowing}
            isNavShowing={isNavShowing}
          />
        </div>
      </div>
    </HeaderStyle>
  );
};
