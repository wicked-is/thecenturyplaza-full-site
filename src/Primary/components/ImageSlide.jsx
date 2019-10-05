import React, { useContext } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { navigate } from "@reach/router";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import Context from "../../config/Context";
import { SlideContainerStyled, ImageFullStyled } from "Primary/style.js";
import ResponsiveImage from "shared/components/ResponsiveImage.js";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";

const SlideContainer = styled.div`
  ${SlideContainerStyled};
`;
const ImageFull = styled.div`
  ${ImageFullStyled};
`;

const ImageSlide = ({
  slide,
  nextPath,
  previousPath,
  toggleExpand,
  closeExpand,
  location
}) => {
  const context = useContext(Context);
  const { pauseScroll, scrollCooldown } = context;

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
          <ResponsiveImage srcPath={slide.source[0]} />
        </ImageFull>
        <p>{parse(slide.caption)}</p>
      </SlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default ImageSlide;
