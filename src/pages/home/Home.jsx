import React from "react";
import { Header } from "../../components/header/Header";
import { HomeStyle } from "./Home.style";

export const Home = ({ setIsNavShowing }) => {
  return (
    <HomeStyle onClick={() => setIsNavShowing(false)}>
      <div className="container">
        <div className="top">
          <h3 className="topHead">SO, YOU WANT TO TRAVEL TO</h3>
          <span className="topTitle">SPACE</span>
          <p className="topPara">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="bottom">
          <span className="bottomTxt">EXPLORE</span>
        </div>
      </div>
    </HomeStyle>
  );
};
