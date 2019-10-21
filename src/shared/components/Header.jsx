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
  height: ${props => props.theme.mobilePortraitHeaderHeight}px;

  ${mediaMin.phoneXL`
    height: ${props => props.theme.mobileLandscapeHeaderHeight}px;
  `}

  ${mediaMin.tablet`
    height: ${props => props.theme.desktopHeaderHeight}px;
  `}
`;

const NavRow = styled.div`
  display: flex;
  width: calc(
    100vw - ${props => parseFloat(props.theme.mobileSideMargin) * 2}px
  );
  justify-content: space-between;
  padding: 30px ${props => props.theme.mobileSideMargin}px 0;

  ${mediaMin.tabletLandscape`
    width: calc(100vw - ${props =>
      parseFloat(props.theme.desktopSideMargin) * 2}px);
    padding: 30px ${props => props.theme.desktopSideMargin}px 0;
  `}
`;

const Logo = styled.div`
  left: ${props => props.theme.mobileSideMargin}px;
  top: 22px;
  display: inline-block;
  width: 250px;
  height: 16px;
  z-index: 11000;
  position: absolute;
  background: url(${props => (props.navActive ? logoGraySVG : logoBlackSVG)})
      no-repeat center center,
    none;

  ${mediaMin.phoneXL`
  top: 12px;
  `}
  ${mediaMin.tablet`
    top: 32px;
  `}
  
  ${mediaMin.tabletLandscape`
    left: ${props => props.theme.desktopSideMargin}px;
  `}
`;

const Hamburger = styled.button`
  right: ${props => props.theme.mobileSideMargin}px;
  top: 20px;
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

  ${mediaMin.phoneXL`
    top: 10px;
  `}
  ${mediaMin.tablet`
    top: 30px;
  `}

  ${mediaMin.tabletLandscape`
    right: ${props => props.theme.desktopSideMargin}px;
  `}
`;

const Close = styled.span`
  right: ${props => props.theme.mobileSideMargin}px;
  top: 22px;
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

  ${mediaMin.phoneXL`
  top: 12px;
  `}
  
  ${mediaMin.tablet`
    top: 32px;
  `}

  ${mediaMin.tabletLandscape`
    right: ${props => props.theme.desktopSideMargin}px;
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
