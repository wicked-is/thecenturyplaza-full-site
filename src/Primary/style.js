import { css, keyframes } from 'styled-components';
import { Wrapper, Container } from 'shared/styled-components/Layouts.js';
import { fadeIn, cascadeText, revealLeft, revealRight } from "shared/styled-components/Transitions.js";

import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js"

export const SlideContainerStyled = css`
  ${Container}
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.isExpanded ? "100vh" : "calc(100vh - 160px)"};
  width: ${props => props.isExpanded ? "100vw" : "calc(100vw - 80px)"};

  ${mediaMin.tabletLandscape` 
    height: ${props => props.isExpanded ? "100vh" : "calc(100vh - 160px)"};
    width: ${props => props.isExpanded ? "100vw" : "calc(100vw - 80px)"};
  `}

  h2 {
    font-family:  ${props => props.theme.serifMedium};
    font-size: 34px;
    letter-spacing: .34px;    
    width: 55vw;
    text-align: center;
    position: relative;
  }

  p {
    position: absolute;
    bottom: 30px;
    left: 40px;
    margin: 0;
    max-width: calc(100vw - 80px);
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in-out 1s forwards;
    will-change: opacity;
  }
`

export const SplitSlideContainerStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 80px);
  height: calc(100vh - 160px);
  flex-direction: ${props => props.isInverted ? "row-reverse" : "row"};
  justify-content: space-evenly;

  img {
    max-width: 30vw;
    margin: ${props => props.isInverted ? "0 5vw 0 0" : "0 0 0 5vw"};
  }

  h2 {
    font-family:  ${props => props.theme.serifMedium};
    font-size: 34px;
    letter-spacing: .34px;
    width: 30vw;
    text-align: center;
    margin: ${props => props.isInverted ? "0 0 0 5vw" : "0 5vw 0 0"};
    position: relative;
    overflow: hidden;
  }

  p {
    position: absolute;
    bottom: 30px;
    left: 40px;
    margin: 0;
    max-width: calc(100vw - 80px);
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in-out 1.5s forwards;
    will-change: opacity;
  }
`

// export const ToggleFullScreen = styled.div`
//     position: absolute;
//     display: inline-block;
//     transition: all 0.5s ease-in-out;
//     transition-delay: 0.05s;
//     height: ${props => props.isExpanded ? "100vh" : "calc(100vh - 160px)"};
//     width: ${props => props.isExpanded ? "100vw" : "calc(100vw - 80px)"};
//     top: ${props => props.isExpanded ? "0" : "80px"};
//     left: ${props => props.isExpanded ? "0" : "40px"};
//     z-index: ${props => props.isExpanded ? "1000" : "500"};
//     ${'' /* opacity: 0; */}
//     cursor: pointer;
// `

export const PlayerContainerStyled = css`
  display: flex;
  align-items: center;
  justify-content: center;
  ${'' /* transition: all 0.5s ease-in-out;
  transition-delay: 0.05s; */}
  height: ${props => props.isExpanded ? "100vh" : "calc(100vh - 160px)"};
  width: ${props => props.isExpanded ? "100vw" : "calc(100vw - 80px)"};
  overflow: hidden;
  position: relative;
  opacity: 0; 
  animation: ${fadeIn} 0.5s ease-in-out 0.25s forwards;
  will-change: opacity;
`

export const FullScreenStyled = css`
  height: 100%;
  width: 100%;
  overflow: hidden;


  @media (max-aspect-ratio: 375/812) {
    transform: scale(3);
  }

  @media (min-aspect-ratio: 376/812) and (max-aspect-ratio: 550/812) {
    transform: scale(2.5);
  }

  @media (min-aspect-ratio: 551/812) and (max-aspect-ratio: 750/812) {
    transform: scale(2);
  }

  @media (min-aspect-ratio: 751/812) and (max-aspect-ratio: 100/100) {
    transform: scale(1.5);
  }

  @media (min-aspect-ratio: 101/100) and (max-aspect-ratio: 16/13) {
    transform: scale(1.35);
  }

  @media (min-aspect-ratio: 16/12) and (max-aspect-ratio: 16/11) {
    transform: scale(1.25);
  }

  @media (min-aspect-ratio: 16/10) and (max-aspect-ratio: 16/9) {
    transform: scale(1);
  }

  @media (min-aspect-ratio: 16/8) and (max-aspect-ratio: 16/7) {
    transform: scale(1.25);
  }

  @media (min-aspect-ratio: 16/6) and (max-aspect-ratio: 16/5) {
    transform: scale(2.5);
  }

  @media (min-aspect-ratio: 16/4) {
    transform: scale(3.5);
  }

`

export const PlaceHolderStyled = css`
  width: 100vw;
  height: 100vh;
  display: ${props => props.isPlaying ? "none" : "flex"};
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: display 0s;
  transition-delay: 4s;
  top: ${props => props.isExpanded ? "0" : "-80px"};
  left: ${props => props.isExpanded ? "0" : "-40px"};
  overflow: hidden;

  img {
    position: relative;
    width: auto;
    height: auto;
  }
`

export const ImageFullStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: calc(80vh - 160px);
  max-width: calc(70vw - 80px);
  opacity: 0; 
  animation: ${fadeIn} 0.5s ease-in-out 0.25s forwards;
  will-change: opacity;
`

export const TextMaskStyled = css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200%;
    background: linear-gradient(0deg, rgba(255,255,255,1) 45%, rgba(255,255,255,0) 100%);
    animation: ${cascadeText} 2.5s ease-out .25s forwards;
    will-change: transform;
`

export const ImageMaskedStyled = css`
  display: inline-block;
  overflow: hidden;
  position: relative;
`

export const ImageMaskStyled = css`
  position: absolute;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: ${props => props.theme.white};
  animation: ${props => props.isInverted ? revealLeft : revealRight} 1.45s ease-in-out 0.65s forwards;
  will-change: transform;
}
`