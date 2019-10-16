import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Context from "../../config/Context";
import {
  SlideMaskStyled,
  SlideContainerStyled,
  PlayerContainerStyled,
  FullScreenStyled
} from "Primary/style.js";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";
import InnerScrollController from "shared/components/VideoScrollController.jsx";
import ResponsiveImage from "shared/components/ResponsiveImage.js";

const SlideMask = styled.div`
  ${SlideMaskStyled};
`;

const SlideContainer = styled.div`
  ${SlideContainerStyled};
`;

const PlayerContainer = styled.div`
  ${PlayerContainerStyled};
`;

const FullScreen = styled.div`
  ${FullScreenStyled};
`;

const PlaceHolder = styled.div`
  width: 100vw;
  height: 56.25vw;
  min-height: 100vh;
  min-width: 177.77vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: ${props => (props.activePlaceholder ? "900" : "100")};

  img {
    width: 100vw;
    height: 56.25vw;
    min-height: 100vh;
    min-width: 177.77vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0;
    display: block;
    position: relative;
    width: auto;
    height: auto;
    object-fit: cover;
  }
`;

const videoElement = () => ({
  width: "100vw",
  height: "56.25vw",
  minHeight: "100vh",
  minWidth: "177.77vh",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "transparent",
  zIndex: "500"
});

// Will be refactoring props to Context as needed
// Comments only temporary

const VideoSlide = ({
  slide, // Oobject
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
  sectionIndex, //Used For FooterCaptions
  slideIndex //Used For FooterCaptions
}) => {
  const context = useContext(Context);
  const {
    globalConfig,
    pauseScroll,
    isExisting,
    setIsExisting,
    triggerExit,
    hasPlayed,
    markPlayed,
    // firstShouldSwipe,
    // setFirstShouldSwipe,
    currentSlideIndex,
    currentSectionIndex
  } = context;

  const [activePlaceholder, setActivePlaceholder] = useState(true);
  const [startVideo, setStartVideo] = useState(false);

  const startTimer = () => {
    toggleExpand();
    setTimeout(() => {
      closeExpand();
    }, slide.delay);
  };

  const removePlaceholder = () => {
    setActivePlaceholder(false);
    setStartVideo(true);
  };

  useEffect(() => {
    if (
      isFirstSection &&
      isFirstSlide &&
      !hasPlayed &&
      (globalConfig.firstLocation === window.location.pathname ||
        globalConfig.firstLocation === "/")
    ) {
      startTimer();
      markPlayed();
    }
  });

  useEffect(() => {
    currentSectionIndex(sectionIndex);
    currentSlideIndex(slideIndex);
  }, [currentSectionIndex, sectionIndex, currentSlideIndex, slideIndex]);

  useEffect(() => {
    return () => {
      closeExpand();
      setIsExisting(false);
    };
  }, [setIsExisting, closeExpand]);

  return (
    <ReactScrollWheelHandler
      pauseListeners={pauseScroll}
      upHandler={() => {
        isExpanded && toggleExpand();
        !isExpanded && isFirstSection && isFirstSlide && toggleExpand();
        !isExpanded &&
          !isFirstSection &&
          !isFirstSlide &&
          triggerExit(previousPath);
        !isExpanded &&
          !isFirstSection &&
          isFirstSlide &&
          triggerExit(previousPath);
        !isExpanded &&
          isFirstSection &&
          !isFirstSlide &&
          triggerExit(previousPath);
      }}
      downHandler={() => {
        isExpanded ? toggleExpand() : triggerExit(nextPath);
      }}
    >
      <SlideMask
        lastSectionSlide={lastSectionSlide}
        lastSlide={lastSlide}
        isExisting={isExisting}
        isFirstSlide={isFirstSlide}
        isFirstSection={isFirstSection}
        // firstShouldSwipe={firstShouldSwipe}
      >
        <SlideContainer isExpanded={isExpanded}>
          <SlideBackward previousPath={previousPath} isExpanded={isExpanded} />
          <SlideForward nextPath={nextPath} isExpanded={isExpanded} />
          <InnerScrollController
            nextPath={nextPath}
            previousPath={previousPath}
            isExpanded={isExpanded}
            isFirstSection={isFirstSection}
            isFirstSlide={isFirstSlide}
            toggleExpand={toggleExpand}
          />
          <PlayerContainer
            isExpanded={isExpanded}
            firstSectionSlide={firstSectionSlide}
          >
            <FullScreen
              isExpanded={isExpanded}
              // placeholder={"/" + slide.placeholder + "_1500.jpg"}
            >
              <PlaceHolder
                activePlaceholder={activePlaceholder}
                isExpanded={isExpanded}
              >
                <ResponsiveImage srcPath={slide.placeholder} />
              </PlaceHolder>
              <ReactPlayer
                url={slide.source[0]}
                muted
                playing={startVideo}
                playsinline
                loop
                width="100vw"
                height="56.25vw"
                onReady={removePlaceholder}
                style={videoElement(isExpanded)}
              />
            </FullScreen>
          </PlayerContainer>
        </SlideContainer>
      </SlideMask>
    </ReactScrollWheelHandler>
  );
};
export default VideoSlide;
