import React, { useContext } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import styled from "styled-components";
import { navigate, Location } from "@reach/router";

import Context from "config/Context";
import { fadeIn } from "shared/styled-components/Transitions.js";

const InnerScrollContainer = styled.span`
  position: absolute;
  transition: all 0.5s linear;
  ${
    "" /* transition: ${props =>
    props.isExpanded
      ? "0"
      : "height 0.5s linear, width 0.5s linear, top 0.5s linear, left 0.5s linear"}; */
  }
  top: ${props => (props.isExpanded ? "0" : "80px")};
  left: ${props => (props.isExpanded ? "0" : "40px")};
  display: inline-block;
  width: ${props => (props.isExpanded ? "100vw" : "calc(100vw - 80px)")};
  height: ${props => (props.isExpanded ? "100vh" : "calc(100vh - 160px)")};
  margin: 0;
  z-index: 600;
`;

const ScrollController = ({
  previousPath,
  nextPath,
  isExpanded,
  closeExpand,
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
