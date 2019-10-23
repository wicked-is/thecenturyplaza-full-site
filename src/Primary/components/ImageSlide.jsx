import React, { useContext, useEffect } from "react";
import styled from "styled-components/macro";
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

const SlideMask = styled.div`
  ${SlideMaskStyled};
`;
const SlideContainer = styled.div`
  ${SlideContainerStyled};
`;
const ImageSolo = styled.div`
  ${ImageSoloStyled};
`;

const ImageSlide = ({
  slide, // Object
  nextPath, //Path for Naigation
  previousPath, //Path for Navigation
  // lastSlide, //Used for Swipe PreStaging
  // lastSectionSlide, //Used for Swipe PreStaging
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
      upHandler={() => triggerExit(previousPath)}
      downHandler={() => triggerExit(nextPath)}
      rightHandler={() => triggerExit(previousPath)}
      leftHandler={() => triggerExit(nextPath)}
    >
      <SlideMask
        // lastSectionSlide={lastSectionSlide}
        // lastSlide={lastSlide}
        isExisting={isExisting}
      >
        <SlideContainer>
          <SlideBackward previousPath={previousPath} />
          <SlideForward nextPath={nextPath} />
          <ImageSolo>
            <div>
              <ResponsiveImage srcPath={slide.source[0]} />
            </div>
          </ImageSolo>
        </SlideContainer>
      </SlideMask>
    </ReactScrollWheelHandler>
  );
};
export default ImageSlide;
