import React from "react";
import styled from "styled-components";
import { fadeIn } from "shared/styled-components/Transitions.js";
import parse from "html-react-parser";
import ResponsiveImage from "shared/components/ResponsiveImage.js"
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";
import { navigate } from "@reach/router";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

// Wil be refactored into global slide styled compontent
const ImageSlideContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 160px);
  opacity: 0;
  animation: ${fadeIn} 0.25s ease-in-out forwards;
  will-change: opacity;

  &:focus {
    outline: none;
  }

  img {
    max-height: calc(80vh - 160px);
    max-width: calc(70vw - 80px);
  }

  p {
    position: absolute;
    bottom: 30px;
    left: 40px;
    margin: 0;
  }
`

const ImageSlide = props => {
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
      <ImageSlideContainer>
        <SlideBackward previousPath={previousPath} />
        <SlideForward nextPath={nextPath} />
        <ResponsiveImage srcPath={slide.source} />
        <p>{parse(slide.caption)}</p>
      </ImageSlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default ImageSlide;
