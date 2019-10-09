import { css } from "styled-components";
import {
  enterFadeIn,
  enterFromBottomText,
  enterFromBottomImage,
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
  transition: ${props =>
    props.isExisting && !props.nextSlideImage ? "opacity 0.5s ease-in" : "0"};
`;

export const SlideContainerStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 200;
  position: relative;
  flex-wrap: wrap;

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
    transform: translate3d(0, 0, 0);
    animation: ${enterFromBottomText};
    will-change: opacity, transform;

    em {
      font-family: ${props => props.theme.serifMediumItalic};
    }
  }

  a {
    position: absolute;
    bottom: 150px;
    left: 0;
    width: 100%;
    text-align: center;
    color: ${props => props.theme.gray};
    opacity: 0;
    transform: translate3d(0, 3em, 0);
    animation: ${enterFromBottomText};
    will-change: opacity, transform;

    &:hover {
      opacity: 0.5;
    }
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
    !props.firstSectionSlide ? enterFadeIn : enterFromCenter};
  will-change: ${props =>
    !props.firstSectionSlide ? "opacity" : "opacity, transform"};
`;

export const FullScreenStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  transition: 0;
  position: relative;

  .iframe,
  iframe {
    width: 100vw;
    height: 56.25vw;
    min-height: 100vh;
    min-width: 177.77vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0;
  }
`;

export const PlaceHolderStyled = css`
  width: 100vw;
  height: 56.25vw;
  min-height: 100vh;
  min-width: 177.77vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0;
  display: ${props => (props.isPlaying ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 300;

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
    display: ${props => (props.isPlaying ? "none" : "block")};
    position: relative;
    width: auto;
    height: auto;
    object-fit: cover;
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
    70vw - ${props => parseFloat(props.theme.desktopMargin) * 2}px
  );
  transform: translate3d(
    0,
    ${props => (!props.previousSlideImage ? "5em" : "0")},
    0
  );
  opacity: ${props => (!props.previousSlideImage ? "0" : "1")};
  animation: ${props => !props.previousSlideImage && enterFromBottomImage};
  will-change: ${props => !props.previousSlideImage && "opacity, transform"};

  ${mediaMin.tabletLandscape`
    max-width: calc(
      70vw - ${props => parseFloat(props.theme.desktopMargin) * 2}px
    );
  `};
`;

export const SplitSlideContainerStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 200;
  position: relative;
  flex-direction: ${props => (props.isInverted ? "row-reverse" : "row")};
  justify-content: space-evenly;

  ${"" /* display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);
  height: calc(100vh - ${props => parseFloat(props.theme.headerHeight) * 2}px);
  flex-direction: ${props => (props.isInverted ? "row-reverse" : "row")};
  justify-content: space-evenly;

  ${mediaMin.tabletLandscape` 
    width: calc(100vw - ${props =>
      parseFloat(props.theme.desktopMargin) * 2}px);
 `} */}

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
    animation: ${enterFromBottomText};
    will-change: opacity, transform;

    em {
      font-family: ${props => props.theme.serifMediumItalic};
    }
  }
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
  animation: ${enterFadeIn};
  will-change: opacity;
`;

export const PanoFullStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.white};
  overflow: hidden;
  width: calc(100vw - ${props => parseFloat(props.theme.desktopMargin) * 2}px);
  height: calc(80vh - ${props => parseFloat(props.theme.headerHeight) * 2}px);
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;
`;
