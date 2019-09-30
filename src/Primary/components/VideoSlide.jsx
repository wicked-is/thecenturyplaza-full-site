import React, { useState, useEffect } from "react";
import { navigate, Match } from "@reach/router";
import styled, { keyframes } from "styled-components";
import parse from "html-react-parser";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";
import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js"
import ResponsiveImage from "shared/components/ResponsiveImage.js"
import ReactPlayer from 'react-player';
import { fadeIn } from "shared/styled-components/Transitions.js";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

// Wil be refactored into global slide styled compontent
const VideoSlideContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  transition-delay: 0.05s;
  height: ${props => props.isExpanded ? "100vh" : "calc(100vh - 160px)"};
  width: ${props => props.isExpanded ? "100vw" : "calc(100vw - 80px)"};
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  will-change: opacity;

  p {
    position: absolute;
    bottom: 30px;
    left: 40px;
    margin: 0;
    transition: all 0.5s ease-in-out;
    opacity: ${props => props.isExpanded ? "0" : "1"}; 
  }
`

const ToggleFullScreen = styled.div`
    position: absolute;
    display: inline-block;
    transition: all 0.5s ease-in-out;
    transition-delay: 0.05s;
    height: ${props => props.isExpanded ? "100vh" : "calc(100vh - 160px)"};
    width: ${props => props.isExpanded ? "100vw" : "calc(100vw - 80px)"};
    top: ${props => props.isExpanded ? "0" : "80px"};
    left: ${props => props.isExpanded ? "0" : "40px"};
    z-index: ${props => props.isExpanded ? "1000" : "500"};
    opacity: 0;
    cursor: pointer;
`

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  transition-delay: 0.05s;
  height: ${props => props.isExpanded ? "100vh" : "calc(100vh - 160px)"};
  width: ${props => props.isExpanded ? "100vw" : "calc(100vw - 80px)"};
  overflow: hidden;
  position: relative;
`

const FullScreen = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  ${'' /* transition: all 0.5s ease-in-out;
  transform: scale(2.5);
  ${mediaMin.tabletLandscape`
    transform: scale(1);
  `} */}
`

const videoElement = (isExpanded) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  transition: 'all 0.5s ease-in-out',
  transitionDelay: '0.05s',
  top: isExpanded ? '0' : '-80px',
  left: isExpanded ? '0' : '-40px',
});


const PlaceHolder = styled.div`
  width: 100vw;
  height: 100vh;
  display: ${props => props.isPlaying ? "none" : "flex"};
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: all 0.5s ease-in-out;
  transition-delay: 0.05s;
  top: ${props => props.isExpanded ? "0" : "-80px"};
  left: ${props => props.isExpanded ? "0" : "-40px"};
  overflow: hidden;

  img {
    position: relative;
    width: auto;
    height: auto;
  }
`

const VideoSlide = props => {
  const { slide, nextPath, previousPath, isExpanded, isFirstSection, isFirstLoad, toggleExpand, closeExpand } = props;

  // const [isFull, setIsFull] = useState(() => checkDelay());

  const [isPlaying, setIsPlaying] = useState(false);
  const removePlaceholder = () => {
    setTimeout(() => {
      setIsPlaying(true);
    }, 100)
  };

  // const startTimer = props => {
  //   props.closeExpand()
  //   slide.delay.length > 0 && setTimeout(() => {
  //     props.closeExpand()
  //   }, slide.delay)
  // };

  // useEffect(() => {
  //   if (isFirstSection && isFirstLoad) {
  //     toggleExpand();
  //   }
  // }, [isFirstSection, isFirstLoad, toggleExpand]);

  // const forceSmall = () => {
  //   setIsFull(!isFull);
  // };

  // const advancePath = () => {
  //   <Match path={curre}>
  //     {props => (
  //       // props.match.uri === "/somewhere/deep"
  //       <div>{props.match.uri}</div>
  //     )}
  //   </Match>
  // }

  return (
    <ReactScrollWheelHandler
      pauseListeners={true}
      upHandler={() => {
        // console.log("scroll up");
        closeExpand();
        navigate(previousPath);
      }}
      downHandler={() => {
        // console.log("scroll down")
        closeExpand();
        navigate(nextPath);
      }}
    >
      <VideoSlideContainer isExpanded={isExpanded}>
        {/* <ToggleFullScreen onClick={toggleExpand} isExpanded={isExpanded} /> */}
        <SlideBackward previousPath={previousPath} isExpanded={isExpanded} />
        <SlideForward nextPath={nextPath} isExpanded={isExpanded} />
        <VideoContainer isExpanded={isExpanded}>
          <FullScreen isExpanded={isExpanded}>
            <PlaceHolder isPlaying={isPlaying} isExpanded={isExpanded}><ResponsiveImage srcPath={slide.placeholder} /></PlaceHolder>
            <ReactPlayer url={slide.source} playing muted playsinline loop width="100vw" height="100vh" onStart={() => removePlaceholder(props)} style={videoElement(isExpanded)} preload="true" />
          </FullScreen>
        </VideoContainer>
        <p>{parse(slide.caption)}</p>
      </VideoSlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default VideoSlide;
