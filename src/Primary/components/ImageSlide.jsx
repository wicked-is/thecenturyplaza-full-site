import React from "react";
import styled from "styled-components";
import { SlideContainerStyled, ImageFullStyled } from "Primary/style.js";
import { fadeIn } from "shared/styled-components/Transitions.js";
import parse from "html-react-parser";
import ResponsiveImage from "shared/components/ResponsiveImage.js"
import SlideForward from "shared/components/SlideForward.jsx";
import SlideBackward from "shared/components/SlideBackward.jsx";
import { navigate } from "@reach/router";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const SlideContainer = styled.div`${SlideContainerStyled};`;
const ImageFull = styled.div`${ImageFullStyled};`;

const ImageSlide = props => {
  const { slide, nextPath, previousPath, toggleExpand, closeExpand } = props;

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
      <SlideContainer>
        <SlideBackward previousPath={previousPath} />
        <SlideForward nextPath={nextPath} />
        <ImageFull>
          <ResponsiveImage srcPath={slide.source} />
        </ImageFull>
        <p>{parse(slide.caption)}</p>
      </SlideContainer>
    </ReactScrollWheelHandler>
  );
};
export default ImageSlide;
