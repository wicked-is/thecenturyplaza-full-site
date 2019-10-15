import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Context from "../../config/Context";
import {
  SlideMaskStyled,
  SlideContainerStyled,
  CrossFadeStyled
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

const CrossFade = styled.div`
  ${CrossFadeStyled};
`;

// Will be refactoring props to Context as needed
// Comments only temporary

const CrossFadeSlide = ({
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
    scrollCooldown,
    isExisting,
    triggerExit,
    setIsExisting,
    activeCrossFade,
    setActiveCrossFade,
    currentSlideIndex,
    currentSectionIndex
  } = context;

  const toggleImage = direction => {
    if (direction === "up") {
      if (activeCrossFade === 1) {
        triggerExit(previousPath);
      } else if (activeCrossFade === 2) {
        scrollCooldown(1000);
        setTimeout(() => {
          setActiveCrossFade(1);
        }, 500);
      } else if (activeCrossFade === 3) {
        scrollCooldown(1000);
        setTimeout(() => {
          setActiveCrossFade(2);
        }, 500);
      }
    } else if (direction === "down") {
      if (activeCrossFade === 1) {
        scrollCooldown(1000);
        setTimeout(() => {
          setActiveCrossFade(2);
        }, 500);
      } else if (activeCrossFade === 2) {
        scrollCooldown(1000);
        setTimeout(() => {
          setActiveCrossFade(3);
        }, 500);
      } else if (activeCrossFade === 3) {
        triggerExit(nextPath);
      }
    }
  };

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
        toggleImage("up");
      }}
      downHandler={() => {
        toggleImage("down");
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
          <CrossFade activeCrossFade={activeCrossFade}>
            {slide.source.map((source, index) => (
              <div key={index}>
                <ResponsiveImage srcPath={source} />
              </div>
            ))}
          </CrossFade>
        </SlideContainer>
      </SlideMask>
    </ReactScrollWheelHandler>
  );
};
export default CrossFadeSlide;
