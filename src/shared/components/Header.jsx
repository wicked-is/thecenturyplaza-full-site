import React, { useContext } from 'react';
import { Link, Location } from '@reach/router';
import styled from 'styled-components/macro';
import { mediaMin } from '../styled-components/MediaQueries.js';
import Context from '../../config/Context';
import ActiveMenu from 'shared/components/ActiveMenu.jsx';

import logoBlackSVG from 'icons/logo-black.svg';
import logoGraySVG from 'icons/logo-gray.svg';
import hamburgerBlackSVG from 'icons/hamburger-black.svg';
import closeGraySVG from 'icons/close-gray.svg';

const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  width: 100%;
  height: ${props => props.theme.mobilePortraitHeaderHeight}px;
  nav {
    position: absolute;
    height: 100%;
    width: 100%;
  }
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
  padding: 0 ${props => props.theme.mobileSideMargin}px;
  .logo {
    display: flex;
    align-items: center;
  }
  ${mediaMin.tabletLandscape`
    width: 100%;
    padding: 0 40px;
  `}
`;

const HamburgerRow = styled.div`
  display: flex;
  align-items: center;
  top: 20px;
  z-index: 11000;
  ${mediaMin.phoneXL`
    top: 10px;
  `}
  ${mediaMin.tablet`
    top: 30px;
  `}
  ${mediaMin.tabletLandscape`
    right: ${props => props.theme.desktopSideMargin}px;
  `}
  .register {
    display: none;
    ${mediaMin.tabletLandscape`
    display: flex;
    `}
    align-items: center;
    margin-right: 32px;
    border: 1px solid ${props => (props.isLight ? '#B4BAC1' : '#101820')};
    padding: 8px 16px;
    cursor: pointer;
    color: ${props => (props.isLight ? '#B4BAC1' : '#101820')};
    &:visited{
      color: ${props => (props.isLight ? '#B4BAC1' : '#101820')};
    }
    &:hover{
      opacity: .5;
    }
  }
`;

const Logo = styled.div`
  width: 250px;
  height: 16px;
  z-index: 11000;
  background: url(${props => (props.navActive ? logoGraySVG : logoBlackSVG)})
      no-repeat center center,
    none;
`;

const Hamburger = styled.button`
  right: ${props => props.theme.mobileSideMargin}px;

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
`;

const Header = ({ primaryData }) => {
  const context = useContext(Context);
  const { navActive, toggleMenu } = context;

  return (
    <Location>
      {() => {
        return (
          <HeaderContainer navActive={navActive}>
            <NavRow>
              <Link className="logo" to="/">
                <Logo
                  navActive={navActive}
                  onClick={navActive ? toggleMenu : undefined}
                />
              </Link>
              <HamburgerRow isLight={navActive}>
                <Link
                  onClick={navActive ? toggleMenu : undefined}
                  className="register"
                  to="/contact"
                >
                  REGISTER
                </Link>
                <Hamburger navActive={navActive} onClick={toggleMenu} />
              </HamburgerRow>
            </NavRow>
            <ActiveMenu primaryData={primaryData} />
          </HeaderContainer>
        );
      }}
    </Location>
  );
};
export default Header;
