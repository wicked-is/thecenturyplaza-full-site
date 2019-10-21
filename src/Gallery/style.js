import { css } from "styled-components";
import { Container } from "../shared/styled-components/Layouts.js";
import { mediaMin } from "../shared/styled-components/MediaQueries.js";
import { enterFadeIn } from "../shared/styled-components/Transitions.js";
import playBtnSVG from "icons/play-btn.svg";
import leftCycleSVG from "icons/left-cycle.svg";
import rightCycleSVG from "icons/right-cycle.svg";

export const ContainerStyled = css`
  ${Container}
  width: calc(100% + 20px);
  margin-left: -10px;
  margin-right: -10px;

  ${mediaMin.tabletLandscape` 
    width: 100%;
  `}
`;

export const SectionStyled = css`
  margin: 0 0 50px;
`;
export const SectionTitlesStyled = css`
  position: relative;

  ${mediaMin.tabletLandscape` 
    @supports (position: sticky) {
      top: 100px;
      position: sticky;
    }
  `}

  h2 {
    font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.35em;
    letter-spacing: 0.03em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }
`;
export const SectionTitleStyled = css`
  margin: 0 10px 20px;
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;

  ${mediaMin.tabletLandscape` 
    margin: 0;
  `}
`;

export const SectionMediaStyled = css`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: center;
  .react-reveal {
    width: 100%;
    height: 100%;
  }
`;

export const PlaceholderStyled = css`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12vw;
    height: 12vw;
    margin: -6.05vw 0 0 -6vw;
    background: url(${playBtnSVG}) no-repeat center center;
    background-size: contain;
  }
`;

export const MediaStyled = css`
  margin: 0 10px 20px 10px;
  width: ${props =>
    props.type === "video" ? "calc(100% - 20px)" : "calc(50% - 20px)"};
  height: ${props =>
    props.type === "video" ? "calc(54vw - 20px)" : "calc(27vw - 20px)"};
  float: left;
  position: relative;

  ${mediaMin.phoneXL`
    margin: 0 10px 20px 10px;
    width: ${props =>
      props.type === "video" ? "calc(66.666% - 20px)" : "calc(33.333% - 20px)"};
    height: ${props =>
      props.type === "video" ? "calc(36vw - 20px)" : "calc(18vw - 20px)"};
  `}

  ${mediaMin.tabletLandscape` 
    margin: 0 0 20px 20px;
  `}

  .react-reveal {
    height: 100%;
    width: 100%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    width: 100%;
    height: 100%;
    position: relative;

    @supports (object-fit: cover) {
      display: inline-block;
      background: transparent;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    @supports (object-fit: cover) {
      object-fit: cover;
      height: ${props =>
        props.type === "video" ? "calc(54vw - 20px)" : "calc(27vw - 20px)"};
    }

    ${mediaMin.phoneXL` 
      @supports (object-fit: cover) {
        height: ${props =>
          props.type === "video" ? "calc(36vw - 20px)" : "calc(18vw - 20px)"};
      }

    `}
  }

  &[type="video"]
    + [type="image"]
    + [type="image"]
    + [type="image"]
    + [type="image"]
    + [type="image"] {
    ${mediaMin.phoneXL` 
      transform: translateX(200%) translateX(40px);
      margin-top: -36vw;
    `}
  }
`;

export const SlideshowContainerStyled = css`
  width: calc(100vw - 100px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideshowPreviousStyled = css`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 10px;
  height: 40px;
  width: 10px;
  transform: translateY(-50%);
  background: url(${leftCycleSVG}) no-repeat center center;
  background-size: contain;
  cursor: pointer;
  ${mediaMin.tablet`
    height: 50px;
    width: 20px;
    left: 20px;
  `}
`;

export const SlideshowNextStyled = css`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 10px;
  height: 40px;
  width: 10px;
  transform: translateY(-50%);
  background: url(${rightCycleSVG}) no-repeat center center;
  background-size: contain;
  cursor: pointer;
  ${mediaMin.tablet`
    height: 50px;
    width: 20px;
    right: 20px;
  `}
`;

export const SlideshowImageStyled = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(
    90vh - ${props => parseFloat(props.theme.mobilePortraitHeaderHeight * 2)}px
  );
  overflow: hidden;
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;

  ${mediaMin.phoneXL` 
  height: calc(90vh - ${props =>
    parseFloat(props.theme.mobileLandscapeHeaderHeight * 2)}px);
    `}

  ${mediaMin.tablet` 
  height: calc(90vh - ${props =>
    parseFloat(props.theme.mdesktopHeaderHeight * 2)}px);  `}

  img {
    width: auto;
    height: auto;
    flex-grow: 0;
    flex-shrink: 1;
  }
`;

export const SlideshowVideoStyled = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(
    90vh - ${props => parseFloat(props.theme.mobilePortraitHeaderHeight * 2)}px
  );
  opacity: 0;
  animation: ${enterFadeIn};
  will-change: opacity;

  ${mediaMin.phoneXL` 
  height: calc(90vh - ${props =>
    parseFloat(props.theme.mobileLandscapeHeaderHeight * 2)}px);
    `}

  ${mediaMin.tablet` 
  height: calc(90vh - ${props =>
    parseFloat(props.theme.mdesktopHeaderHeight * 2)}px);  `}
`;

export const SlideshowCaptionStyled = css`
  display: inline-block;
  position: absolute;
  bottom: 20px;
  left:25px;

  ${mediaMin.phoneXL` 
    bottom: 10px;
  `}


  ${mediaMin.tablet` 
    bottom: 30px;
  `}

  ${mediaMin.tabletLandscape` 
    bottom: 30px;
    left: 40px;
  `}


`;
