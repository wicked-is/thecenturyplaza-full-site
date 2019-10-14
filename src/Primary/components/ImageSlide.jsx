import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Context from "../../config/Context";
import {
  SlideMaskStyled,
  SlideContainerStyled,
  ImageSoloStyled
} from "Primary/style.js";
import ResponsiveImage from "shared/components/ResponsiveImage.js";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";
import primaryData from "Primary/primaryData.json";

const SlideMask = styled.div`
  ${SlideMaskStyled};
`;
const SlideContainer = styled.div`
  ${SlideContainerStyled};
`;
const ImageSolo = styled.div`
  ${ImageSoloStyled};
`;

// Will be refactoring props to Context as needed
// Comments only temporary

const ImageSlide = ({
  slide, // Object
  nextPath, //Path for Naigation
  previousPath, //Path for Navigation
  firstSlide, // Refactor
  firstSectionSlide, //Refactor
  lastSlide, //Refactor
  lastSectionSlide, //Refactor
  isFirstSection, //Refactor
  isFirstSlide, //Refactor
  sectionIndex, //Used For FooterCaptions
  slideIndex //Used For FooterCaptions
}) => {
  const context = useContext(Context);
  const {
    pauseScroll,
    isExisting,
    triggerExit,
    setIsExisting,
    currentSlideIndex,
    currentSectionIndex
  } = context;

  useEffect(() => {
    currentSectionIndex(sectionIndex);
    currentSlideIndex(slideIndex);
  }, [currentSectionIndex, sectionIndex, currentSlideIndex, slideIndex]);

  useEffect(() => {
    return () => {
      setIsExisting(false);
    };
  }, [setIsExisting]);

  return (
    <ReactScrollWheelHandler
      pauseListeners={pauseScroll}
      upHandler={() => {
        triggerExit(previousPath);
      }}
      downHandler={() => {
        triggerExit(nextPath);
      }}
    >
      <SlideMask
        lastSectionSlide={lastSectionSlide}
        lastSlide={lastSlide}
        isExisting={isExisting}
      >
        <SlideContainer>
          <SlideBackward previousPath={previousPath} />
          <SlideForward nextPath={nextPath} />
          <ImageSolo>
            <ResponsiveImage srcPath={slide.source[0]} />
          </ImageSolo>
        </SlideContainer>
      </SlideMask>
    </ReactScrollWheelHandler>
  );
};
export default ImageSlide;
