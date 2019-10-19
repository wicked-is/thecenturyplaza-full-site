import React, { useContext } from "react";
import { Link, Location } from "@reach/router";
import styled from "styled-components/macro";
import { mediaMin } from "../styled-components/MediaQueries.js";
import Context from "../../config/Context";
import ActiveMenu from "shared/components/ActiveMenu.jsx";

import logoBlackSVG from "icons/logo-black.svg";
import logoGraySVG from "icons/logo-gray.svg";
import hamburgerBlackSVG from "icons/hamburger-black.svg";
import closeGraySVG from "icons/close-gray.svg";
import closeBlackSVG from "icons/close-black.svg";

const HeaderContainer = styled.header`
  display: inline-block;
  position: relative;
  width: 100%;
  height: ${props => props.theme.headerHeight}px;
`;

const NavRow = styled.div`
  display: flex;
  width: calc(100vw - ${props => parseFloat(props.theme.mobilepMargin) * 2}px);
  justify-content: space-between;
  padding: 30px ${props => props.theme.mobileMargin}px 0;

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
  right: ${props => props.theme.mobileMargin}px;
  top: 30px;
  position: absolute;
  display: inline-block;
  width: 25px;
  height: 20px;
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

  ${mediaMin.tabletLandscape`
    right: ${props => props.theme.desktopMargin}px;
  `}
`;

const Close = styled.span`
  right: ${props => props.theme.mobileMargin}px;
  top: 31px;
  position: absolute;
  display: inline-block;
  width: 25px;
  height: 16px;
  overflow: hidden;
  border: 0;
  text-indent: -99999px;

  background: url(${closeBlackSVG}) no-repeat center center, none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  z-index: 11000;

  &:hover {
    background: url(${closeBlackSVG}) no-repeat center center, none;
  }

  &:focus {
    outline: none;
  }

  ${mediaMin.tabletLandscape`
    right: ${props => props.theme.desktopMargin}px;
  `}
`;

const Header = ({ primaryData, pageColor }) => {
  const context = useContext(Context);
  const { navActive, toggleMenu, returnPath } = context;

  return (
    <Location>
      {({ location }) => {
        return (
          <HeaderContainer navActive={navActive}>
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
              {returnPath === null ||
              returnPath === window.location.pathname ? (
                <Hamburger
                  isLight={
                    location.pathname === "/contact" ||
                    location.pathname === "broker-portal"
                  }
                  navActive={navActive}
                  onClick={toggleMenu}
                />
              ) : (
                <Link to={returnPath}>
                  <Close
                    isLight={
                      location.pathname === "/contact" ||
                      location.pathname === "broker-portal"
                    }
                  />
                </Link>
              )}
            </NavRow>
            <ActiveMenu primaryData={primaryData} />
          </HeaderContainer>
        );
      }}
    </Location>
  );
};
export default Header;
