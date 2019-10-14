import React, { useContext, useEffect, useState } from "react";
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
    currentSlideIndex,
    currentSectionIndex
  } = context;

  const [activeImage, setActiveImage] = useState("1");

  const toggleImage = direction => {
    scrollCooldown(1000);

    activeImage === "1" &&
      direction === "down" &&
      console.log("start crossfade 1 to 2");
    setTimeout(() => {
      setActiveImage("2");
      console.log("end crossfade 1 to 2");
    }, 500);
    activeImage === "2" &&
      direction === "down" &&
      console.log("start crossfade 2 to 3");
    setTimeout(() => {
      setActiveImage("3");
      console.log("end crossfade 2 to 3");
    }, 500);
    activeImage === "3" && direction === "down" && triggerExit(nextPath);

    activeImage === "3" &&
      direction === "up" &&
      console.log("start crossfade 3 to 2");
    setTimeout(() => {
      setActiveImage("2");
      console.log("end crossfade 3 to 2");
    }, 500);
    activeImage === "2" &&
      direction === "up" &&
      console.log("start crossfade 2 to 1");
    setTimeout(() => {
      setActiveImage("1");
    }, 500);
    activeImage === "1" && direction === "up" && triggerExit(previousPath);
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
        triggerExit(previousPath);
        // toggleImage("up");
      }}
      downHandler={() => {
        triggerExit(nextPath);
        // toggleImage("down");
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
          <CrossFade activeImage={activeImage}>
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
