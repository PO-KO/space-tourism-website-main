import React from "react";
import { TechsStyle } from "./Techs.style";
import techImgLs1 from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import techImgP1 from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import techImgLs2 from "../../assets/technology/image-spaceport-landscape.jpg";
import techImgP2 from "../../assets/technology/image-spaceport-portrait.jpg";
import techImgLs3 from "../../assets/technology/image-space-capsule-landscape.jpg";
import techImgP3 from "../../assets/technology/image-space-capsule-portrait.jpg";
import { useActive } from "../../hooks/useActive";
import { useEffect } from "react";
import { useState } from "react";

const techData = [
  {
    name: "Launch vehicle",
    images: {
      portrait: techImgP1,
      landscape: techImgLs1,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: techImgP2,
      landscape: techImgLs2,
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: techImgP3,
      landscape: techImgLs3,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

export const Techs = () => {
  const { active, setActive, switchContent } = useActive(techData[0]);
  const [image, setImage] = useState("");
  const handleTech = (e) => {
    techData.forEach((tech) => {
      if (tech.name === e.target.getAttribute("name")) {
        setActive(tech);
      }
    });
  };

  useEffect(() => {
    if (window.innerWidth >= 1440) {
      setImage(active.images.portrait);
    } else {
      setImage(active.images.landscape);
    }
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      if (window.innerWidth >= 1440) {
        setImage(active.images.portrait);
      } else {
        setImage(active.images.landscape);
      }
    });
  }, [active]);

  return (
    <TechsStyle>
      <div className="container">
        <h3 className="topTitle">
          <span className="topTitleNum">03</span>
          SPACE LAUNCH 101
        </h3>
        <div className="wrapper">
          {image && <img src={image} alt="Tech Img" className="techImg" />}

          <div className="steps" ref={switchContent}>
            {techData.map((tech, i) => (
              <span
                className="step"
                key={tech.name}
                name={tech.name}
                onClick={(e) => handleTech(e)}
              >
                {i + 1}
              </span>
            ))}
          </div>
          <div className="techInfo">
            <span className="techInfoTitle">THE TERMINOLOGY…</span>
            <h2 className="techStep">{active.name}</h2>
            <p className="techDescription">{active.description}</p>
          </div>
        </div>
      </div>
    </TechsStyle>
  );
};
