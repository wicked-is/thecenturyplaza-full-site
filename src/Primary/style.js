import { css } from "styled-components";
import {
  enterFadeIn,
  // enterFromSwipe,
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
  height: 100%;
  ${
    "" /* width: ${props => {
    if (props.isFirstSlide && !props.isFirstSection) return "0";
    if (props.isFirstSlide && props.isFirstSection && props.firstShouldSwipe)
      return "0";
    return "100vw";
  }}; */
  }
  opacity: ${props => (props.isExisting ? "0" : "1")};
  overflow: hidden;
  transition: opacity 0.5s ease-in;
  ${
    "" /* animation: ${props => {
    if (props.isFirstSlide && !props.isFirstSection) return enterFromSwipe;
    if (props.isFirstSlide && props.isFirstSection && props.firstShouldSwipe)
      return enterFromSwipe; */
  }


  ${
    "" /* &::before {
    display: ${props => {
      if (props.isFirstSlide && !props.isFirstSection) return "inline-block";
      if (props.isFirstSlide && props.isFirstSection && props.firstShouldSwipe)
        return "inline-block";
      return "none";
    }};
    content: "";
    position: absolute;
    width: 100vw;
    z-index: 9999;
    height: 100%;
    right: 0;
    top: 0;
    background: white;
    animation: ${props => {
      if (props.isFirstSlide && !props.isFirstSection) return enterFromSwipe;
      if (props.isFirstSlide && props.isFirstSection && props.firstShouldSwipe)
        return enterFromSwipe;
    }};
    will-change: right;
  } */
  }
`;

export const SlideContainerStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100vw;
  height: 100%;
  z-index: 200;
  transition: height 0.25s ease-in-out;
  position: relative;
  flex-wrap: wrap;

  ${"" /* ${mediaMin.tablet`
    height: 100%;
  `} */}

  h2 {
    font-family: ${props => props.theme.serifMedium}, serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 1.1em;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    margin: 0;
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
    position: relative;
    width: 100%;
    text-align: center;
    color: ${props => props.theme.gray};
    opacity: 0;
    transform: translate3d(0, 3em, 0);
    animation: ${enterFromBottomText};
    will-change: opacity, transform;
    margin: 2em 0 0;

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
  height: 100%;
  overflow: hidden;
  position: relative;
  opacity: 0;
  transform: ${props => (props.firstSectionSlide ? "scale(0.9)" : "scale(1)")};
  animation: ${props =>
    props.firstSectionSlide ? enterFromCenter : enterFadeIn};
  will-change: ${props =>
    props.firstSectionSlide ? "opacity, transform" : "opacity"};
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

export const ImageSoloStyled = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: calc(
    100% - ${props => parseFloat(props.theme.mobilePortraitHeaderHeight) * 2}px
  );
  width: calc(
    100vw - ${props => parseFloat(props.theme.mobileSideMargin) * 2}px
  );
  opacity: 0;
  transform: translate3d(0, 5em, 0);
  animation: ${enterFromBottomImage};
  will-change: opacity, transform;
  overflow: hidden;

  ${mediaMin.phoneXL`
    height: calc(
      100% - ${props =>
        parseFloat(props.theme.mobileLandscapeHeaderHeight) * 2}px
    );
  `}

  ${mediaMin.tablet`
    height: calc(
      100% - ${props => parseFloat(props.theme.desktopHeaderHeight) * 2}px
    );
  `}

  ${mediaMin.tabletLandscape`
    height: calc(
      100% - ${props => parseFloat(props.theme.desktopHeaderHeight) * 2}px
    );
    width: calc(
      100vw - ${props => parseFloat(props.theme.desktopSideMargin) * 2}px
    );
  `}

  div {
    width: 100%;
    height: 100%;
    position: relative;
    transition: opacity 0.5s ease-in-out;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 30% 50%;
    }
  }
`;

export const CrossFadeStyled = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(
    100% - ${props => parseFloat(props.theme.mobilePortraitHeaderHeight) * 2}px
  );
  width: calc(
    100vw - ${props => parseFloat(props.theme.mobileSideMargin) * 2}px
  );
  opacity: 0;
  transform: translate3d(0, 5em, 0);
  animation: ${enterFromBottomImage};
  will-change: opacity, transform;
  overflow: hidden;

  ${mediaMin.phoneXL`
    height: calc(
      100% - ${props =>
        parseFloat(props.theme.mobileLandscapeHeaderHeight) * 2}px
    );
  `}

  ${mediaMin.tablet`
    height: calc(
      100% - ${props => parseFloat(props.theme.desktopHeaderHeight) * 2}px
    );
  `}

  ${mediaMin.tabletLandscape`
    height: calc(
      90% - ${props => parseFloat(props.theme.desktopHeaderHeight) * 2}px
    );
    width: calc(
      80vw - ${props => parseFloat(props.theme.desktopSideMargin) * 2}px
    );
  `}

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    overflow: hidden;
    text-align: center;
    flex-grow: 0;
    flex-shrink: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.5s ease-in-out;

    &:nth-child(1) {
      opacity: ${props => {
        if (props.activeCrossFade === 1) return "1";
        return "0";
      }};
      z-index: 300;
    }

    &:nth-child(2) {
      opacity: ${props => {
        if (props.activeCrossFade === 2) return "1";
        return "0";
      }};
      z-index: 200;
    }

    &:nth-child(3) {
      opacity: ${props => {
        if (props.activeCrossFade === 3) return "1";
        return "0";
      }};
      z-index: 100;
    }

    img {
      flex-grow: 0;
      flex-shrink: 0;
    }
  }
`;

export const SplitSlideContainerStyled = css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100vw;
  height: 100%;
  z-index: 200;
  position: relative;
  flex-direction: column;
  justify-content: center;

  ${mediaMin.phoneXL`
    flex-direction: ${props => (props.isInverted ? "row-reverse" : "row")};
  `}

  ${mediaMin.tablet`
    flex-direction: column;
  `}

  ${mediaMin.tabletLandscape`
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
    margin: 2em 0 0;
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translate3d(0, 3em, 0);
    animation: ${enterFromBottomText};
    will-change: opacity, transform;

    ${mediaMin.phoneXL`
      width: 30vw;
      margin: ${props => (props.isInverted ? "0 3vw 0 0" : "0 0 0 3vw")};
    `}

    ${mediaMin.tablet`
      width: 70vw;
      margin: 2em 0 0;
      font-size: 30px;
      flex-direction: column;
      justify-content: center;
    `}

    ${mediaMin.tabletLandscape`
      width: 30vw;
      font-size: 34px;
      margin: ${props => (props.isInverted ? "0 3vw 0 0" : "0 0 0 3vw")};
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
  height: calc(45% - ${props => props.theme.mobilePortraitHeaderHeight}px);
  margin: 0;
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;

  ${mediaMin.phoneXL`
    height: auto;
    margin: ${props => (props.isInverted ? "0 0 0 3vw" : "0 3vw 0 0")};
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
    margin: ${props => (props.isInverted ? "0 0 0 3vw" : "0 3vw 0 0")};
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
  width: calc(
    100vw - ${props => parseFloat(props.theme.desktopSideMargin) * 2}px
  );
  height: calc(
    80% - ${props => parseFloat(props.theme.mobilePortraitHeaderHeight) * 2}px
  );
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;

  ${mediaMin.phoneXL`
    height: calc(
      80% - ${props =>
        parseFloat(props.theme.mobileLandscapeHeaderHeight) * 2}px
    );
  `}

  ${mediaMin.tablet`
    height: calc(
      80% - ${props => parseFloat(props.theme.desktopHeaderHeight) * 2}px
    );
  `}
`;
