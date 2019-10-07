import React, { useContext } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { navigate } from "@reach/router";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import Context from "../../config/Context";
import {
  SlideMaskStyled,
  SlideContainerStyled,
  ImageFullStyled
} from "Primary/style.js";
import ResponsiveImage from "shared/components/ResponsiveImage.js";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";

const SlideMask = styled.div`
  ${SlideMaskStyled};
`;
const SlideContainer = styled.div`
  ${SlideContainerStyled};
`;
const ImageFull = styled.div`
  ${ImageFullStyled};
`;

const ImageSlide = ({
  slide,
  nextPath,
  previousPath,
  firstSlide,
  firstSectionSlide,
  lastSlide,
  lastSectionSlide,
  previousSlideImage,
  nextSlideImage
}) => {
  const context = useContext(Context);
  const { pauseScroll, scrollCooldown, isExisting, triggerExit } = context;

  return (
    <ReactScrollWheelHandler
      pauseListeners={pauseScroll}
      upHandler={() => {
        navigate(previousPath);
        scrollCooldown();
      }}
      downHandler={() => {
        triggerExit(nextPath);
      }}
    >
      <SlideMask
        isExisting={isExisting}
        lastSectionSlide={lastSectionSlide}
        lastSlide={lastSlide}
        nextSlideImage={nextSlideImage}
      >
        <SlideContainer
          previousSlideImage={previousSlideImage}
          nextSlideImage={nextSlideImage}
        >
          <SlideBackward previousPath={previousPath} />
          <SlideForward nextPath={nextPath} />
          <ImageFull
            previousSlideImage={previousSlideImage}
            nextSlideImage={nextSlideImage}
          >
            <ResponsiveImage srcPath={slide.source[0]} />
          </ImageFull>
          <p>{parse(slide.caption)}</p>
        </SlideContainer>
      </SlideMask>
    </ReactScrollWheelHandler>
  );
};
export default ImageSlide;
