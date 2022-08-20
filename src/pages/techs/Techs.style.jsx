import styled from "styled-components";
import bgMob from "../../assets/technology/background-technology-mobile.jpg";
import bgTab from "../../assets/technology/background-technology-tablet.jpg";
import bgDes from "../../assets/technology/background-technology-desktop.jpg";

export const TechsStyle = styled.div`
  background-image: url(${bgMob});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
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
    text-align: center;
    width: 100%;
    min-height: calc(100vh - 96px);
    position: relative;
    top: 96px;

    @media (min-width: 768px) {
      padding-top: 40px;
    }

    @media (min-width: 1440px) {
      padding-top: 100px;
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
      margin-left: 38px;
      margin-bottom: 60px;
    }

    @media (min-width: 1440px) {
      font-size: 28px;
      margin-bottom: 0;
      margin-left: 0;
      width: 100%;
      text-align: start;
      padding-left: 166.5px;
    }
  }

  .topTitleNum {
    font-weight: 700;
    color: var(--numColor);
    margin-right: 18px;
  }

  .wrapper {
    @media (min-width: 1440px) {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      height: 100%;
      padding-left: 165px;
    }
  }

  .techImg {
    max-width: 100%;
    min-height: 170px;
    object-fit: cover;
    margin-bottom: 34px;

    @media (min-width: 768px) {
      margin-bottom: 56px;
    }

    @media (min-width: 1440px) {
      margin-bottom: 0;
      object-fit: cover;
      height: 500px;
    }
  }

  .steps {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 26px;

    @media (min-width: 768px) {
      margin-bottom: 44px;
    }

    @media (min-width: 1440px) {
      order: 1;
      flex-direction: column;
      margin-bottom: 0;
      margin-right: 80px;
      gap: 32px;
    }
  }

  .step {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-family: "Bellefair", serif;
    border: 1px solid var(--numColor);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      border-color: white;
    }
    &.active {
      background-color: white;
      color: var(--mostlyBlack);
    }

    @media (min-width: 768px) {
      width: 60px;
      height: 60px;
    }

    @media (min-width: 1440px) {
      width: 80px;
      height: 80px;
      font-size: 32px;
    }
  }

  .techInfo {
    padding: 0 24px;

    @media (min-width: 768px) {
      padding: 0 155px;
    }

    @media (min-width: 1440px) {
      text-align: start;
      padding: 0;
    }
  }

  .techInfoTitle {
    font-size: 14px;
    font-family: "Barlow Condensed", sans-serif;
    color: var(--paraColor);
    letter-spacing: 2.36px;
    margin-bottom: 9px;
    display: block;

    @media (min-width: 768px) {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }

  .techStep {
    font-family: "Bellefair", serif;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 16px;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 40px;
    }
  }

  .techDescription {
    font-family: "Barlow", sans-serif;
    color: var(--paraColor);
    line-height: 25px;
    font-size: 15px;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 28px;
    }

    @media (min-width: 768px) {
      margin-right: 130px;
    }
  }
`;
