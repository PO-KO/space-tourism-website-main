import React from "react";
import { CrewStyle } from "./Crew.style";
import crewImg1 from "../../assets/crew/image-douglas-hurley.png";
import crewImg2 from "../../assets/crew/image-mark-shuttleworth.png";
import crewImg3 from "../../assets/crew/image-victor-glover.png";
import crewImg4 from "../../assets/crew/image-anousheh-ansari.png";
import { useActive } from "../../hooks/useActive";

const crewData = [
  {
    id: 1,
    name: "Douglas Hurley",
    image: crewImg1,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: 2,
    name: "Mark Shuttleworth",
    image: crewImg2,
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: 3,
    name: "Victor Glover",
    image: crewImg3,
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    id: 4,
    name: "Anousheh Ansari",
    image: crewImg4,
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

export const Crew = ({ setIsNavShowing }) => {
  const { active, setActive, switchContent } = useActive(crewData[0]);

  const handleCrew = (e) => {
    crewData.forEach((crew) => {
      if (crew.name === e.target.getAttribute("name")) {
        setActive(crew);
      }
    });
  };

  return (
    <CrewStyle onClick={() => setIsNavShowing(false)}>
      <div className="container">
        <h3 className="topTitle">
          <span className="topTitleNum">02</span>
          MEET YOUR CREW
        </h3>

        <div className="imgHolder">
          <img src={active.image} className="crewImg" />
        </div>

        <hr />

        <div className="crewInfo">
          <div className="bullets" ref={switchContent}>
            {crewData.map((crew) => (
              <span
                key={crew.id}
                className="bullet"
                name={crew.name}
                onClick={(e) => handleCrew(e)}
              ></span>
            ))}
          </div>
          <span className="crewRole">{active.role}</span>
          <h3 className="crewName">{active.name}</h3>
          <p className="crewBio">{active.bio}</p>
        </div>
      </div>
    </CrewStyle>
  );
};
