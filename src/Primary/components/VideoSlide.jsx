import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components/macro';
import ReactPlayer from 'react-player';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import Context from '../../config/Context';
import {
  SlideMaskStyled,
  SlideContainerStyled,
  PlayerContainerStyled,
  FullScreenStyled
} from 'Primary/style.js';
import SlideForward from 'shared/components/SlideForward.jsx';
import SlideBackward from 'shared/components/SlideBackward.jsx';
import SlideVideoScrollController from 'shared/components/SlideVideoScrollController.jsx';
import ResponsiveImage from 'shared/components/ResponsiveImage.js';
import { mediaMin } from 'shared/styled-components/MediaQueries';
import CPLogo from 'icons/logo-white-with-sub.svg';

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
  z-index: ${props => (props.activePlaceholder ? '900' : '100')};

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
    display: inline-block;
    position: relative;
  }
`;

const Logo = styled.img`
  width: 80%;
  ${mediaMin.tabletLandscape`
    width: 40%;
  `}
  z-index: 1000;
  opacity: ${props => (props.isExpanded ? '1' : '0')};
  visibility: ${props => (props.isExpanded ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;
`;

const videoElement = () => ({
  width: '100vw',
  height: '56.25vw',
  minHeight: '100vh',
  minWidth: '177.77vh',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'transparent',
  zIndex: '500'
});

const VideoSlide = ({
  slide, // Oobject
  nextPath, //Path for Naigation
  previousPath, //Path for Navigation
  isExpanded, //Check for Expansion
  // firstSlide, //Previosuly Used for Intro View
  firstSectionSlide, //Used for Intro View
  isFirstSection, //Used for Video Transition Option
  isFirstSlide, //Used for Video Transition Option
  toggleExpand, //Toggle Expansion
  closeExpand, //Force Close Expansion
  sectionIndex, //Used For FooterCaptions
  slideIndex //Used For FooterCaptions
}) => {
  const context = useContext(Context);
  const VideoRef = useRef(null);
  const {
    firstLocation,
    pauseScroll,
    isExisting,
    setIsExisting,
    triggerExit,
    hasPlayed,
    markPlayed,
    currentSlideIndex,
    currentSectionIndex
  } = context;

  const [activePlaceholder, setActivePlaceholder] = useState(true);
  const [startVideo, setStartVideo] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  setTimeout(() => setShowVideo(true), 2000);

  const startTimer = () => {
    setTimeout(() => {
      closeExpand();
    }, slide.delay);
  };

  const removePlaceholder = () => {
    setStartVideo(true);
    setActivePlaceholder(false);
  };

  useEffect(() => {
    if (
      isFirstSection &&
      isFirstSlide &&
      !hasPlayed &&
      (firstLocation === window.location.pathname || firstLocation === '/')
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
      setIsExisting(false);
    };
  }, [setIsExisting]);

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
      rightHandler={() => {
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
      leftHandler={() => {
        isExpanded ? toggleExpand() : triggerExit(nextPath);
      }}
    >
      <SlideMask
        isExisting={isExisting}
        isFirstSlide={isFirstSlide}
        isFirstSection={isFirstSection}
        // firstShouldSwipe={firstShouldSwipe}
      >
        <SlideContainer isExpanded={isExpanded}>
          <SlideBackward previousPath={previousPath} isExpanded={isExpanded} />
          <SlideForward nextPath={nextPath} isExpanded={isExpanded} />
          <SlideVideoScrollController
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
              <Logo
                src={CPLogo}
                alt="century plaza logo"
                isExpanded={isExpanded}
              />
              <PlaceHolder
                activePlaceholder={activePlaceholder}
                isExpanded={isExpanded}
              >
                <ResponsiveImage srcPath={slide.placeholder} />
              </PlaceHolder>
              {
                showVideo ?
                  <ReactPlayer
                    ref={VideoRef}
                    url={
                      window.innerWidth < 1024 && window.mobileSource
                        ? slide.mobileSource[0]
                        : slide.source[0]
                    }
                    muted
                    loop
                    playing={startVideo}
                    onProgress={progress => {
                      if (progress.played >= 0.95) {
                        VideoRef.current.seekTo(0);
                      }
                    }}
                    onEnded={() => {
                      VideoRef.current.seekTo(0);
                    }}
                    playsinline
                    width="100vw"
                    height="56.25vw"
                    onReady={removePlaceholder}
                    style={videoElement()}
                    preload="true"
                    config={{
                      vimeo: {
                        playerVars: { transparent: true }
                      }
                    }}
                  /> : null
              }
            </FullScreen>
          </PlayerContainer>
        </SlideContainer>
      </SlideMask>
    </ReactScrollWheelHandler>
  );
};
export default VideoSlide;
