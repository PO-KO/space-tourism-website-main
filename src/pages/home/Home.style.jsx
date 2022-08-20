import styled from "styled-components";
import homeBgMob from "../../assets/home/background-home-mobile.jpg";
import homeBgTab from "../../assets/home/background-home-tablet.jpg";
import homeBgDes from "../../assets/home/background-home-desktop.jpg";

export const HomeStyle = styled.div`
  & * {
    transition: 0.1s;
  }
  min-height: 100vh;
  background-image: url(${homeBgMob});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;

  @media (min-width: 768px) {
    background-image: url(${homeBgTab});
  }

  @media (min-width: 1440px) {
    background-image: url(${homeBgDes});
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 48px 24px;
    justify-content: space-between;
    text-align: center;
    min-height: calc(100vh - 96px);
    @media (min-width: 768px) {
      padding: 120px 159px;
    }

    @media (min-width: 1440px) {
      flex-direction: row;
      align-items: flex-end;
      padding: 70px 159px;
      text-align: start;
    }
  }

  .top {
    @media (min-width: 1440px) {
      width: 40%;
    }
  }

  .topHead {
    color: var(--paraColor);
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 2.7px;
    margin-bottom: 16px;
    transition: 0.1s;
    @media (min-width: 768px) {
      font-size: 20px;
      letter-spacing: 3.4px;
      margin-bottom: 24px;
    }

    @media (min-width: 1440px) {
      font-size: 28px;
    }
  }

  .topTitle {
    font-size: 80px;
    font-family: "Bellefair", serif;
    margin-bottom: 40px;
    @media (min-width: 768px) {
      font-size: 150px;
      margin-bottom: 24px;
    }
  }

  .topPara {
    font-family: "Barlow", sans-serif;
    color: var(--paraColor);
    line-height: 25px;
    font-size: 15px;
    margin-bottom: 25px;
    @media (min-width: 768px) {
      line-height: 30px;
    }

    @media (min-width: 1440px) {
      font-size: 18px;
      line-height: 32px;
    }
  }

  .bottom {
    position: relative;
    cursor: pointer;
    @media (min-width: 1440px) {
      margin-bottom: 30px;
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      transition: 0.2s;
    }
    &:hover::before {
      width: 230px;
      height: 230px;
      @media (min-width: 768px) {
        width: 340px;
        height: 340px;
      }

      @media (min-width: 1440px) {
        width: 450px;
        height: 450px;
      }
    }
  }

  .bottomTxt {
    position: relative;
    display: block;
    width: 150px;
    height: 150px;
    background-color: white;
    color: var(--mostlyBlack);
    border-radius: 50%;
    font-family: "Bellefair", serif;
    font-size: 20px;
    padding-top: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      width: 242px;
      height: 242px;
      font-size: 32px;
    }

    @media (min-width: 1440px) {
      width: 274px;
      height: 274px;
      letter-spacing: 2px;
    }
  }
`;
