import React, { useState, useEffect, useContext } from 'react';
import { navigate, Location } from '@reach/router';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import parse from 'html-react-parser';

import Context from 'config/Context';
import {
  SlideContainerStyled,
  PlayerContainerStyled,
  FullScreenStyled,
  PlaceHolderStyled
} from 'Primary/style.js';
import SlideForward from 'shared/components/SlideForward.jsx';
import SlideBackward from 'shared/components/SlideBackward.jsx';
import ResponsiveImage from 'shared/components/ResponsiveImage.js';

// Wil be refactored into global slide styled compontent
// const VideoSlideContainer = styled.article`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.5s ease-in-out;
//   transition-delay: 0.05s;
//   height: ${props => props.isExpanded ? "100vh" : "calc(100vh - 160px)"};
//   width: ${props => props.isExpanded ? "100vw" : "calc(100vw - 80px)"};
//   ${'' /* opacity: 0;
//   animation: ${fadeIn} 0.5s ease-in-out forwards;
//   will-change: opacity; */}

//   p {
//     position: absolute;
//     bottom: 30px;
//     left: 40px;
//     margin: 0;
//     transition: all 0.5s ease-in-out;
//     ${'' /* opacity: ${props => props.isExpanded ? "0" : "1"};  */}
//   }
// `

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

const videoElement = isExpanded => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  transition: isExpanded ? '0' : 'top 0.5s linear, left 0.5s linear',
  top: isExpanded ? '0' : '-80px',
  left: isExpanded ? '0' : '-40px',
  background: 'transparent'
});

const VideoSlide = ({
  slide,
  nextPath,
  previousPath,
  isExpanded,
  isFirstSection,
  isFirstLoad,
  toggleExpand,
  closeExpand
}) => {
  const context = useContext(Context);
  const { pauseScroll, scrollCooldown } = context;

  const [isPlaying, setIsPlaying] = useState(false);
  const removePlaceholder = () => {
    startTimer();
    setTimeout(() => {
      setIsPlaying(true);
    }, 100);
  };

  const startTimer = () => {
    closeExpand();
    // slide.delay.length > 0 &&
    //   setTimeout(() => {
    //     closeExpand();
    //   }, slide.delay);
  };

  useEffect(() => {
    if (isFirstSection && isFirstLoad) {
      toggleExpand();
    }
  }, [isFirstSection, isFirstLoad, toggleExpand]);

  return (
    <ReactScrollWheelHandler
      id="test"
      pauseListeners={pauseScroll}
      upHandler={() => {
        closeExpand();
        navigate(previousPath);
        scrollCooldown();
      }}
      downHandler={() => {
        closeExpand();
        navigate(nextPath);
        scrollCooldown();
      }}
    >
      <SlideContainer isExpanded={isExpanded}>
        {/* <ToggleFullScreen onClick={toggleExpand} isExpanded={isExpanded} /> */}
        <SlideBackward
          previousPath={previousPath}
          isExpanded={isExpanded}
          closeExpand={closeExpand}
        />
        <SlideForward
          nextPath={nextPath}
          isExpanded={isExpanded}
          closeExpand={closeExpand}
        />
        <PlayerContainer isExpanded={isExpanded}>
          <FullScreen isExpanded={isExpanded}>
            <PlaceHolder isPlaying={isPlaying} isExpanded={isExpanded}>
              <ResponsiveImage srcPath={slide.placeholder} />
            </PlaceHolder>
            <ReactPlayer
              url={slide.source[0]}
              playing
              muted
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
        <p>{parse(slide.caption)}</p>
      </SlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default VideoSlide;
