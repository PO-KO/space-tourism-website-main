import styled from "styled-components";

export const NavbarStyle = styled.nav`
  position: fixed;
  right: ${({ isNavShowing }) => (isNavShowing ? "0" : "-100%")};
  top: 0;
  height: 100vh;
  min-width: 254px;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.04);
  -webkit-backdrop-filter: blur(43px);
  backdrop-filter: blur(43px);
  -moz-backdrop-filter: blur(43px);
  transition: right 0.5s;
  color: white;
  font-family: "Barlow Condensed", sans-serif;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    width: 65%;
    height: 1px;
    position: absolute;
    background-color: rgba(56, 59, 75, 1);
    top: 50%;
    right: 95%;
    transform: translateY(-50%);
    display: none;

    @media (min-width: 1440px) {
      display: block;
    }
  }

  @media (min-width: 768px) {
    position: static;
    height: 100%;
    flex-direction: row;
    width: 100%;
  }

  .navClose {
    align-self: flex-end;
    margin: 34px 26px;
    cursor: pointer;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .navList {
    @media (min-width: 768px) {
      display: flex;
      padding: 0 18px;
      width: 100%;
      justify-content: center;
    }
    @media (min-width: 1440px) {
      margin-left: -15px;
    }
  }
  .navItem {
    position: relative;
    padding: 4px 32px;
    margin-bottom: 25px;
    @media (min-width: 768px) {
      margin-bottom: 0;
      display: flex;
      padding: 0 18px;
    }

    @media (min-width: 1440px) {
      margin-right: 15px;
    }
  }
  .navLink {
    color: inherit;
    letter-spacing: 2.7px;
    font-weight: 200;
    width: 100%;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      position: relative;
    }
    &::after {
      content: "";
      position: absolute;
      width: 4px;
      height: 100%;
      background-color: white;
      right: 0;
      top: 0;
      opacity: 0;
      transition: 0.2s;
      @media (min-width: 768px) {
        height: 4px;
        width: 100%;
        top: auto;
        bottom: 0;
      }
    }
    &:hover::after {
      width: 2px;
      opacity: 1;

      @media (min-width: 768px) {
        width: 100%;
        height: 2px;
      }
    }
    &.active::after {
      opacity: 1;
    }
  }
  .navLinkNum {
    margin-right: 11px;
    font-weight: 700;
    @media (min-width: 768px) {
      display: none;
    }

    @media (min-width: 1440px) {
      display: block;
    }
  }
`;
