import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { fadeIn } from "shared/styled-components/Transitions.js";

import leftArrowBlackPNG from 'icons/left-arrow-black.png';
import leftArrowBlackSVG from 'icons/left-arrow-black.svg';
import leftArrowGrayPNG from 'icons/left-arrow-gray.png';
import leftArrowGraySVG from 'icons/left-arrow-gray.svg';

const SlideBackwardContainer = styled.span`
  position: absolute;
  left: 0;
  top: 100px;
  display: inline-block;
  width: 100px;
  height: calc(100vh - 200px);
  margin: 0;
  z-index: 600;
  animation: ${fadeIn} 0.5s ease-in-out forwards;

  a {
    display: inline-block;
    text-indent: -9999px;
    text-decoration: none;
    width: 100%;
    height: 100%;
    ${'' /* background: url(${leftArrowGrayPNG}) no-repeat center center;
    background: url(${leftArrowGraySVG}) no-repeat center center, none; */}
    transition: all 0.5s ease-in-out;
    opacity: 0;
    ${'' /* opacity: ${props => props.isExpanded ? "0" : "1"};  */}

    &:hover {
      opacity: 1;
      ${'' /* background: url(${leftArrowBlackPNG}) no-repeat center center;
      background: url(${leftArrowBlackSVG}) no-repeat center center, none;       */}
    }
  }
`

const SlideBackward = props => {

  const { previousPath, isFull, isExpanded } = props;

  return (
    <SlideBackwardContainer isExpanded={isExpanded} isFull={isFull}>
      <Link to={previousPath}>&larr;</Link>
    </SlideBackwardContainer>
  );
};
export default SlideBackward;
