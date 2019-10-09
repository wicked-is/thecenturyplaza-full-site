import React, { useState, useEffect, useContext } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import ReactPlayer from "react-player";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Context from "config/Context";
import {
  SlideContainerStyled,
  PlayerContainerStyled,
  FullScreenStyled,
  PlaceHolderStyled
} from "Primary/style.js";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";
import InnerScrollController from "shared/components/VideoScrollController.jsx";
import ResponsiveImage from "shared/components/ResponsiveImage.js";

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
  ${PlaceHolderStyled};
`;

const videoElement = () => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  background: "transparent",
  zIndex: "500"
});

const VideoSlide = ({
  slide,
  nextPath,
  previousPath,
  isExpanded,
  isFirstSection,
  isFirstSlide,
  toggleExpand,
  closeExpand,
  firstSectionSlide,
  sectionIndex,
  slideIndex
}) => {
  const context = useContext(Context);
  const {
    pauseScroll,
    scrollCooldown,
    hasPlayed,
    markPlayed,
    currentSlideIndex,
    currentSectionIndex
  } = context;

  const [isPlaying, setIsPlaying] = useState(false);

  const startTimer = () => {
    toggleExpand();
    setTimeout(() => {
      closeExpand();
    }, slide.delay);
  };

  const removePlaceholder = () => {
    setTimeout(() => {
      setIsPlaying(true);
    }, 100);
  };

  useEffect(() => {
    if (isFirstSection && isFirstSlide && !hasPlayed) {
      startTimer();
      markPlayed();
    }
  }, [isFirstSection, isFirstSlide, hasPlayed, markPlayed]);

  useEffect(() => {
    currentSectionIndex(sectionIndex);
    currentSlideIndex(slideIndex);
  }, [currentSectionIndex, sectionIndex, currentSlideIndex, slideIndex]);

  return (
    <ReactScrollWheelHandler
      pauseListeners={pauseScroll}
      upHandler={() => {
        isExpanded && toggleExpand();
        !isExpanded && isFirstSection && isFirstSlide && toggleExpand();
        !isExpanded &&
          !isFirstSection &&
          !isFirstSlide &&
          navigate(previousPath);
        !isExpanded &&
          !isFirstSection &&
          isFirstSlide &&
          navigate(previousPath);
        !isExpanded &&
          isFirstSection &&
          !isFirstSlide &&
          navigate(previousPath);
        scrollCooldown();
      }}
      downHandler={() => {
        isExpanded ? toggleExpand() : navigate(nextPath);
        scrollCooldown();
      }}
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
          <FullScreen isExpanded={isExpanded}>
            <PlaceHolder isPlaying={isPlaying} isExpanded={isExpanded}>
              <ResponsiveImage srcPath={slide.placeholder} />
            </PlaceHolder>
            <ReactPlayer
              url={slide.source[0]}
              muted
              playing
              playsinline
              loop
              width="100vw"
              height="100vh"
              onStart={removePlaceholder}
              style={videoElement(isExpanded)}
              preload="true"
            />
          </FullScreen>
        </PlayerContainer>
      </SlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default VideoSlide;
