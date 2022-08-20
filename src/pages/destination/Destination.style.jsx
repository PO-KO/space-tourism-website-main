import styled from "styled-components";
import bgMob from "../../assets/destination/background-destination-mobile.jpg";
import bgTab from "../../assets/destination/background-destination-tablet.jpg";
import bgDes from "../../assets/destination/background-destination-desktop.jpg";

export const StyledDest = styled.div`
  background-image: url(${bgMob});
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;

  @media (min-width: 768px) {
    background-image: url(${bgTab});
  }

  @media (min-width: 1440px) {
    background-image: url(${bgDes});
  }

  * {
    transition: 0.1s;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 0 24px 10px;
    text-align: center;
    min-height: calc(100vh - 92px);
    width: 100%;
    margin-top: 92px;
    @media (min-width: 768px) {
      padding: 55px 97px 62px;
    }

    @media (min-width: 1440px) {
      flex-direction: row;
      justify-content: space-between;
      padding: 10px 166px 50px;
      align-items: flex-end;
    }
  }

  .planetTop {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1440px) {
      width: 45%;
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
      margin-bottom: 97px;
    }
  }

  .topTitleNum {
    font-weight: 700;
    color: var(--numColor);
    margin-right: 18px;
  }

  .planetImg {
    max-width: 100%;
    width: 170px;
    margin-bottom: 26px;

    @media (min-width: 768px) {
      width: 300px;
      margin-bottom: 53px;
    }

    @media (min-width: 1440px) {
      width: 400px;
      margin-bottom: 0;
    }
  }

  .planetBottom {
    @media (min-width: 1440px) {
      width: 40%;
      text-align: start;
    }
  }

  .switchPlanet {
    font-family: "Barlow Condensed", sans-serif;
    color: var(--paraColor);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 2.4px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    @media (min-width: 1440px) {
      justify-content: start;
      margin-bottom: 37px;
    }
  }

  .planetLink {
    margin: 0 13px;
    padding-bottom: 8px;
    position: relative;
    cursor: pointer;

    @media (min-width: 768px) {
      margin: 0 26.5px;
      padding-bottom: 12px;
    }

    @media (min-width: 1440px) {
      margin: 0;
      margin-right: 35px;
    }

    &::before {
      content: "";
      position: absolute;
      height: 3px;
      width: 100%;
      background-color: #fff;
      bottom: 0;
      opacity: 0;
      transition: 0.2s;
    }
    &:hover {
      color: rgba(255, 255, 255, 0.7);
      &::before {
        opacity: 1;
        background-color: rgba(255, 255, 255, 0.7);
      }
    }
    &.active::before {
      opacity: 1;
    }
  }

  .planetName {
    font-family: "Bellefair", serif;
    font-size: 56px;
    font-weight: 400;
    margin-bottom: 3px;

    @media (min-width: 768px) {
      font-size: 80px;
      margin-bottom: 5px;
    }

    @media (min-width: 1440px) {
      font-size: 100px;
      margin-bottom: 15px;
    }
  }

  .planetDescription {
    font-family: "Barlow", sans-serif;
    color: var(--paraColor);
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 32px;

    @media (min-width: 768px) {
      line-height: 28px;
      font-size: 16px;
      margin-bottom: 49px;
    }

    @media (min-width: 1440px) {
      font-size: 18px;
      line-height: 32px;
      height: 128px;
    }
  }

  hr {
    width: 100%;
    height: 1px;
    border: none;
    background-color: rgba(56, 59, 75, 1);
    margin-bottom: 32px;
    @media (min-width: 768px) {
      margin-bottom: 29px;
    }
  }

  .planetInfo {
    @media (min-width: 768px) {
      display: flex;
      gap: 100px;
      justify-content: center;
    }

    @media (min-width: 1440px) {
      justify-content: start;
    }
  }

  .planetItem {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .planetItemTitle {
    font-family: "Barlow Condensed", sans-serif;
    letter-spacing: 2.4px;
    font-size: 14px;
    margin-bottom: 12px;
    color: var(--paraColor);
  }

  .planetItemInfo {
    text-transform: uppercase;
    font-family: "Bellefair", serif;
    font-size: 28px;
  }
`;
