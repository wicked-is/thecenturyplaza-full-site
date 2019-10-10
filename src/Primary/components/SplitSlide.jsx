import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Context from "../../config/Context";
import { SlideShow } from "shared/styled-components/SlideShow.js";
import {
  SlideMaskStyled,
  SplitSlideContainerStyled,
  ImageContainerStyled
} from "Primary/style.js";
import ResponsiveImage from "shared/components/ResponsiveImage.js";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";

const SlideMask = styled.div`
  ${SlideMaskStyled};
`;

const SlideContainer = styled.div`
  ${SplitSlideContainerStyled};
`;

const ImageContainer = styled.div`
  ${ImageContainerStyled};
`;

const ImageSlideShow = styled.div`
  ${SlideShow};
`;

// Will be refactoring props to Context as needed
// Comments only temporary

const SplitSlide = ({
  slide, // Oobject
  nextPath, //Path for Naigation
  previousPath, //Path for Navigation
  firstSlide, // Refactor
  firstSectionSlide, //Refactor
  lastSlide, //Refactor
  lastSectionSlide, //Refactor
  isFirstSection, //Refactor
  isFirstSlide, //Refactor
  sectionIndex, //Refactor
  slideIndex //Refactor
}) => {
  const context = useContext(Context);
  const {
    pauseScroll,
    isExisting,
    setIsExisting,
    triggerExit,
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
  }, []);

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
        <SlideContainer isInverted={slide.inverted}>
          <SlideBackward previousPath={previousPath} />
          <SlideForward nextPath={nextPath} />
          <ImageContainer isInverted={slide.inverted}>
            {slide.source.length > 1 ? (
              <ImageSlideShow>
                {" "}
                {slide.source.map((source, index) => (
                  <ResponsiveImage key={index} srcPath={source} />
                ))}{" "}
              </ImageSlideShow>
            ) : (
              <ResponsiveImage srcPath={slide.source[0]} />
            )}
          </ImageContainer>
          <h2>{parse(slide.headline)}</h2>
        </SlideContainer>
      </SlideMask>
    </ReactScrollWheelHandler>
  );
};
export default SplitSlide;
