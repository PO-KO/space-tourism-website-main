import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 96px;
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0;
  @media (min-width: 1440px) {
    margin-top: 40px;
  }
  .wrapper {
    padding: 24px;
    display: flex;
    height: 100%;
    justify-content: space-between;
    @media (min-width: 768px) {
      padding: 0;
    }
  }

  .left {
    height: 100%;
    display: flex;
    align-items: center;
    @media (min-width: 768px) {
      padding-left: 39px;
    }
  }

  .logo {
    width: 40px;
    height: 40px;
    @media (min-width: 768px) {
      width: 48px;
      height: 48px;
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      width: 60%;
    }

    @media (min-width: 1440px) {
      width: 55%;
    }
  }

  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
