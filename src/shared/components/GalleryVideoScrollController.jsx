import React, { useContext } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import styled from "styled-components/macro";
import Context from "../../config/Context";
import { navigate } from "@reach/router";
import { mediaMin } from "../styled-components/MediaQueries.js";

const InnerScrollContainer = styled.span`
  position: absolute;
  transition: all 0.5s ease-in-out;
  top: ${props => props.theme.mobilePortraitHeaderHeight}px;
  left: ${props => props.theme.mobileSideMargin}px;
  display: inline-block;
  width: 100vw;
  height: 100%;
  margin: 0;
  z-index: 600;

  ${mediaMin.phoneXL`
    top: ${props => props.theme.mobileLandscapeHeaderHeight + "px"};
    height: ${props =>
      "calc(100% - " +
      parseFloat(props.theme.mobileLandscapeHeaderHeight * 2) +
      "px)"};
    padding: ${props => props.theme.mobileLandscapeHeaderHeight + "px 0"};

  `}

  ${mediaMin.tablet`
  top: ${props => props.theme.desktopHeaderHeight + "px"};
  height: ${props =>
    "calc(100% - " + parseFloat(props.theme.DesktopHeaderHeight * 2) + "px)"};
      padding: ${props => props.theme.desktopHeaderHeight + "px 0"};

  `}


  ${mediaMin.tabletLandscape`
    width: ${props =>
      "calc(100vw - " + parseFloat(props.theme.desktopSideMargin) * 2 + "px)"};
    left: ${props => props.theme.desktopSideMargin + "px"};
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
