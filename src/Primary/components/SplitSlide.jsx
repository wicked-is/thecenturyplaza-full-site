import React, { useContext, useEffect } from "react";
import styled from "styled-components/macro";
import parse from "html-react-parser";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Context from "../../config/Context";
import { SlideShow } from "shared/styled-components/SlideShow.js";
import {
  SlideMaskStyled,
  SplitSlideContainerStyled,
  SplitImageContainerStyled
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
  ${SplitImageContainerStyled};
`;

const ImageSlideShow = styled.div`
  ${SlideShow};
`;

const SplitSlide = ({
  slide, // Oobject
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
