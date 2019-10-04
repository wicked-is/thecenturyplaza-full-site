import { css } from "styled-components";
import { Container } from "shared/styled-components/Layouts.js";
import { fadeIn, cascadeText } from "shared/styled-components/Transitions.js";
import { mediaMin } from "shared/styled-components/MediaQueries.js";

export const SlideContainerStyled = css`
  ${Container}
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${props =>
    props.isExpanded
      ? "0"
      : "height 0.5s linear, width 0.5s linear, margin 0.5s linear, padding 0.5s linear"};
  height: ${props => (props.isExpanded ? "100vh" : "calc(100vh - 160px)")};
  width: ${props => (props.isExpanded ? "100vw" : "calc(100vw - 80px)")};

  ${mediaMin.tabletLandscape` 
    height: ${props => (props.isExpanded ? "100vh" : "calc(100vh - 160px)")};
    width: ${props => (props.isExpanded ? "100vw" : "calc(100vw - 80px)")};
  `}

  h2 {
    font-family: ${props => props.theme.serifMedium};
    font-size: 34px;
    letter-spacing: 0.34px;
    width: 55vw;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  p {
    display: ${props => (props.isExpanded ? "none" : "inline-block")};
    position: absolute;
    bottom: 30px;
    left: 40px;
    margin: 0;
    max-width: calc(100vw - 80px);
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in-out 0.75s forwards;
    will-change: opacity;
  }
`;

export const SplitSlideContainerStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 80px);
  height: calc(100vh - 160px);
  flex-direction: ${props => (props.isInverted ? "row-reverse" : "row")};
  justify-content: space-evenly;

  img {
    ${"" /* max-width: 30vw;
    margin: ${props => props.isInverted ? "0 5vw 0 0" : "0 0 0 5vw"}; */}
  }

  h2 {
    font-family: ${props => props.theme.serifMedium};
    font-size: 34px;
    letter-spacing: 0.34px;
    width: 30vw;
    text-align: center;
    margin: ${props => (props.isInverted ? "0 0 0 5vw" : "0 5vw 0 0")};
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
`;

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
  transition: ${props =>
    props.isExpanded
      ? "0"
      : "height 0.5s linear, width 0.5s linear, margin 0.5s linear, padding 0.5s linear"};
  height: ${props => (props.isExpanded ? "100vh" : "calc(100vh - 160px)")};
  width: ${props => (props.isExpanded ? "100vw" : "calc(100vw - 80px)")};
  overflow: hidden;
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 0.25s forwards;
  will-change: opacity;
`;

export const FullScreenStyled = css`
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: ${props => (props.isExpanded ? "0" : "transform 0.5s linear")};

  @media (max-aspect-ratio: 375/812) {
    transform: ${props => (props.isExpanded ? "scale(3.5)" : "scale(3)")};
  }

  @media (min-aspect-ratio: 376/812) and (max-aspect-ratio: 550/812) {
    transform: ${props => (props.isExpanded ? "scale(3)" : "scale(2.5)")};
  }

  @media (min-aspect-ratio: 551/812) and (max-aspect-ratio: 750/812) {
    transform: ${props => (props.isExpanded ? "scale(2.5)" : "scale(2)")};
  }

  @media (min-aspect-ratio: 751/812) and (max-aspect-ratio: 100/100) {
    transform: ${props => (props.isExpanded ? "scale(2)" : "scale(1.5)")};
  }

  @media (min-aspect-ratio: 101/100) and (max-aspect-ratio: 16/13) {
    transform: ${props => (props.isExpanded ? "scale(1.85)" : "scale(1.35)")};
  }

  @media (min-aspect-ratio: 16/12) and (max-aspect-ratio: 16/11) {
    transform: ${props => (props.isExpanded ? "scale(1.75)" : "scale(1.25)")};
  }

  @media (min-aspect-ratio: 16/10) and (max-aspect-ratio: 16/9) {
    transform: ${props => (props.isExpanded ? "scale(1.5)" : "scale(1)")};
  }

  @media (min-aspect-ratio: 16/8) and (max-aspect-ratio: 16/7) {
    transform: ${props => (props.isExpanded ? "scale(1.75)" : "scale(1.25)")};
  }

  @media (min-aspect-ratio: 16/6) and (max-aspect-ratio: 16/5) {
    transform: ${props => (props.isExpanded ? "scale(3)" : "scale(2.5)")};
  }

  @media (min-aspect-ratio: 16/4) {
    transform: ${props => (props.isExpanded ? "scale(4)" : "scale(3.5)")};
  }
`;

export const PlaceHolderStyled = css`
  width: 100vw;
  height: 100vh;
  display: ${props => (props.isPlaying ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: ${props =>
    props.isExpanded ? "0" : "top 0.5s linear, left 0.5s linear"};
  top: ${props => (props.isExpanded ? "0" : "-80px")};
  left: ${props => (props.isExpanded ? "0" : "-40px")};
  overflow: hidden;

  img {
    position: relative;
    width: auto;
    height: auto;
  }
`;

export const ImageFullStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: calc(80vh - 160px);
  max-width: calc(70vw - 80px);
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 0.25s forwards;
  will-change: opacity;
`;

export const PanoFullStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  animation: ${fadeIn} 0.5s ease-in-out 0.25s forwards;
  will-change: opacity;
`;

export const TextMaskStyled = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200%;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 45%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: ${cascadeText} 1.5s ease-out 0.25s forwards;
  will-change: transform;
`;

export const ImageContainerStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 0.5s forwards;
  will-change: opacity;
  width: 30vw;
  max-width: 30vw;
  margin: ${props => (props.isInverted ? "0 5vw 0 0" : "0 0 0 5vw")};
`;

// export const ImageMaskStyled = css`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   display: inline-block;
//   background: ${props => props.theme.white};
//   animation: ${props => props.isInverted ? revealLeft : revealRight} 1.45s ease-in-out 0.65s forwards;
//   will-change: transform;
// }
// `
