import { css } from "styled-components";
import { enterFadeIn } from "shared/styled-components/Transitions.js";
import { mediaMin } from "./MediaQueries.js";
import plusCloseSVG from "icons/plus-icon.svg";

export const PageBody = css`
  font-family: ${props => props.theme.sansSerifRegular}, courier;
  color: ${props => props.theme.black};
  font-size: 14px;
  letter-spacing: 0.6px;
  transition: background 0.5s ease-in-out;
  background: ${props => props.pageColor};
  min-height: ${props => (props.navActive ? "100vh" : "auto")};
  position: relative;

  a {
    text-decoration: none;
  }
`;

export const PageHeader = css`
  display: inline-block;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: ${props =>
    props.navActive ? "100%" : props.theme.headerHeight + "px"};
  min-height: ${props => (props.navActive ? "100vh" : "80px")};
  background: ${props =>
    props.globalConfig.returnPath === null
      ? props.pageColor
      : props.globalConfig.headerBackground};
  z-index: 10000;
  transition: transform 0.5s ease-in-out, background 0.5s ease-in-out;
  transform: translateY(
    ${props => (props.isExpanded ? "-" + props.theme.headerHeight + "px" : "0")}
  );
  overflow-y: ${props => (props.navActive ? "scroll" : "hidden")};
  overflow-x: hidden;

  header {
    opacity: 0;
    animation: ${enterFadeIn};
    will-change: opacity;
    ${"" /* overflow: hidden; */}
  }
`;

export const PageFooter = css`
  display: ${props => (props.hideFooter ? "none" : "inline-block")};
  position: ${props => (props.fixedFooter ? "fixed" : "relative")};
  bottom: 0;
  z-index: 900;
  width: 100%;
  height: ${props => (props.navActive ? "0" : props.theme.headerHeight + "px")};
  background: ${props => props.pageColor};
  transition: transform 0.5s ease-in-out, background 0.5s ease-in-out;
  transform: translateY(
    ${props => (props.isExpanded ? props.theme.headerHeight + "px" : "0")}
  );

  ${mediaMin.tabletLandscape`
    position: ${props => (props.fixedFooter ? "fixed" : "absolute")};
  `}

  footer {
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: ${enterFadeIn};
    will-change: opacity;

    ${mediaMin.tabletLandscape`
      display: flex;
    `}

    ul {
      display: none;

      ${mediaMin.tabletLandscape`
        display: inline-block;
      `}
    }
  }
`;

export const PagePreTitle = css`
  margin: 0 0 0;
  font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.35em;
  letter-spacing: 0.05em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  text-align: center;
`;

export const PageTitle = css`
  font-family: ${props => props.theme.serifRoman}, serif;
  font-weight: 300;
  font-size: 24px;
  line-height: 1.1em;
  letter-spacing: 0.3em;
  margin: 10px 0;
  text-align: center;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
`;

export const Caption = css`
  display: inline-block;
  position: absolute;
  height: auto;
  top: 0;
  left: 0;
  margin: 0 0 ${props => props.theme.headerHeight}px;
  padding: ${props => props.theme.mobileMargin}px
    ${props => props.theme.mobileMargin}px 0;
  background: white;
  width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;
  transition: all 0.25s ease-in-out;
  transform: translateY(${props => (props.isOpen ? "-70%" : "10px")});

  ${mediaMin.phoneXL`
    transform: translateY(${props => (props.isOpen ? "-50%" : "10px")});
  `}

  ${mediaMin.tabletLandscape`
    display: flex;
    left: ${props => props.theme.desktopMargin}px;
    align-items: center;
    width: calc(100vw - ${props =>
      parseFloat(props.theme.desktopMargin) * 2}px - 300px);
    height 80px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    transform: translateY(0);
  `}

  p {
    display: inline-block;
    opacity: ${props => (props.isOpen ? "1" : "0")};
    font-weight: 300;
    width: 100%;
    font-size: 12px;
    line-height: 1.35em;
    letter-spacing: 0.05em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    transition: all 0.25s ease-in-out;

    ${mediaMin.tabletLandscape`
      display: inline-block;
      opacity: 1;
      margin: 0;
    `}
  }

  button {
    display: inline-block;
    background: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
    text-transform: uppercase;

    &:focus {
      outline: none;
    }

    &::before {
      display: inline-block;
      height: 1em;
      width: 1em;
      content: "";
      background: url(${plusCloseSVG}) no-repeat center center;
      background-size: contain;
      vertical-align: top;
      margin: 0 0.75em 0 0;
      transform: rotate(${props => (props.isOpen ? "45deg" : "0")});
      transition: transform 0.25s ease-in-out;
    }

    ${mediaMin.tabletLandscape`
      display: none;
    `}
  }
`;

export const Indicator = css`
  display: inline-block;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  margin: 0;
  padding: 3px ${props => props.theme.mobileMargin}px 0;
  width: auto;
  opacity: 0;
  line-height: ${props => props.theme.headerHeight}px;
  animation: ${enterFadeIn};
  will-change: opacity;
  transition: all 0.25s ease-in-out;
  text-transform: uppercase;

  ${mediaMin.tabletLandscape`
    display:none;
  `}
`;
