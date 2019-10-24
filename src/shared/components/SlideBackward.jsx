import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components/macro";
import { mediaMin } from "../styled-components/MediaQueries.js";

const SlideBackwardContainer = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  width: ${props => props.theme.mobileSideMargin + "px"};
  height: 100%;
  margin: 0;
  z-index: 600;
  background: white;
  transition: transform 0.5s ease-in-out;
  transform: translateX(
    ${props =>
      props.isExpanded ? "-" + props.theme.mobileSideMargin + "px" : "0"}
  );

  ${mediaMin.tabletLandscape` 
    width: ${props => props.theme.desktopSideMargin + "px"};
    transform: translateX(${props =>
      props.isExpanded ? "-" + props.theme.desktopSideMargin + "px" : "0"});
  `}

  a {
    display: inline-block;
    text-indent: -9999px;
    text-decoration: none;
    width: 100%;
    height: 100%;
  }
`;

const SlideBackward = props => {
  const { previousPath, isExpanded } = props;

  return (
    <SlideBackwardContainer isExpanded={isExpanded}>
      <Link to={previousPath}>&larr;</Link>
    </SlideBackwardContainer>
  );
};
export default SlideBackward;
