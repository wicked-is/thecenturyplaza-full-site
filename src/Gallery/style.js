import { css } from "styled-components";
import { Container } from "../shared/styled-components/Layouts.js";
import { mediaMin } from "../shared/styled-components/MediaQueries.js";
import { fadeIn } from "../shared/styled-components/Transitions.js";
import playBtnSVG from "icons/play-btn.svg";

export const ContainerStyled = css`
  ${Container}
  width: 100%;
  margin: 20px 0 0;

  ${mediaMin.tabletLandscape` 
    width: 100%;
    margin: 40px 0 0;
  `}
`;
export const SectionStyled = css`
  margin: 0 0 50px;
`;
export const SectionTitlesStyled = css`
  position: relative;

  ${mediaMin.tabletLandscape` 
    @supports (display: grid) {
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
  animation: ${fadeIn} 0.5s ease-in-out 0.5s forwards;
  will-change: opacity;

  ${mediaMin.tabletLandscape` 
    margin: 0;
  `}
`;

export const SectionMediaStyled = css`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
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
    margin: -6vw 0 0 -6vw;
    background: url(${playBtnSVG}) no-repeat center center;
    background-size: contain;
  }
`;

export const MediaStyled = css`
  positions: relative;
  margin: 0 10px 20px 10px;
  width: ${props =>
    props.type === "video" ? "calc(66.666% - 20px)" : "calc(33.333% - 20px)"};
  float: left;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 0.5s forwards;
  will-change: opacity;
  position: relative;

  ${mediaMin.tabletLandscape` 
    margin: 0 0 20px 20px;
  `}

  .react-reveal {
    height: 100%;
    width: 100%;
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
    height: 18vw;
    width: 100%;
  }
`;

export const SlideshowContainerStyled = css`
  width: calc(100vw - 160px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideshowImageStyled = css`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: calc(100vh - 160px);
  overflow: hidden;
`;

export const SlideshowVideoStyled = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const SlideshowCaptionStyled = css`
  display: inline-block;
  position: absolute;
  bottom: 30px;
  left: 40px;
`;
