import React, { useContext, useEffect } from "react";
import styled from "styled-components";
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

// Will be refactoring props to Context as needed
// Comments only temporary

const ImageSlide = ({
  slide, // Object
  nextPath, //Path for Naigation
  previousPath, //Path for Navigation
  isExpanded, //Check for Expansion
  firstSlide, // Refactor
  firstSectionSlide, //Refactor
  lastSlide, //Refactor
  lastSectionSlide, //Refactor
  isFirstSection, //Refactor
  isFirstSlide, //Refactor
  toggleExpand, //Toggle Expansion
  closeExpand, //Force Close Expansion
  previousSlideImage, //Back to Back Images
  nextSlideImage, // Back to Back Images
  sectionIndex, //Refactor
  slideIndex //Refactor
}) => {
  const context = useContext(Context);
  const {
    pauseScroll,
    isExisting,
    triggerExit,
    currentSlideIndex,
    currentSectionIndex
  } = context;

  useEffect(() => {
    currentSectionIndex(sectionIndex);
    currentSlideIndex(slideIndex);
  }, [currentSectionIndex, sectionIndex, currentSlideIndex, slideIndex]);

  return (
    <React.Fragment>
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
          </SlideContainer>
        </SlideMask>
      </ReactScrollWheelHandler>
      {/* <Previous></Previous>
      <NextImage></NextImage> */}
    </React.Fragment>
  );
};
export default ImageSlide;
