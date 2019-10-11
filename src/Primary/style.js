import { css } from "styled-components";
import {
  enterFadeIn,
  enterFromBottomText,
  enterFromBottomImage,
  enterFromCenter
} from "../shared/styled-components/Transitions.js";
import { mediaMin } from "../shared/styled-components/MediaQueries.js";

export const SlideMaskStyled = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  ${
    "" /* opacity: ${props => {
    if (
      !props.scrollUpCrossFade & props.scrollDownCrossFade &&
      props.isExisting &&
      props.isCrossFadingUp
    )
      return "0"; // First CrossFade & Existing Top
    if (
      !props.scrollUpCrossFade & props.scrollDownCrossFade &&
      props.isExisting &&
      props.isCrossFadingDown
    )
      return "1"; // First CrossFade & Existing Down
    if (
      props.scrollUpCrossFade & props.scrollDownCrossFade &&
      props.isExisting &&
      props.isCrossFadingUp
    )
      return "1"; // Middle CrossFade & Existing Top
    if (
      props.scrollUpCrossFade & props.scrollDownCrossFade &&
      props.isExisting &&
      props.isCrossFadingDown
    )
      return "1"; // Middle CrossFade & Existing TDown
    if (
      props.scrollUpCrossFade & !props.scrollDownCrossFade &&
      props.isExisting &&
      props.isCrossFadingUp
    )
      return "1"; // Last CrossFade & Existing Top
    if (
      props.scrollUpCrossFade & !props.scrollDownCrossFade &&
      props.isExisting &&
      props.isCrossFadingDown
    )
      return "0"; // Last CrossFade & Existing Down

    if (
      !props.scrollUpCrossFade & !props.scrollDownCrossFade &&
      !props.isExisting
    )
      return "1"; // Not CrossFade & Not Existing
    if (
      !props.scrollUpCrossFade & !props.scrollDownCrossFade &&
      props.isExisting
    )
      return "0"; // Not CrossFade & Exist
  }}; */
  }

  opacity: ${props => (props.isExisting ? "0" : "1")};
  overflow: hidden;
  transition: opacity 0.5s ease-in;
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
    font-size: 22px;
    line-height: 1.1em;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    width: 70vw;
    text-align: center;
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    animation: ${enterFromBottomText};
    will-change: opacity, transform;

    ${mediaMin.tablet`
      width: 55vw;
      font-size: 34px;
    `}

    em {
      font-family: ${props => props.theme.serifMediumItalic};
    }
  }

  a {
    position: absolute;
    bottom: 20vh;
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
  transform: ${props => props.firstSectionSlide && "scale(.9)"};
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

export const ImageSoloStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: calc(
    80vh - ${props => parseFloat(props.theme.headerHeight) * 2}px
  );
  max-width: calc(
    100vw - ${props => parseFloat(props.theme.desktopMargin) * 2}px
  );
  transform: translate3d(0, 5em, 0);
  opacity: 0;
  animation: ${enterFromBottomImage};
  will-change: opacity, transform;

  ${mediaMin.tablet`
    max-width: calc(
      90vw - ${props => parseFloat(props.theme.desktopMargin) * 2}px
    );
  `}

  ${mediaMin.tabletLandscape`
    max-height: calc(
      80vh - ${props => parseFloat(props.theme.headerHeight) * 2}px
    );
    max-width: calc(
      70vw - ${props => parseFloat(props.theme.desktopMargin) * 2}px
    );
  `}
`;

export const CrossFadeStyled = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: calc(
    80vh - ${props => parseFloat(props.theme.headerHeight) * 2}px
  );
  max-width: calc(
    100vw - ${props => parseFloat(props.theme.desktopMargin) * 2}px
  );
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;


  ${mediaMin.tablet`
    max-width: calc(
      90vw - ${props => parseFloat(props.theme.desktopMargin) * 2}px
    );
  `}

  ${mediaMin.tabletLandscape`
    max-height: calc(
      80vh - ${props => parseFloat(props.theme.headerHeight) * 2}px
    );
    max-width: calc(
      70vw - ${props => parseFloat(props.theme.desktopMargin) * 2}px
    );
  `}

  ${
    "" /* opacity: ${props => {
    if (
      !props.scrollUpCrossFade & props.scrollDownCrossFade &&
      !props.isExisting &&
      !props.isCrossFadingUp &&
      !props.isCrossFadingDown
    )
      return "0"; // First CrossFade & Entering from Previous
    if (
      props.scrollUpCrossFade & !props.scrollDownCrossFade &&
      !props.isExisting &&
      !props.isCrossFadingUp &&
      !props.isCrossFadingDown
    )
      return "0"; // Last CrossFade & Entering from Previous
  }}; */
  }


  ${
    "" /* animation: ${props => {
    if (
      !props.scrollUpCrossFade & props.scrollDownCrossFade &&
      !props.isExisting &&
      !props.isCrossFadingUp &&
      !props.isCrossFadingDown
    )
      return enterFromBottomImage; // First CrossFade & Entering from Previous
    if (
      props.scrollUpCrossFade & !props.scrollDownCrossFade &&
      !props.isExisting &&
      !props.isCrossFadingUp &&
      !props.isCrossFadingDown
    )
      return enterFromBottomImage; // Last CrossFade & Entering from Previous
  }};

  will-change: ${props => {
    if (
      !props.scrollUpCrossFade & props.scrollDownCrossFade &&
      !props.isExisting &&
      !props.isCrossFadingUp &&
      !props.isCrossFadingDown
    )
      return "transform, opacity"; // First CrossFade & Entering from Previous
    if (
      props.scrollUpCrossFade & !props.scrollDownCrossFade &&
      !props.isExisting &&
      !props.isCrossFadingUp &&
      !props.isCrossFadingDown
    )
      return "transform, opacity"; // Last CrossFade & Entering from Previous
  }}; */
  }
`;

export const CrossFadeCurrentStyled = css`
  position: relative;
  display: inline-block;
  opacity: 1;
  z-index: 300;
`;

export const CrossFadePreviousStyled = css`
  position: absolute;
  display: none;
  opacity: 0;
  z-index: 100;
`;

export const CrossFadeNextStyled = css`
  position: absolute;
  display: none;
  opacity: 0;
  z-index: 200;
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
  flex-direction: column;
  justify-content: center;

  ${mediaMin.phoneXL`
    justify-content: space-evenly;
    flex-direction: ${props => (props.isInverted ? "row-reverse" : "row")};
  `}

  ${mediaMin.tablet`
    flex-direction: column;
    justify-content: center;
  `}

  ${mediaMin.tabletLandscape`
    justify-content: space-evenly;
    flex-direction: ${props => (props.isInverted ? "row-reverse" : "row")};
  `}


  h2 {
    font-family: ${props => props.theme.serifMedium}, serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.1em;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    width: 70vw;
    text-align: center;
    margin: 7vh 0 0;
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translate3d(0, 3em, 0);
    animation: ${enterFromBottomText};
    will-change: opacity, transform;

    ${mediaMin.phoneXL`
      width: 30vw;
      margin: ${props => (props.isInverted ? "0 0 0 5vw" : "0 5vw 0 0")};
    `}

    ${mediaMin.tablet`
      width: 70vw;
      margin: 7vh 0 0;
      font-size: 30px;
      flex-direction: column;
      justify-content: center;
    `}

    ${mediaMin.tabletLandscape`
      width: 30vw;
      font-size: 34px;
      margin: ${props => (props.isInverted ? "0 0 0 5vw" : "0 5vw 0 0")};
    `}

    em {
      font-family: ${props => props.theme.serifMediumItalic};
    }
  }
`;

export const SplitImageContainerStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  width: 66vw;
  max-width: 66vw;
  height: calc(50vh - ${props => props.headerHeight}px);
  margin: 0;
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;

  ${mediaMin.phoneXL`
    height: auto;
    margin: ${props => (props.isInverted ? "0 5vw 0 0" : "0 0 0 5vw")};
    width: 30vw;
    max-width: 30vw;
  `}

  ${mediaMin.tablet`
    height: auto;
    margin: 0;
    width: 60vw;
    max-width: 60vw;
  `}

  ${mediaMin.tabletLandscape`
    height: auto;
    margin: ${props => (props.isInverted ? "0 5vw 0 0" : "0 0 0 5vw")};
    width: 30vw;
    max-width: 30vw;
  `}
`;

export const PanoImageStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  overflow: hidden;
  width: calc(100vw - ${props => parseFloat(props.theme.desktopMargin) * 2}px);
  height: calc(80vh - ${props => parseFloat(props.theme.headerHeight) * 2}px);
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;
`;
