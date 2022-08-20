import React from "react";
import { NotFoundStyle } from "./NotFound.style";

export const NotFound = ({ setIsNavShowing }) => {
  return (
    <NotFoundStyle onClick={() => setIsNavShowing(false)}>
      <div className="container">
        <h2 className="error">404</h2>
        <p className="errorTxt">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          accusantium et impedit iste illum esse recusandae ut saepe nesciunt
          quasi.
        </p>
      </div>
    </NotFoundStyle>
  );
};
