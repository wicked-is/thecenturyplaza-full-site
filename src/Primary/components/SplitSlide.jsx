import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { navigate } from "@reach/router";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import Context from "../../config/Context";
import { SlideShow } from "shared/styled-components/SlideShow.js";
import {
  SplitSlideContainerStyled,
  TextMaskStyled,
  ImageContainerStyled,
  ImageMaskStyled
} from "Primary/style.js";
import ResponsiveImage from "shared/components/ResponsiveImage.js";
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";
// import SimpleSlider from "shared/components/SlickSlider.jsx";

const SlideContainer = styled.div`
  ${SplitSlideContainerStyled};
`;
// const TextMask = styled.div`
//   ${TextMaskStyled};
// `;

const ImageContainer = styled.div`
  ${ImageContainerStyled};
`;
const ImageSlideShow = styled.div`
  ${SlideShow};
`;
// const ImageMask = styled.div`${ImageMaskStyled};`;

const SplitSlide = ({
  slide,
  nextPath,
  previousPath,
  toggleExpand,
  closeExpand
}) => {
  const context = useContext(Context);
  const { pauseScroll, scrollCooldown } = context;

  // useEffect(() => {
  //   setTimeout(() => {
  //   }, 500);
  // }, []);

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
      <SlideContainer isInverted={slide.inverted}>
        <SlideBackward previousPath={previousPath} />
        <SlideForward nextPath={nextPath} />
        <ImageContainer>
          {/* <ImageMask isInverted={slide.inverted} /> */}
          {slide.source.length > 1 ? (
            <ImageSlideShow>
              {" "}
              {slide.source.map((source, index) => (
                <ResponsiveImage key={index} srcPath={source} />
              ))}{" "}
            </ImageSlideShow>
          ) : (
            <ResponsiveImage srcPath={slide.source[0]} />
          )}
        </ImageContainer>
        <h2>
          {/* <TextMask /> */}
          {parse(slide.headline)}
        </h2>
        {slide.caption.length > 0 && <p>{parse(slide.caption)}</p>}
      </SlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default SplitSlide;
