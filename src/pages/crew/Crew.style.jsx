import styled from "styled-components";
import bgMob from "../../assets/crew/background-crew-mobile.jpg";
import bgTab from "../../assets/crew/background-crew-tablet.jpg";
import bgDes from "../../assets/crew/background-crew-desktop.jpg";

export const CrewStyle = styled.div`
  background-image: url(${bgMob});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  @media (min-width: 768px) {
    background-image: url(${bgTab});
  }

  @media (min-width: 1440px) {
    background-image: url(${bgDes});
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 0 24px 10px;
    text-align: center;
    width: 100%;
    min-height: calc(100vh - 96px);
    margin-top: 96px;
    overflow: hidden;

    @media (min-width: 768px) {
      padding: 40px 38px 0;
    }

    @media (min-width: 1440px) {
      flex-wrap: wrap;
      flex-direction: row;
      padding: 110px 137px 0 166.5px;
    }
  }

  .topTitle {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 200;
    font-size: 16px;
    letter-spacing: 2.7px;
    margin-bottom: 32px;

    @media (min-width: 768px) {
      align-self: flex-start;
      margin-bottom: 60px;
      font-size: 20px;
      letter-spacing: 3.8px;
    }

    @media (min-width: 1440px) {
      font-size: 28px;
      margin-bottom: 0;
      width: 100%;
      text-align: start;
    }
  }

  .topTitleNum {
    font-weight: 700;
    color: var(--numColor);
    margin-right: 18px;
  }

  .imgHolder {
    max-width: 327px;
    height: 222px;
    @media (min-width: 768px) {
      order: 3;
      max-width: 456px;
      height: 512px;
      display: flex;
      margin-top: auto;
    }

    @media (min-width: 1440px) {
      min-width: 45%;
      margin-left: auto;
      margin-top: 0;
      height: 100%;
      align-items: flex-end;
      overflow: hidden;
    }
  }

  .crewImg {
    max-width: 100%;
    max-height: 100%;

    @media (min-width: 1440px) {
      margin-left: auto;
      object-fit: contain;
    }
  }

  hr {
    width: 100%;
    height: 1px;
    border: none;
    background-color: rgba(56, 59, 75, 1);
    margin-bottom: 32px;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .crewInfo {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      width: 458px;
    }

    @media (min-width: 1440px) {
      width: 55%;
      text-align: start;
    }
  }

  .bullets {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 32px;
    @media (min-width: 768px) {
      order: 3;
    }

    @media (min-width: 1440px) {
      justify-content: start;
      margin-bottom: 0;
      gap: 24px;
    }
  }

  .bullet {
    width: 10px;
    height: 10px;
    background-color: var(--numColor);
    border-radius: 50%;
    transition: 0.2s;
    &.active {
      background-color: white;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.55);
    }

    @media (min-width: 1440px) {
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
  }

  .crewRole {
    font-family: "Bellefair", serif;
    color: var(--numColor);
    font-weight: 400;
    margin-bottom: 8px;
    text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 24px;
    }
    @media (min-width: 1440px) {
      font-size: 32px;
      margin-bottom: 15px;
    }
  }

  .crewName {
    font-family: "Bellefair", serif;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 16px;
    text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 40px;
    }

    @media (min-width: 1440px) {
      font-size: 56px;
      margin-bottom: 27px;
    }
  }

  .crewBio {
    color: var(--paraColor);
    font-family: "Barlow", sans-serif;
    font-size: 15px;
    line-height: 25px;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 40px;
    }

    @media (min-width: 1440px) {
      font-size: 18px;
      line-height: 32px;
      margin-bottom: 120px;
      height: 128px;
    }
  }
`;
