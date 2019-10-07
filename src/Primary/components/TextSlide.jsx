import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { navigate } from "@reach/router";
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

const TextSlide = ({
  slide,
  nextPath,
  previousPath,
  firstSlide,
  firstSectionSlide,
  lastSlide,
  lastSectionSlide,
  sectionIndex,
  slideIndex
}) => {
  const context = useContext(Context);
  const {
    pauseScroll,
    scrollCooldown,
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
      >
        <SlideContainer>
          <SlideBackward previousPath={previousPath} />
          <SlideForward nextPath={nextPath} />
          {slide.headline.length > 0 && (
            <h2>
              {/* <TextMask /> */}
              {parse(slide.headline)}
            </h2>
          )}
        </SlideContainer>
      </SlideMask>
    </ReactScrollWheelHandler>
  );
};
export default TextSlide;
