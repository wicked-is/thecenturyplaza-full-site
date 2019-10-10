import { css } from "styled-components";
import { fadeIn } from "shared/styled-components/Transitions.js";

export const PageBody = css`
  font-family: ${props => props.theme.sansSerifRegular}, courier;
  color: ${props => props.theme.black};
  font-size: 14px;
  letter-spacing: 0.6px;
  transition: background 0.5s ease-in-out;
  background: ${props => props.pageColor};
  min-height: 100vh;
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
  height: ${props => props.theme.headerHeight}px;
  background: ${props => props.pageColor};
  z-index: 1000;
  transition: all 0.5s ease-in-out;
  transform: translateY(
    ${props => (props.isExpanded ? "-" + props.theme.headerHeight + "px" : "0")}
  );

  header {
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in-out 0.5s forwards;
    will-change: opacity;
  }
`;

export const PageFooter = css`
  display: ${props => (props.hideFooter ? "none" : "inline-block")};
  position: ${props => (props.fixedFooter ? "fixed" : "absolute")};
  bottom: 0;
  z-index: 900;
  width: 100%;
  height: ${props => props.theme.headerHeight}px;
  background: ${props => props.pageColor};
  transition: all 0.5s ease-in-out;
  transform: translateY(
    ${props => (props.isExpanded ? props.theme.headerHeight + "px" : "0")}
  );

  footer {
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in-out 0.5s forwards;
    will-change: opacity;
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
  bottom: 30px;
  left: 40px;
  margin: 0;
  max-width: calc(100vw - 80px - 400px);
  font-weight: 300;
  font-size: 12px;
  line-height: 1.35em;
  letter-spacing: 0.05em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 0.5s forwards;
  will-change: opacity;
`;
