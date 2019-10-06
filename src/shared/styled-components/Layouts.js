import { css } from "styled-components";
import { fadeIn } from "shared/styled-components/Transitions.js";
import { mediaMin } from "shared/styled-components/MediaQueries.js";

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
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  will-change: opacity;

  ${mediaMin.tabletLandscape`
    width: calc(100vw - ${props =>
      parseFloat(props.theme.desktopMargin) * 2}px);
    margin: 0 ${props => props.theme.desktopMargin}px;
  `}
`;

export const ViewportWrapper = css`
  ${Wrapper}
  align-items: center;
  width: ${props =>
    props.isExpanded
      ? "100vw"
      : "calc(100vw - " + props.theme.mobileMargin * 2 + "px)"};
  height: ${props =>
    props.isExpanded
      ? "100vh"
      : "calc(100vh - " + props.theme.headerHeight * 2 + "px)"};
  margin: ${props =>
    props.isExpanded ? "0" : "0 " + props.theme.mobileMargin + "px"};
  padding: ${props =>
    props.isExpanded ? "0" : props.theme.headerHeight + "px 0"};

  ${mediaMin.tabletLandscape`
    width: ${props =>
      props.isExpanded
        ? "100vw"
        : "calc(100vw - " + props.theme.desktopMargin * 2 + "px)"};
    margin: ${props =>
      props.isExpanded ? "0" : "0 " + props.theme.desktopMargin + "px"};  
  `}
`;

export const Container = css`
  height: auto;
  width: 100%;
  margin: 0;

  ${mediaMin.tabletLandscape`
    width: 100%;
  `}
`;
