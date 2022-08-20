import React, { useEffect, useRef, useState } from "react";
import { StyledDest } from "./Destination.style";
import moonImg from "../../assets/destination/image-moon.png";
import marsImg from "../../assets/destination/image-mars.png";
import europaImg from "../../assets/destination/image-europa.png";
import titanImg from "../../assets/destination/image-titan.png";
import { useActive } from "../../hooks/useActive";

const planetData = {
  moon: {
    name: "MOON",
    img: moonImg,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  mars: {
    name: "MARS",
    img: marsImg,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  europa: {
    name: "EUROPA",
    img: europaImg,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  titan: {
    name: "TITAN",
    img: titanImg,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
};

export const Destination = ({ setIsNavShowing }) => {
  const { active, setActive, switchContent } = useActive(planetData["moon"]);

  return (
    <StyledDest onClick={() => setIsNavShowing(false)}>
      <div className="container">
        <div className="planetTop">
          <h3 className="topTitle">
            <span className="topTitleNum">01</span>
            PICK YOUR DESTINATION
          </h3>
          <img src={active.img} alt="" className="planetImg" />
        </div>

        <div className="planetBottom">
          <div className="switchPlanet" ref={switchContent}>
            {Object.keys(planetData).map((planet) => {
              return (
                <span
                  className="planetLink"
                  key={planet}
                  name={planet}
                  onClick={() => setActive(planetData[planet])}
                >
                  {planet.toUpperCase()}
                </span>
              );
            })}
          </div>

          <h1 className="planetName">{active.name}</h1>
          <p className="planetDescription">{active.description}</p>

          <hr />

          <div className="planetInfo">
            <div className="planetItem">
              <span className="planetItemTitle">AVG. DISTANCE</span>
              <span className="planetItemInfo">{active.distance}</span>
            </div>

            <div className="planetItem">
              <span className="planetItemTitle">EST. TRAVEL TIME</span>
              <span className="planetItemInfo">{active.travel}</span>
            </div>
          </div>
        </div>
      </div>
    </StyledDest>
  );
};
