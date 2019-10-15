import { css } from "styled-components";
import { mediaMin } from "shared/styled-components/MediaQueries.js";
import { enterFadeIn } from "shared/styled-components/Transitions.js";

export const Wrapper = css`
  width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);
  min-height: calc(
    100vh - ${props => parseFloat(props.theme.headerHeight) * 2}px
  );
  margin: 0 ${props => props.theme.mobileMargin}px;
  padding: ${props => props.theme.headerHeight}px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;
  background: transparent;

  ${mediaMin.tabletLandscape`
    width: calc(100vw - ${props =>
      parseFloat(props.theme.desktopMargin) * 2}px);
    margin: 0 ${props => props.theme.desktopMargin}px;
  `}
`;

export const ViewportWrapper = css`
  ${Wrapper}
  opacity: 1;
  animation: none;
  will-change: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  width: 100vw;
  height: ${props =>
    props.isExpanded
      ? "100vh"
      : "calc(100vh - " + parseFloat(props.theme.headerHeight * 2) + "px)"};
  margin: 0;
  padding: ${props =>
    props.isExpanded ? "0" : props.theme.headerHeight + "px 0"};

  ${mediaMin.tablet`
  height: ${props =>
    props.isExpanded
      ? "100vh"
      : "calc(100vh - " +
        parseFloat(props.theme.headerHeight * 2) +
        "px - " +
        props.theme.browserBottom +
        "px)"};
  `}

  ${mediaMin.tabletLandscape`
    width: 100vw;
    margin: 0;
  `}
`;

export const Container = css`
  height: auto;
  width: auto;
  margin: 20px 0 0;

  ${mediaMin.tabletLandscape`
    width: 100%;
    margin: 40px 0 0;
  `}

  ${mediaMin.desktop`
    width: 100%;
    margin: 80px 0 0;
  `}
`;
