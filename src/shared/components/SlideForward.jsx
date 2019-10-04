import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { fadeIn } from "shared/styled-components/Transitions.js";

// import rightArrowBlackPNG from "icons/right-arrow-black.png";
// import rightArrowBlackSVG from "icons/right-arrow-black.svg";
// import rightArrowGrayPNG from "icons/right-arrow-gray.png";
// import rightArrowGraySVG from "icons/right-arrow-gray.svg";

const SlideForwardContainer = styled.span`
  position: absolute;
  right: 0px;
  top: 100px;
  display: inline-block;
  width: 100px;
  height: calc(100vh - 200px);
  margin: 00;
  z-index: 600;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  will-change: opacity;

  a {
    display: inline-block;
    text-indent: -9999px;
    text-decoration: none;
    width: 100%;
    height: 100%;
    ${"" /* background: url(${rightArrowGrayPNG}) no-repeat center center;
    background: url(${rightArrowGraySVG}) no-repeat center center, none; */}
    transition: all 0.5s ease-in-out;
    opacity: 0;
    ${"" /* opacity: ${props => props.isExpanded ? "0" : "1"};  */}

    &:hover {
      opacity: 1;
      ${"" /* background: url(${rightArrowBlackPNG}) no-repeat center center;
      background: url(${rightArrowBlackSVG}) no-repeat center center, none;       */}
    }
  }
`;

const SlideForward = props => {
  const { nextPath, isExpanded, closeExpand } = props;

  return (
    <SlideForwardContainer isExpanded={isExpanded}>
      <Link to={nextPath} onClick={closeExpand}>
        &rarr;
      </Link>
    </SlideForwardContainer>
  );
};
export default SlideForward;
