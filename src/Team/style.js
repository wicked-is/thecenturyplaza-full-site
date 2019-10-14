import { css } from "styled-components";
import { Container } from "shared/styled-components/Layouts.js";
import { mediaMin } from "shared/styled-components/MediaQueries.js";
import chevronDownSVG from "icons/chevron-down.svg";

export const ContainerStyled = css`
  ${Container}

  ${mediaMin.tabletLandscape` 
    margin: 20px 0 0;
    width: ${props => parseFloat(props.theme.desktopColumn) * 10}vw;
  `}
`;

export const MenuStyled = css`
  display: inline-block;
  width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);
  height: ${props => (props.isOpen ? "auto" : "1em")};
  margin: 0;
  padding: 0;
  positon: relative;

  ${mediaMin.phoneXL`
    width: 100%;
  `}
  ${mediaMin.tablet` 
    width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);
  `}
  ${mediaMin.tabletLandscape` 
    width: 100%;
    height: auto;
  `}

  &::after {
    position: absolute;
    top: 2px;
    right: 0;
    display: inline-block;
    height: 1em;
    width: 1em;
    content: "";
    background: url(${chevronDownSVG}) no-repeat center center;
    background-size: contain;
    vertical-align: bottom;
    margin: 0;
    transform: rotate(${props => (props.isOpen ? "180deg" : "0")});
    transition: transform 0.25s ease-in-out;

    ${mediaMin.tabletLandscape` 
    display: none;
    `}
  }

  li {
    display: inline-block;
    width: 100%;
    height: auto;
    margin: 0;
    padding-right: 2em;
  }

  li.inactive {
    display: ${props => (props.isOpen ? "inline-block" : "none")};

    ${mediaMin.tabletLandscape`
      display: inline-block;
    `}
  }

  a {
    display: inline-block;
    width:calc(100% - 2em);
    color: ${props => props.theme.gray};
    text-decoration: none;
    padding: 0 2em 1em 0;
    font-family: ${props => props.theme.sansSerifMedium}, sans-serif;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 1.35em;
    letter-spacing: 0.1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;

    ${mediaMin.tabletLandscape`
      font-size: 14px;
      font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
      font-weight: 300;
      text-transform: Capitalize;
      letter-spacing: 0.06em;
    `}
  }
`;

export const AsideStyled = css`
  position: relative;
  background: white;
  z-index: 1000;
  width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);
  margin: 2.5em 0 0;

  ${mediaMin.phoneXL`
    position: fixed;
    width: 34%;
    left: auto;
    margin:0 0 20px;
    top: ${props => props.theme.headerHeight}px;
    left: ${props => props.theme.mobileMargin}px;
  `}
  
  ${mediaMin.tablet` 
    width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);
    position: relative;
    top: auto;
    left: auto;
    margin: 40px 0 0;
  `}

  ${mediaMin.tabletLandscape` 
    position: fixed;
    width: 22%;
    left: auto;
    margin:0 0 1em;
  `}

  ${mediaMin.desktopSmall` 
    position: fixed;
    top: ${props => props.theme.headerHeight}px;
    left: ${props => props.theme.mobileMargin}px;
    width: 18%;
    left: auto;
    margin: 20px 0 0;
  `}

  ul {
    margin: 0;
    padding: 0 0 1em;
    position: fixed;
    top: ${props => props.theme.headerHeight}px;
    background: white;

    ${mediaMin.phoneXL`
      position: relative;
      padding: 0;
      top: 0;
    `}

    ${mediaMin.tablet` 
      padding: 0 0 2em;
      position: fixed;
      top: ${props => props.theme.headerHeight}px;
    `}

    ${mediaMin.tabletLandscape`
      position: relative;
      padding: 0;
      top: 0;
    `}

  }

  p {
    font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.35em;
    letter-spacing: 0.05em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }
`;

export const ItemsStyled = css`
  margin: 0;

  ${mediaMin.phoneXL`
    margin: ${props =>
      parseFloat(props.theme.mobileColumn) * parseFloat(props.mobileLift)}vw
      0 3.5vw;
  `}

  ${mediaMin.tabletLandscape` 
    margin: ${props =>
      parseFloat(props.theme.desktopColumn) * parseFloat(props.desktopLift)}vw
      0 3.5vw;
  `}

  img {
    margin: 0 0 ${props => props.theme.mobileMargin}px;

    ${mediaMin.phoneXL`
      margin: 0;
    `}
  }
`;
