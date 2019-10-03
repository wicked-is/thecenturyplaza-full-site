import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SplitSlideContainerStyled, TextMaskStyled, ImageContainerStyled, ImageMaskStyled } from "Primary/style.js";
import parse from "html-react-parser";
import ResponsiveImage from "shared/components/ResponsiveImage.js"
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";
// import { navigate } from "@reach/router";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
// import SimpleSlider from "shared/components/SlickSlider.jsx";

const SlideContainer = styled.div`${SplitSlideContainerStyled};`;
const TextMask = styled.div`${TextMaskStyled};`;
const ImageContainer = styled.div`${ImageContainerStyled};`;
// const ImageMask = styled.div`${ImageMaskStyled};`;

const SplitSlide = props => {
  const { slide, nextPath, previousPath, toggleExpand, closeExpand } = props;

  //   useEffect(() => {
  //     .preventDefault();
  // }, []);

  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // }

  return (
    <ReactScrollWheelHandler
      // pauseListeners={true}
      upHandler={() => {
        // console.log("scroll up");
        // closeExpand();
        // if (props.location === previousPath) {
        //   // console.log("where you going");
        //   // navigate(previousPath);
        // } else {
        //   // console.log(props.location);
        //   // navigate(previousPath);
        // }
        // navigate(previousPath);
      }}
      downHandler={() => {
        // console.log("scroll down")
        // closeExpand();
        // if (props.location === nextPath) {
        //   console.log("where you going");
        //   // navigate(nextPath);
        // } else {
        //   console.log(props.location);
        //   console.log(nextPath);
        //   // navigate(nextPath);
        // }
        // navigate(nextPath);
      }}
    >
      <SlideContainer isInverted={slide.inverted}>
        <SlideBackward previousPath={previousPath} />
        <SlideForward nextPath={nextPath} />
        <ImageContainer>
          {/* <ImageMask isInverted={slide.inverted} /> */}
          {slide.source.length > 1 ? (
            slide.source.map((source, index) => (
              <ResponsiveImage key={index} srcPath={source} />
            ))
          ) : (
              <ResponsiveImage srcPath={slide.source[0]} />
            )}
        </ImageContainer>
        <h2><TextMask />{parse(slide.headline)}</h2>
        {slide.caption.length > 0 && <p>{parse(slide.caption)}</p>}
      </SlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default SplitSlide;
