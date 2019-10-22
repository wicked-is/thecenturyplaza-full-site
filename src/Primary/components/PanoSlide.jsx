import React, { useEffect, useContext } from "react";
import Context from "../../config/Context";
import styled from "styled-components/macro";
import { Pannellum } from "pannellum-react";
import panoImg from "../../imgs/pano_4096condensed.jpg";
import { SlideMaskStyled, SlideContainerStyled } from "Primary/style.js";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const SlideMask = styled.div`
  ${SlideMaskStyled};
`;

const SlideContainer = styled.div`
  ${SlideContainerStyled};

  .pnlm-container {
    background: white;

    .pnlm-load-box {
      background-color: transparent;
      font-family: ${props => props.theme.sansSerifThin};
      font-size: 30px;
      letter-spacing: 1.5px;
      color: ${props => props.theme.black};

      .pnlm-lbar {
        border: ${props => props.theme.gray} 1px solid;

        .pnlm-lbar-fill {
          background: ${props => props.theme.gray};
        }
      }
    }

    .pnlm-error-msg {
      background-color: transparent;
      font-family: ${props => props.theme.sansSerifThin};
      letter-spacing: 1.5px;
      color: ${props => props.theme.black};
    }

    .pnlm-about-msg {
      display: none;
      opacity: 0;
      line-height: 0;
      visibility: hidden;

      a {
        display: none;
        opacity: 0;
        width: 0;
        visibility: hidden;
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
    scrollCooldown,
    isExisting,
    setIsExisting,
    triggerExit,
    currentSlideIndex,
    currentSectionIndex
  } = context;

  const pauseScrollDetection = () => {
    scrollCooldown(4000);
  };

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
    >
      <SlideMask
        lastSectionSlide={lastSectionSlide}
        lastSlide={lastSlide}
        isExisting={isExisting}
      >
        <SlideContainer>
          <SlideBackward previousPath={previousPath} />
          <SlideForward nextPath={nextPath} />
          <Pannellum
            width="100%"
            height="350px"
            image={panoImg}
            vaov={360}
            yaw={18}
            pitch={0}
            maxPitch={0}
            minPitch={0}
            hfov={100}
            mouseZoom={false}
            showZoomCtrl={false}
            showFullscreenCtrl={false}
            showControls={false}
            autoLoad
            autoRotate={0.35}
            onMousedown={() => {
              pauseScrollDetection();
            }}
            onMouseup={() => {
              pauseScrollDetection();
            }}
            onTouchstart={() => {
              pauseScrollDetection();
            }}
            onTouchend={() => {
              pauseScrollDetection();
            }}
          />
        </SlideContainer>
      </SlideMask>
    </ReactScrollWheelHandler>
  );
};
export default PanoramaSlide;
