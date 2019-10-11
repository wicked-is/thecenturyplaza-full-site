import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Context from "../../config/Context";
import {
  SlideMaskStyled,
  SlideContainerStyled,
  ImageSoloStyled,
  CrossFadeStyled,
  CrossFadeCurrentStyled,
  CrossFadePreviousStyled,
  CrossFadeNextStyled
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

const CrossFade = styled.div`
  ${CrossFadeStyled};
`;

const CrossFadeCurrent = styled.div`
  ${CrossFadeCurrentStyled};
`;

const CrossFadePrevious = styled.div`
  ${CrossFadePreviousStyled};
`;

const CrossFadeNext = styled.div`
  ${CrossFadeNextStyled};
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
  scrollUpCrossFade, //Back to Back Images
  scrollDownCrossFade, //Back to Back Images
  sectionIndex, //Used For FooterCaptions
  slideIndex //Used For FooterCaptions
}) => {
  const context = useContext(Context);
  const {
    pauseScroll,
    isExisting,
    triggerExit,
    setIsExisting,
    // triggerCrossFadeUp,
    // triggerCrossFadeDown,
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
        // scrollUpCrossFade || scrollDownCrossFade
        //   ? triggerCrossFadeUp(previousPath)
        //   : triggerExit(previousPath);
      }}
      downHandler={() => {
        triggerExit(nextPath);
        // scrollUpCrossFade || scrollDownCrossFade
        //   ? triggerCrossFadeDown(nextPath)
        //   : triggerExit(nextPath);
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
          {!scrollUpCrossFade && !scrollDownCrossFade && (
            <ImageSolo>
              <ResponsiveImage srcPath={slide.source[0]} />
            </ImageSolo>
          )}
          {(scrollUpCrossFade || scrollDownCrossFade) && (
            <CrossFade>
              <CrossFadeCurrent>
                <ResponsiveImage srcPath={slide.source[0]} />
              </CrossFadeCurrent>
              {scrollUpCrossFade && (
                <CrossFadePrevious>
                  <ResponsiveImage
                    srcPath={
                      primaryData[sectionIndex].slides[slideIndex - 1].source[0]
                    }
                  />
                </CrossFadePrevious>
              )}
              {scrollDownCrossFade && (
                <CrossFadeNext>
                  <ResponsiveImage
                    srcPath={
                      primaryData[sectionIndex].slides[slideIndex + 1].source[0]
                    }
                  />
                </CrossFadeNext>
              )}
            </CrossFade>
          )}
        </SlideContainer>
      </SlideMask>
    </ReactScrollWheelHandler>
  );
};
export default ImageSlide;
