import React from "react";
import styled from "styled-components";
import { cascadeText } from "shared/styled-components/Transitions.js";
import parse from "html-react-parser";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";
import { navigate } from "@reach/router";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

// Wil be refactored into global slide styled compontent
const TextSlideContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 160px);
  ${'' /* opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 0.25s forwards;
  will-change: opacity; */}
  

  h2 {
    font-family:  ${props => props.theme.serifMedium};
    font-size: 34px;
    letter-spacing: .34px;    
    width: 55vw;
    text-align: center;
    position: relative;
  }

  p {
    position: absolute;
    bottom: 30px;
    left: 40px;
    margin: 0;
  }
`

const TransMask = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200%;
    background: linear-gradient(0deg, rgba(255,255,255,1) 45%, rgba(255,255,255,0) 100%);
    animation: ${cascadeText} 1.5s ease-in forwards;
    will-change: transform;
`

const TextSlide = props => {
  const { slide, nextPath, previousPath, toggleExpand, closeExpand } = props;

  return (
    <ReactScrollWheelHandler
      pauseListeners={true}
      upHandler={() => {
        // console.log("scroll up");
        closeExpand();
        navigate(previousPath);
      }}
      downHandler={() => {
        // console.log("scroll down")
        closeExpand();
        navigate(nextPath);
      }}
    >
      <TextSlideContainer>
        <SlideBackward previousPath={previousPath} />
        <SlideForward nextPath={nextPath} />
        {slide.headline.length > 0 && <h2><TransMask />{parse(slide.headline)}</h2>}
        {slide.caption.length > 0 && <p>{parse(slide.caption)}</p>}
      </TextSlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default TextSlide;
