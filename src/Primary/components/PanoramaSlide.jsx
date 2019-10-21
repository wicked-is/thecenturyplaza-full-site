import React, { useEffect, useContext } from "react";
import styled from "styled-components/macro";
import PhotoSphereViewer from "photo-sphere-viewer";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Context from "../../config/Context";
import {
  SlideMaskStyled,
  SlideContainerStyled,
  PanoImageStyled
} from "Primary/style.js";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";
import { mediaMin } from "shared/styled-components/MediaQueries.js";

const SlideMask = styled.div`
  ${SlideMaskStyled};
`;

const SlideContainer = styled.div`
  ${SlideContainerStyled};
`;

const PanoImage = styled.div`
  ${PanoImageStyled};
`;

const PanoViewer = styled.div`
  width: calc(
    100vw - ${props => parseFloat(props.theme.mobileSideMargin) * 2}px
  );
  height: 100%;
  overflow: hidden;
  z-index: 0;
  background: transparent;

  ${mediaMin.tabletLandscape`
    width: calc(100vw - ${props =>
      parseFloat(props.theme.desktopSideMargin) * 2}px);
  `}

  .psv-container {
    position: relative;
    width: calc(
      100vw - ${props => parseFloat(props.theme.mobileSideMargin) * 2}px
    );
    height: 100%;
    overflow: hidden;
    position: relative;
    background: transparent;

    ${mediaMin.tabletLandscape`
      width: calc(100vw - ${props =>
        parseFloat(props.theme.desktopSideMargin) * 2}px);
    `}

    .psv-hud {
      width: calc(
        100vw - ${props => parseFloat(props.theme.mobileSideMargin) * 2}px
      );
      height: 100%;
      overflow: hidden;
      position: absolute;

      ${mediaMin.tabletLandscape`
        width: calc(100vw - ${props =>
          parseFloat(props.theme.desktopSideMargin) * 2}px);
      `}
    }
  }

  .psv-loader-container {
    position: relative;
    width: calc(
      100vw - ${props => parseFloat(props.theme.mobileSideMargin) * 2}px
    );
    height: 100%;
    overflow: hidden;
    background: transparent;

    ${mediaMin.tabletLandscape`
      width: calc(100vw - ${props =>
        parseFloat(props.theme.desktopSideMargin) * 2}px);
    `}

    .psv-loader {
      width: calc(
        100vw - ${props => parseFloat(props.theme.mobileSideMargin) * 2}px
      );
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      background: transparent;

      ${mediaMin.tabletLandscape`
        width: calc(100vw - ${props =>
          parseFloat(props.theme.desktopSideMargin) * 2}px);
      `}

      img {
        margin: 0 auto;
      }

      .psv-loader-text {
        text-align: center;
        max-width: 100% !important;
        width: 100%;
        color: ${props => props.theme.black};
        font-family: ${props => props.theme.sansSerifThin};
        font-size: 30px;
        letter-spacing: 1.5px;
      }

      .psv-loader-canvas {
        display: none;
      }
    }
  }
`;

// Will be refactoring props to Context as needed
// Comments only temporary

const PanoramaSlide = ({
  slide, // Oobject
  nextPath, //Path for Naigation
  previousPath, //Path for Navigation
  firstSlide, // Refactor
  firstSectionSlide, //Refactor
  lastSlide, //Refactor
  lastSectionSlide, //Refactor
  isFirstSection, //Refactor
  isFirstSlide, //Refactor
  sectionIndex, //Used For FooterCaptions
  slideIndex //Used For FooterCaptions
}) => {
  const context = useContext(Context);
  const {
    pauseScroll,
    isExisting,
    setIsExisting,
    triggerExit,
    currentSlideIndex,
    currentSectionIndex
  } = context;

  const setUpPanorama = () => {
    new PhotoSphereViewer({
      container: "panorama",
      panorama: require("../../imgs/panorama/pano.jpg"),
      navbar: false,
      anim_speed: "0.25rpm",
      default_lat: 0,
      latitude_range: [-0.3, 0.3],
      default_long: 0.3,
      max_fov: 38,
      mousewheel: false,
      loading_txt: "360° Pano loading ..."
    });
  };

  useEffect(() => {
    setTimeout(() => setUpPanorama(), 800);
  }, []);

  useEffect(() => {
    currentSectionIndex(sectionIndex);
    currentSlideIndex(slideIndex);
  }, [currentSectionIndex, sectionIndex, currentSlideIndex, slideIndex]);

  useEffect(() => {
    return () => {
      setIsExisting(false);
    };
  }, [setIsExisting]);

  return (
    <ReactScrollWheelHandler
      pauseListeners={pauseScroll}
      upHandler={() => triggerExit(previousPath)}
      downHandler={() => triggerExit(nextPath)}
      // Will throw a warning in Dev but not Prod build, can't resolve warning
      // Ref this GIPHY https://giphy.com/gifs/personal-why-race-XNX9uw7fykn5e
      rightHandler={() => triggerExit(previousPath)}
      leftHandler={() => triggerExit(nextPath)}
    >
      <SlideMask
        lastSectionSlide={lastSectionSlide}
        lastSlide={lastSlide}
        isExisting={isExisting}
      >
        <SlideContainer>
          <SlideBackward previousPath={previousPath} />
          <SlideForward nextPath={nextPath} />
          <PanoImage>
            <PanoViewer id="panorama" />
          </PanoImage>
        </SlideContainer>
      </SlideMask>
    </ReactScrollWheelHandler>
  );
};
export default PanoramaSlide;
