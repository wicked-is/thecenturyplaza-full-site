import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SplitSlideContainerStyled, TextMaskStyled, ImageMaskedStyled, ImageMaskStyled } from "Primary/style.js";
import parse from "html-react-parser";
import ResponsiveImage from "shared/components/ResponsiveImage.js"
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";
import { navigate } from "@reach/router";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


const SlideContainer = styled.div`${SplitSlideContainerStyled};`;
const TextMask = styled.div`${TextMaskStyled};`;
const ImageMasked = styled.div`${ImageMaskedStyled};`;
const ImageMask = styled.div`${ImageMaskStyled};`;

// Wil be refactored into global slide styled compontent
// const SplitSlideContainer = styled.article`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: calc(100vh - 160px);
//   flex-direction: ${props => props.isInverted ? "row-reverse" : "row"};
//   justify-content: space-evenly;

//   img {
//     max-width: 30vw;
//     margin: ${props => props.isInverted ? "0 5vw 0 0" : "0 0 0 5vw"};
//     opacity: 0;
//     animation: ${fadeIn} 1.45s ease-in-out 0.65s forwards;
//     will-change: opacity;
//   }

//   h2 {
//     font-family:  ${props => props.theme.serifMedium};
//     font-size: 34px;
//     letter-spacing: .34px;
//     width: 30vw;
//     text-align: center;
//     margin: ${props => props.isInverted ? "0 0 0 5vw" : "0 5vw 0 0"};
//     position:relative;
//   }

//   p {
//     position: absolute;
//     bottom: 30px;
//     left: 40px;
//     margin: 0;
//     opacity: 0;
//     animation: ${fadeIn} 0.5s ease-in-out 1.5s forwards;
//     will-change: opacity;
//   }
// `

// const CascadeMask = styled.div`
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 200%;
//     background: linear-gradient(0deg, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%);
//     animation: ${cascadeText} 1.5s ease-in forwards;
//     will-change: transform;
// `


const SplitSlide = props => {
  const { slide, nextPath, previousPath, toggleExpand, closeExpand } = props;


  //   useEffect(() => {
  //     .preventDefault();
  // }, []);


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
        <ImageMasked>
          <ImageMask isInverted={slide.inverted} />
          <ResponsiveImage srcPath={slide.source} />
        </ImageMasked>
        <h2><TextMask />{parse(slide.headline)}</h2>
        {slide.caption.length > 0 && <p>{parse(slide.caption)}</p>}
      </SlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default SplitSlide;
