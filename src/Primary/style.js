import { css } from "styled-components";
import { Container } from "shared/styled-components/Layouts.js";
import {
  fadeIn,
  fadeOut,
  enterFromBottom,
  exitFromTop,
  enterFromRight,
  exitFromLeft,
  enterFromNothing,
  enterFromCenter
} from "shared/styled-components/Transitions.js";
import { mediaMin } from "shared/styled-components/MediaQueries.js";

export const SlideMaskStyled = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  opacity: ${props => (props.isExisting && !props.nextSlideImage ? "0" : "1")};
  overflow: hidden;
  transition: opacity 0.25s;
`;

export const SlideContainerStyled = css`
  ${"" /* ${Container} */}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 200;
  position: relative;
  background: white;
  }

  h2 {
    font-family: ${props => props.theme.serifMedium}, serif;
    font-weight: 400;
    font-size: 34px;
    line-height: 1.1em;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    width: 55vw;
    text-align: center;
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translate3d(0, 3em, 0);
    animation: ${enterFromBottom};
    will-change: opacity, transform;
  
    em {
      font-family: ${props => props.theme.serifMediumItalic};
    }
  }

  p {
    display: ${props => (props.isExpanded ? "none" : "inline-block")};
    position: absolute;
    bottom: 30px;
    left: 40px;
    margin: 0;
    max-width: calc(100vw - 80px - 400px);
    opacity: 0;
    animation: ${fadeIn} 1s 0.25s forwards;
    will-change: opacity;
    font-family: ${props => props.theme.sansSerifLight}, sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.35em;
    letter-spacing: 0.05em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }
`;

export const SplitSlideContainerStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);
  height: calc(100vh - ${props => parseFloat(props.theme.headerHeight) * 2}px);
  flex-direction: ${props => (props.isInverted ? "row-reverse" : "row")};
  justify-content: space-evenly;

  ${mediaMin.tabletLandscape` 
    width: calc(100vw - ${props =>
      parseFloat(props.theme.desktopMargin) * 2}px);
 `}

  h2 {
    font-family: ${props => props.theme.serifMedium}, serif;
    font-weight: 400;
    font-size: 34px;
    line-height: 1.1em;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    width: 30vw;
    text-align: center;
    margin: ${props => (props.isInverted ? "0 0 0 5vw" : "0 5vw 0 0")};
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translate3d(0, 3em, 0);
    animation: ${enterFromBottom};
    will-change: opacity, transform;

    em {
      font-family: ${props => props.theme.serifMediumItalic};
    }
  }

  p {
    position: absolute;
    bottom: 30px;
    left: 40px;
    margin: 0;
    max-width: calc(100vw - 80px - 400px);
    opacity: 0;
    animation: ${fadeIn} 1s 0.75s forwards;
    will-change: opacity;
    font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 1.35em;
    letter-spacing: 0.05em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }
`;

export const PlayerContainerStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  opacity: 0;
  transform: ${props => props.firstSectionSlide && "scale(.8)"};
  animation: ${props =>
    !props.firstSectionSlide ? enterFromNothing : enterFromCenter};
  will-change: ${props =>
    !props.firstSectionSlide ? "opacity" : "opacity, transform"};
`;

export const FullScreenStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  transition: transform 0.5s ease-in-out;
  position: relative;

  @media (max-aspect-ratio: 375/812) {
    transform: scale(${props => (props.isExpanded ? "3.25" : "3")});
  }

  @media (min-aspect-ratio: 376/812) and (max-aspect-ratio: 550/812) {
    transform: scale(${props => (props.isExpanded ? "2.75" : "2.5")});
  }

  @media (min-aspect-ratio: 551/812) and (max-aspect-ratio: 750/812) {
    transform: scale(${props => (props.isExpanded ? "2.25" : "2")});
  }

  @media (min-aspect-ratio: 751/812) and (max-aspect-ratio: 100/100) {
    transform: scale(${props => (props.isExpanded ? "1.75" : "1.5")});
  }

  @media (min-aspect-ratio: 101/100) and (max-aspect-ratio: 16/13) {
    transform: scale(${props => (props.isExpanded ? "1.60" : "1.35")});
  }

  @media (min-aspect-ratio: 16/12) and (max-aspect-ratio: 16/11) {
    transform: scale(${props => (props.isExpanded ? "1.5" : "1.25")});
  }

  @media (min-aspect-ratio: 16/10) and (max-aspect-ratio: 16/9) {
    transform: scale(${props => (props.isExpanded ? "1.25" : "1")});
  }

  @media (min-aspect-ratio: 16/8) and (max-aspect-ratio: 16/7) {
    transform: scale(${props => (props.isExpanded ? "1.75" : "1.5")});
  }

  @media (min-aspect-ratio: 16/6) and (max-aspect-ratio: 16/5) {
    transform: scale(${props => (props.isExpanded ? "2.75" : "2.5")});
  }

  @media (min-aspect-ratio: 16/4) {
    transform: scale(${props => (props.isExpanded ? "3.75" : "3.5")});
  }
`;

export const PlaceHolderStyled = css`
  height: 100vh;
  width: 100vw;
  display: ${props => (props.isPlaying ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 300;

  img {
    display: ${props => (props.isPlaying ? "none" : "block")};
    position: relative;
    width: auto;
    height: auto;
  }
`;

export const ImageFullStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: calc(
    80vh - ${props => parseFloat(props.theme.headerHeight) * 2}px
  );
  max-width: calc(
    70vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px
  );
  transform: translate3d(
    0,
    ${props => (!props.previousSlideImage ? "3em" : "0")},
    0
  );
  opacity: ${props => (!props.previousSlideImage ? "0" : "1")};
  animation: ${props => !props.previousSlideImage && enterFromBottom};
  will-change: ${props => !props.previousSlideImage && "opacity, transform"};

  ${mediaMin.tabletLandscape`
    max-width: calc(
      70vw - ${props => parseFloat(props.theme.desktopMargin) * 2}px
    );
  `};
`;

export const PanoFullStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);
  height: calc(80vh - ${props => parseFloat(props.theme.headerHeight) * 2}px);
  opacity: 0;
  animation: ${fadeIn} 1.25s cubic-bezier(0, 0.7, 0.3, 1) 0.25s forwards;
  will-change: opacity;
  background: ${props => props.theme.gray};
  overflow: hidden;
`;

export const ImageContainerStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  width: 30vw;
  max-width: 30vw;
  margin: ${props => (props.isInverted ? "0 5vw 0 0" : "0 0 0 5vw")};
  opacity: 0;
  transform: translate3d(0, 3em, 0);
  animation: ${enterFromBottom};
  will-change: opacity, transform;
`;
