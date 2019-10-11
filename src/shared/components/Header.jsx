import React, { useContext } from "react";
import { Link, Location } from "@reach/router";
import styled from "styled-components";
import { mediaMin } from "../styled-components/MediaQueries.js";
import Context from "../../config/Context";
import ActiveMenu from "shared/components/ActiveMenu.jsx";
import MainMenu from "shared/components/MainMenu.jsx";
import logoBlackSVG from "icons/logo-black.svg";
import logoGraySVG from "icons/logo-gray.svg";
import hamburgerBlackSVG from "icons/hamburger-black.svg";
import closeGraySVG from "icons/close-gray.svg";

const HeaderContainer = styled.header`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
`;

const NavRow = styled.div`
  display: flex;
  width: calc(100vw - ${props => parseFloat(props.theme.mobilepMargin) * 2}px);
  justify-content: space-between;
  padding: 30px ${props => props.theme.mobileMargin}px 0;
  z-index: 10000;

  ${mediaMin.tabletLandscape`
    width: calc(100vw - ${props =>
      parseFloat(props.theme.desktopMargin) * 2}px);
    padding: 30px ${props => props.theme.desktopMargin}px 0;
  `}
`;

const Logo = styled.div`
  left: ${props => props.theme.mobileMargin}px;
  top: 31px;
  display: inline-block;
  width: 250px;
  height: 17px;
  z-index: 11000;
  position: absolute;
  background: url(${props => (props.navActive ? logoGraySVG : logoBlackSVG)})
      no-repeat center center,
    none;
  ${mediaMin.tabletLandscape`
    left: ${props => props.theme.desktopMargin}px;
  `}
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
        if (props.isLight) return hamburgerBlackSVG;
        return hamburgerBlackSVG;
      }})
      no-repeat center center,
    none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  z-index: 11000;
  &:hover {
    background: url(${props =>
          props.navActive ? closeGraySVG : hamburgerBlackSVG})
        no-repeat center center,
      none;
  }

  &:focus {
    outline: none;
  }
`;

const Header = ({ primaryData, pageColor }) => {
  const context = useContext(Context);
  const { navActive, toggleMenu, isExpanded } = context;

  return (
    <Location>
      {({ location }) => {
        return (
          <HeaderContainer
            isExpanded={isExpanded}
            pageColor={pageColor}
            navActive={navActive}
          >
            <NavRow>
              <Link to="/">
                <Logo
                  navActive={navActive}
                  isLight={
                    location.pathname === "/contact" ||
                    location.pathname === "broker-portal"
                  }
                  onClick={navActive ? toggleMenu : undefined}
                />
              </Link>
              <Hamburger
                isLight={
                  location.pathname === "/contact" ||
                  location.pathname === "broker-portal"
                }
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
