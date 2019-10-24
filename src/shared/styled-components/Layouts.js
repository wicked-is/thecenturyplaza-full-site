import { css } from "styled-components";
import { mediaMin } from "shared/styled-components/MediaQueries.js";
import { enterFadeIn } from "shared/styled-components/Transitions.js";

export const Wrapper = css`
  width: calc(100vw - ${props =>
    parseFloat(props.theme.mobileSideMargin) * 2}px);
  margin: 0 ${props => props.theme.mobileSideMargin}px;
  height: ${props => (props.navActive ? "0" : "auto")};
  padding: ${props =>
    props.navActive ? "0" : props.theme.mobilePortraitHeaderHeight + "px 0 0"};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;
  background: transparent;
  visibility: ${props => (props.navActive ? "hidden" : "visible")};
  ${"" /* overflow: hidden; */}

  ${mediaMin.phoneXL`
    padding: ${props =>
      props.navActive
        ? "0"
        : props.theme.mobileLandscapeHeaderHeight + "px 0 0"};
    `}

  ${mediaMin.tablet`
    padding: ${props =>
      props.navActive ? "0" : props.theme.desktopHeaderHeight + "px 0 0"};
  `}

  ${mediaMin.tabletLandscape`
    width: calc(100vw - ${props =>
      parseFloat(props.theme.desktopSideMargin) * 2}px);
    margin: 0 ${props => props.theme.desktopSideMargin}px;
    padding: ${props =>
      props.navActive ? "0" : props.theme.desktopHeaderHeight + "px 0"};
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
  align-items: center;
  width: 100vw;
  height: ${props =>
    props.isExpanded
      ? "100%"
      : "calc(100% - " +
        parseFloat(props.theme.mobilePortraitHeaderHeight * 2) +
        "px)"};
  margin: 0;
  padding: ${props =>
    props.isExpanded ? "0" : props.theme.mobilePortraitHeaderHeight + "px 0"};

  ${mediaMin.phoneXL`
    height: ${props =>
      props.isExpanded
        ? "100%"
        : "calc(100% - " +
          parseFloat(props.theme.mobileLandscapeHeaderHeight * 2) +
          "px)"};
    padding: ${props =>
      props.isExpanded
        ? "0"
        : props.theme.mobileLandscapeHeaderHeight + "px 0"};

  `}

  ${mediaMin.tablet`
  height: ${props =>
    props.isExpanded
      ? "100%"
      : "calc(100% - " +
        parseFloat(props.theme.desktopHeaderHeight * 2) +
        "px)"};
      padding: ${props =>
        props.isExpanded ? "0" : props.theme.desktopHeaderHeight + "px 0"};

  `}

  ${mediaMin.tabletLandscape`
    width: 100vw;
    margin: 0;
  `}
`;

export const Container = css`
  display: ${props => (props.navActive ? "none" : "inline-block")};
  height: auto;
  width: auto;
  margin: 20px 0;
  min-height: calc(100vh - ${props =>
    parseFloat(props.theme.mobilePortraitHeaderHeight) * 2}px - 40px);

  ${mediaMin.phoneXL`
    min-height: calc(100vh - ${props =>
      parseFloat(props.theme.mobileLandscapeHeaderHeight) * 2}px - 40px);
  `}

  ${mediaMin.tabletLandscape`
    width: 100%;
    margin: 40px 0;
    min-height: calc(100vh - ${props =>
      parseFloat(props.theme.desktopHeaderHeight) * 2}px - 80px);
  `}

  ${mediaMin.desktop`
    width: 100%;
    margin: 80px 0 40px;
  `}
`;
