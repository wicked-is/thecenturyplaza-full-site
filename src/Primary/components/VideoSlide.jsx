import React, { useState, useEffect } from "react";
import { navigate, Location } from "@reach/router";
import styled from "styled-components";
import { SlideContainerStyled, PlayerContainerStyled, FullScreenStyled, PlaceHolderStyled } from "Primary/style.js";
import parse from "html-react-parser";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";

import ResponsiveImage from "shared/components/ResponsiveImage.js"
import ReactPlayer from 'react-player';

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

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

const SlideContainer = styled.div`${SlideContainerStyled};`;
const PlayerContainer = styled.div`${PlayerContainerStyled};`;
const FullScreen = styled.div`${FullScreenStyled};`;
const PlaceHolder = styled.div`${PlaceHolderStyled};`;

const videoElement = (isExpanded) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  // transition: 'all 0.5s ease-in-out',
  // transitionDelay: '0.05s',
  top: isExpanded ? '0' : '-80px',
  left: isExpanded ? '0' : '-40px',
  background: 'transparent'
});

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
      // pauseListeners={true}
      upHandler={() => {
        // console.log("scroll up");
        // closeExpand();
        // if (props.location === previousPath) {
        //   // console.log("where you going");
        //   // navigate(previousPath);
        // } else {
        //   // console.log(props.location);
        //   // navigate(previousPath);
        // }
        navigate(previousPath);
      }}
      downHandler={() => {
        // console.log("scroll down")
        // closeExpand();
        // if (props.location === nextPath) {
        //   console.log("where you going");
        //   // navigate(nextPath);
        // } else {
        //   console.log(props.location);
        //   console.log(nextPath);
        //   // navigate(nextPath);
        // }
        navigate(nextPath);
      }}
    >
      <SlideContainer isExpanded={isExpanded}>
        {/* <ToggleFullScreen onClick={toggleExpand} isExpanded={isExpanded} /> */}
        <SlideBackward previousPath={previousPath} isExpanded={isExpanded} />
        <SlideForward nextPath={nextPath} isExpanded={isExpanded} />
        <PlayerContainer isExpanded={isExpanded}>
          <FullScreen isExpanded={isExpanded}>
            <PlaceHolder isPlaying={isPlaying} isExpanded={isExpanded}><ResponsiveImage srcPath={slide.placeholder} /></PlaceHolder>
            <ReactPlayer url={slide.source} playing muted playsinline loop width="100vw" height="100vh" onStart={() => removePlaceholder(props)} style={videoElement(isExpanded)} preload="true" />
          </FullScreen>
        </PlayerContainer>
        <p>{parse(slide.caption)}</p>
      </SlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default VideoSlide;
