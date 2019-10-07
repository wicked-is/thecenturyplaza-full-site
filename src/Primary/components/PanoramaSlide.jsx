import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import PhotoSphereViewer from "photo-sphere-viewer";
import parse from "html-react-parser";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { navigate } from "@reach/router";
import Context from "../../config/Context";
import { SlideContainerStyled, PanoFullStyled } from "Primary/style.js";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";
import { mediaMin } from "shared/styled-components/MediaQueries.js";

const SlideContainer = styled.div`
  ${SlideContainerStyled};
`;
const ImageFull = styled.div`
  ${PanoFullStyled};
`;

const PanoViewer = styled.div`
  width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);
  height: calc(80vh - ${props => parseFloat(props.theme.headerHeight) * 2}px);
  overflow: hidden;
  z-index: 0;

  ${mediaMin.tabletLandscape`
    width: calc(100vw - ${props =>
      parseFloat(props.theme.desktopMargin) * 2}px);
  `}

  .psv-container {
    position: relative;
    width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);
    height: calc(80vh - ${props => parseFloat(props.theme.headerHeight) * 2}px);
    overflow: hidden;
    position: relative;

    ${mediaMin.tabletLandscape`
      width: calc(100vw - ${props =>
        parseFloat(props.theme.desktopMargin) * 2}px);
    `}

    .psv-hud {
      width: calc(
        100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px
      );
      height: calc(
        80vh - ${props => parseFloat(props.theme.headerHeight) * 2}px
      );
      overflow: hidden;
      position: absolute;

      ${mediaMin.tabletLandscape`
        width: calc(100vw - ${props =>
          parseFloat(props.theme.desktopMargin) * 2}px);
      `}
    }
  }

  .psv-loader-container {
    position: relative;
    width: calc(100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px);
    height: calc(80vh - ${props => parseFloat(props.theme.headerHeight) * 2}px);
    overflow: hidden;

    ${mediaMin.tabletLandscape`
      width: calc(100vw - ${props =>
        parseFloat(props.theme.desktopMargin) * 2}px);
    `}

    .psv-loader {
      width: calc(
        100vw - ${props => parseFloat(props.theme.mobileMargin) * 2}px
      );
      height: calc(
        80vh - ${props => parseFloat(props.theme.headerHeight) * 2}px
      );
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;

      ${mediaMin.tabletLandscape`
        width: calc(100vw - ${props =>
          parseFloat(props.theme.desktopMargin) * 2}px);
      `}

      img {
        margin: 0 auto;
      }

      .psv-loader-text {
        text-align: center;
        max-width: 100% !important;
        width: 100%;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.sansSerifThin};
        font-size: 40px;
        letter-spacing: 1.5px;
        color: ${props => props.theme.white};
      }

      .psv-loader-canvas {
        display: none;
      }
    }
  }
`;

const PanoramaSlide = ({
  slide,
  nextPath,
  previousPath,
  sectionIndex,
  slideIndex
}) => {
  const context = useContext(Context);
  const {
    pauseScroll,
    scrollCooldown,
    currentSlideIndex,
    currentSectionIndex
  } = context;

  const setUpPanorama = () => {
    new PhotoSphereViewer({
      container: "panorama",
      panorama: require("../../imgs/panorama/pano_10000.jpg"),
      navbar: false,
      anim_speed: "1rpm",
      default_lat: 0,
      latitude_range: [0.3, -0.3],
      default_long: 0.3,
      max_fov: 38,
      mousewheel: false,
      loading_txt: "360° Pano"
    });
  };

  useEffect(() => {
    setTimeout(() => setUpPanorama(), 800);
  }, []);

  useEffect(() => {
    currentSectionIndex(sectionIndex);
    currentSlideIndex(slideIndex);
  }, [currentSectionIndex, sectionIndex, currentSlideIndex, slideIndex]);

  return (
    <ReactScrollWheelHandler
      pauseListeners={pauseScroll}
      upHandler={() => {
        navigate(previousPath);
        scrollCooldown();
      }}
      downHandler={() => {
        navigate(nextPath);
        scrollCooldown();
      }}
    >
      <SlideContainer>
        <SlideBackward previousPath={previousPath} />
        <SlideForward nextPath={nextPath} />
        <ImageFull>
          <PanoViewer id="panorama" />
        </ImageFull>
      </SlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default PanoramaSlide;
