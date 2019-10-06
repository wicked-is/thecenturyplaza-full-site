import React, { useContext } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { navigate } from "@reach/router";
import ResponsiveImage from "shared/components/ResponsiveImage.js";
import Context from "../../config/Context";
import {
  SlideMaskStyled,
  SlideContainerStyled,
  TextMaskStyled,
  NextSlideContainerStyled,
  NextLeftEdgeStyled,
  NextRightEdgeStyled,
  PlayerContainerStyled,
  FullScreenStyled,
  PlaceHolderStyled
} from "Primary/style.js";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";

const SlideMask = styled.div`
  ${SlideMaskStyled};
`;

const SlideContainer = styled.div`
  ${SlideContainerStyled};
`;

const NextSlideContainer = styled.div`
  ${NextSlideContainerStyled};
`;

const NextLeftEdge = styled.div`
  ${NextLeftEdgeStyled};
`;

const NextRightEdge = styled.div`
  ${NextRightEdgeStyled};
`;

const PlayerContainer = styled.div`
  ${PlayerContainerStyled};
`;

const FullScreen = styled.div`
  ${FullScreenStyled};
`;

const PlaceHolder = styled.div`
  ${PlaceHolderStyled};
`;

// const TextMask = styled.div`
//   ${TextMaskStyled};
// `;

const TextSlide = ({
  slide,
  nextSlide,
  previousSlide,
  nextPath,
  previousPath
}) => {
  const context = useContext(Context);
  const { pauseScroll, scrollCooldown, isExisting, triggerExit } = context;

  return (
    <ReactScrollWheelHandler
      pauseListeners={pauseScroll}
      upHandler={() => {
        navigate(previousPath);
        scrollCooldown();
      }}
      downHandler={() => {
        triggerExit(nextPath);
        scrollCooldown();
      }}
    >
      <SlideMask isExisting={isExisting}>
        <SlideContainer>
          <SlideBackward previousPath={previousPath} />
          <SlideForward nextPath={nextPath} />
          {slide.headline.length > 0 && (
            <h2>
              {/* <TextMask /> */}
              {parse(slide.headline)}
            </h2>
          )}
          {slide.caption.length > 0 && <p>{parse(slide.caption)}</p>}
        </SlideContainer>
      </SlideMask>
      {nextSlide.slug === "arrival" && (
        <NextSlideContainer>
          <NextLeftEdge />
          <PlayerContainer>
            <FullScreen>
              <PlaceHolder>
                <ResponsiveImage srcPath={nextSlide.placeholder} />
              </PlaceHolder>
            </FullScreen>
          </PlayerContainer>
          <NextRightEdge />
        </NextSlideContainer>
      )}
    </ReactScrollWheelHandler>
  );
};
export default TextSlide;
