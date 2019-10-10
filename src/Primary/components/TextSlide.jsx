import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { Link } from "@reach/router";
import Context from "../../config/Context";
import { SlideMaskStyled, SlideContainerStyled } from "Primary/style.js";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";

const SlideMask = styled.div`
  ${SlideMaskStyled};
`;

const SlideContainer = styled.div`
  ${SlideContainerStyled};
`;

// Will be refactoring props to Context as needed
// Comments only temporary

const TextSlide = ({
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
    triggerExit,
    currentSlideIndex,
    currentSectionIndex
  } = context;

  useEffect(() => {
    currentSectionIndex(sectionIndex);
    currentSlideIndex(slideIndex);
  }, [currentSectionIndex, sectionIndex, currentSlideIndex, slideIndex]);

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
      <SlideMask lastSectionSlide={lastSectionSlide} lastSlide={lastSlide}>
        <SlideContainer>
          <SlideBackward previousPath={previousPath} />
          <SlideForward nextPath={nextPath} />
          {slide.headline.length > 0 && <h2>{parse(slide.headline)}</h2>}
          {slide.path.length > 0 && slide.cta.length > 0 && (
            <Link to={slide.path}>{slide.cta}</Link>
          )}
        </SlideContainer>
      </SlideMask>
    </ReactScrollWheelHandler>
  );
};
export default TextSlide;
