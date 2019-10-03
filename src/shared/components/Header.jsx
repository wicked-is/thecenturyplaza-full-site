import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { fadeIn } from "shared/styled-components/Transitions.js";
import ActiveMenu from "shared/components/ActiveMenu.jsx";
import MainMenu from "shared/components/MainMenu.jsx";
import logoBlackPNG from 'icons/logo-black.png';
import logoBlackSVG from 'icons/logo-black.svg';

const HeaderContainer = styled.header`
  display: inline-block;
  position: fixed;
  top: 0;
  width: 100%;
  height:  ${props => props.theme.headerHeight}px;
  background: ${props => props.pageColor};
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  will-change: opacity;
  z-index: ${props => props.isExpanded ? "0" : "1000"};
`

const Logo = styled.div`
  position: absolute;
  left: 40px;
  top: 25px;
  display: inline-block;
  width: 250px;
  height: 17px;
  background: url(${logoBlackPNG}) no-repeat center center;
  background: url(${logoBlackSVG}) no-repeat center center, none;
  transition: all 0.5s ease-in-out;
  opacity: ${props => props.isExpanded ? "0" : "1"};
`

const Header = props => {

  const { isExpanded, primaryData, pageColor } = props;
  // console.log("Header State" + props.isExpanded);
  return (
    <HeaderContainer pageColor={pageColor} isExpanded={isExpanded} >
      <Link to="/" ><Logo isExpanded={isExpanded} /></Link>
      <ActiveMenu primaryData={primaryData} isExpanded={isExpanded} />
      <MainMenu pageColor={pageColor} primaryData={primaryData} isExpanded={isExpanded} />
    </HeaderContainer>
  );
};
export default Header;
