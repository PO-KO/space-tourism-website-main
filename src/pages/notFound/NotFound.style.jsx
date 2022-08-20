import styled from "styled-components";
import homeBgMob from "../../assets/home/background-home-mobile.jpg";
import homeBgTab from "../../assets/home/background-home-tablet.jpg";
import homeBgDes from "../../assets/home/background-home-desktop.jpg";

export const NotFoundStyle = styled.div`
  min-height: 100vh;
  background-image: url(${homeBgMob});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  color: white;
  justify-content: center;

  @media (min-width: 768px) {
    background-image: url(${homeBgTab});
  }

  @media (min-width: 1440px) {
    background-image: url(${homeBgDes});
  }

  .container {
    min-height: calc(100% - 92px);
    margin-top: 92px;
    padding: 48px 24px;
    text-align: center;
  }

  .error {
    font-size: 120px;
    font-family: "Bellefair", serif;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .errorTxt {
    line-height: 26px;
    color: var(--paraColor);
    font-family: "Barlow", sans-serif;
  }
`;
