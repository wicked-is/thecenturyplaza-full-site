import React, { useContext, useEffect } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { Location } from "@reach/router";

import Context from "../../config/Context";
import { fadeIn } from "shared/styled-components/Transitions.js";
import ActiveMenu from "shared/components/ActiveMenu.jsx";
import MainMenu from "shared/components/MainMenu.jsx";
import logoBlackPNG from "icons/logo-black.png";
import logoBlackSVG from "icons/logo-black.svg";
import hamburgerBlackPNG from "icons/hamburger-black.png";
import hamburgerBlackSVG from "icons/hamburger-black.svg";
import hamburgerGrayPNG from "icons/hamburger-gray.png";
import hamburgerGraySVG from "icons/hamburger-gray.svg";
import closeGrayPNG from "icons/close-gray.png";
import closeGraySVG from "icons/close-gray.svg";
import logoGrayPNG from "icons/logo-gray.png";
import logoGraySVG from "icons/logo-gray.svg";

const HeaderContainer = styled.header`
  display: inline-block;
  position: fixed;
  transition: all 0.5s linear;
  top: 0;
  width: 100%;
  height: ${props => props.theme.headerHeight}px;
  background: ${props => props.pageColor};
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  will-change: opacity;
  z-index: 10000;
`;

const NavRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 24px 40px 0 40px;
  box-sizing: border-box;
  z-index: 10000;
  a {
    z-index: 10000;
  }
`;

const Logo = styled.div`
  left: 40px;
  top: 25px;
  display: inline-block;
  width: 250px;
  height: 17px;
  z-index: 10000;
  background: url(${props =>
        props.navActive || props.isLight ? logoGraySVG : logoBlackSVG})
      no-repeat center center,
    none;
  transition: all 0.5s ease-in-out;
`;

const Hamburger = styled.button`
  display: inline-block;
  width: 25px;
  height: 16px;
  overflow: hidden;
  border: 0;
  text-indent: -99999px;

  background: url(${props => {
        if (props.navActive) return closeGraySVG;
        if (props.isLight) return hamburgerGraySVG;
        return hamburgerBlackSVG;
      }})
      no-repeat center center,
    none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  z-index: 10000;
  &:hover {
    background: url(${props =>
          props.navActive ? closeGraySVG : hamburgerGraySVG})
        no-repeat center center,
      none;
  }

  &:focus {
    outline: none;
  }
`;

const Header = ({ primaryData, pageColor }) => {
  const context = useContext(Context);
  const { navActive, toggleMenu } = context;

  return (
    <Location>
      {({ location }) => {
        return (
          <HeaderContainer pageColor={pageColor}>
            <NavRow>
              <Link to="/">
                <Logo
                  navActive={navActive}
                  isLight={location.pathname === "/contact"}
                />
              </Link>
              <Hamburger
                isLight={location.pathname === "/contact"}
                navActive={navActive}
                onClick={toggleMenu}
              />
            </NavRow>
            <ActiveMenu primaryData={primaryData} />
            <MainMenu
              navActive={navActive}
              toggleMenu={toggleMenu}
              pageColor={pageColor}
              primaryData={primaryData}
            />
          </HeaderContainer>
        );
      }}
    </Location>
  );
};
export default Header;
