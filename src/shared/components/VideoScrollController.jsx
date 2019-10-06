import React, { useContext } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import styled from "styled-components";
import { navigate } from "@reach/router";
import Context from "config/Context";
import { mediaMin } from "shared/styled-components/MediaQueries.js";

const InnerScrollContainer = styled.span`
  position: absolute;
  transition: all 0.5s ease-in-out;
  top: ${props => (props.isExpanded ? "0" : props.theme.headerHeight + "px")};
  left: ${props => (props.isExpanded ? "0" : props.theme.mobileMargin + "px")};
  display: inline-block;
  width: ${props =>
    props.isExpanded
      ? "100vw"
      : "calc(100vw - " + parseFloat(props.theme.mobileMargin) * 2 + "px)"};
  height: ${props =>
    props.isExpanded
      ? "100vh"
      : "calc(100vh - " + parseFloat(props.theme.headerHeight) * 2 + "px)"};
  margin: 0;
  z-index: 600;

  ${mediaMin.tabletLandscape`
    width: ${props =>
      props.isExpanded
        ? "100vw"
        : "calc(100vw - " + parseFloat(props.theme.desktopMargin) * 2 + "px)"};
    left: ${props =>
      props.isExpanded ? "0" : props.theme.desktopMargin + "px"};
  `}
`;

const ScrollController = ({
  previousPath,
  nextPath,
  isExpanded,
  isFirstSection,
  isFirstSlide,
  toggleExpand
}) => {
  const context = useContext(Context);
  const { pauseScroll, scrollCooldown } = context;

  return (
    <InnerScrollContainer isExpanded={isExpanded}>
      <ReactScrollWheelHandler
        pauseListeners={pauseScroll}
        upHandler={() => {
          isExpanded && toggleExpand();
          !isExpanded && isFirstSection && isFirstSlide && toggleExpand();
          !isExpanded &&
            !isFirstSection &&
            !isFirstSlide &&
            navigate(previousPath);
          !isExpanded &&
            !isFirstSection &&
            isFirstSlide &&
            navigate(previousPath);
          !isExpanded &&
            isFirstSection &&
            !isFirstSlide &&
            navigate(previousPath);
          scrollCooldown();
        }}
        downHandler={() => {
          isExpanded ? toggleExpand() : navigate(nextPath);
          scrollCooldown();
        }}
      ></ReactScrollWheelHandler>
    </InnerScrollContainer>
  );
};
export default ScrollController;
