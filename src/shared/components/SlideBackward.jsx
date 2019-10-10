import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { mediaMin } from "../styled-components/MediaQueries.js";

const SlideBackwardContainer = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  width: ${props => props.theme.mobileMargin + "px"};
  height: 100vh;
  margin: 0;
  z-index: 600;
  background: ${props => props.theme.white};
  transition: transform 0.5s ease-in-out;
  transform: translateX(
    ${props => (props.isExpanded ? "-" + props.theme.mobileMargin + "px" : "0")}
  );

  ${mediaMin.tabletLandscape` 
    width: ${props => props.theme.desktopMargin + "px"};
    transform: translateX(${props =>
      props.isExpanded ? "-" + props.theme.desktopMargin + "px" : "0"});
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
