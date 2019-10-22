import React, { useContext } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import styled from "styled-components/macro";
import Context from "../../config/Context";
import { navigate } from "@reach/router";
import { mediaMin } from "../styled-components/MediaQueries.js";

const InnerScrollContainer = styled.span`
  position: absolute;
  transition: all 0.5s ease-in-out;
  top: ${props =>
    props.isExpanded ? "0" : props.theme.mobilePortraitHeaderHeight + "px"};
  left: ${props =>
    props.isExpanded ? "0" : props.theme.mobileSideMargin + "px"};
  display: inline-block;
  width: ${props =>
    props.isExpanded
      ? "100vw"
      : "calc(100vw - " + parseFloat(props.theme.mobileSideMargin) * 2 + "px)"};
  height: ${props =>
    props.isExpanded
      ? "100%"
      : "calc(100% - " +
        parseFloat(props.theme.mobilePortraitHeaderHeight) * 2 +
        "px)"};
  margin: 0;
  z-index: 600;

  ${mediaMin.phoneXL`
    top: ${props =>
      props.isExpanded ? "0" : props.theme.mobileLandscapeHeaderHeight + "px"};
    height: ${props =>
      props.isExpanded
        ? "100%"
        : "calc(100% - " +
          parseFloat(props.theme.mobileLandscapeHeaderHeight * 2) +
          "px)"};
    padding: 0;

  `}

  ${mediaMin.tablet`
  top: ${props =>
    props.isExpanded ? "0" : props.theme.desktopHeaderHeight + "px"};
  
    height: ${props =>
      props.isExpanded
        ? "100%"
        : "calc(100% - " +
          parseFloat(props.theme.desktopHeaderHeight * 2) +
          "px)"};

  padding: 0;

  `}


  ${mediaMin.tabletLandscape`
    width: ${props =>
      props.isExpanded
        ? "100vw"
        : "calc(100vw - " +
          parseFloat(props.theme.desktopSideMargin) * 2 +
          "px)"};
    left: ${props =>
      props.isExpanded ? "0" : props.theme.desktopSideMargin + "px"};
  `}
`;

const GalleryVideoScrollController = ({ previousMediaPath, nextMediaPath }) => {
  const context = useContext(Context);
  const { pauseScroll, scrollCooldown } = context;

  return (
    <InnerScrollContainer>
      <ReactScrollWheelHandler
        pauseListeners={pauseScroll}
        upHandler={() => {
          navigate(previousMediaPath);
          scrollCooldown(1000);
        }}
        downHandler={() => {
          navigate(nextMediaPath);
          scrollCooldown(1000);
        }}
        rightHandler={() => {
          navigate(previousMediaPath);
          scrollCooldown(1000);
        }}
        leftHandler={() => {
          navigate(nextMediaPath);
          scrollCooldown(1000);
        }}
      ></ReactScrollWheelHandler>
    </InnerScrollContainer>
  );
};
export default GalleryVideoScrollController;
