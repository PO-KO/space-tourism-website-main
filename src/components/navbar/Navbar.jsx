import React from "react";
import { NavbarStyle } from "./Navbar.style";
import close from "../../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";

export const Navbar = ({ setIsNavShowing, isNavShowing }) => {
  console.log();
  return (
    <NavbarStyle isNavShowing={isNavShowing}>
      <img
        className="navClose"
        src={close}
        alt="Close"
        onClick={() => setIsNavShowing(false)}
      />
      <ul className="navList">
        <li className="navItem">
          <NavLink
            to="/"
            className="navLink"
            onClick={() => setIsNavShowing(false)}
          >
            <span className="navLinkNum">00</span>
            HOME
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            to="/destination"
            className="navLink"
            onClick={() => setIsNavShowing(false)}
          >
            <span className="navLinkNum">01</span>
            DESTINATION
          </NavLink>
        </li>

        <li className="navItem">
          <NavLink
            to="/crew"
            className="navLink"
            onClick={() => setIsNavShowing(false)}
          >
            <span className="navLinkNum">02</span>
            CREW
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink className="navLink" to="/technology">
            <span className="navLinkNum">03</span>
            TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </NavbarStyle>
  );
};
