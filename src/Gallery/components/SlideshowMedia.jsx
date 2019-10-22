import React, { useContext, useEffect, useState } from "react";
import Context from "../../config/Context";
import { navigate } from "@reach/router";
import styled from "styled-components/macro";
import ReactPlayer from "react-player";
import {
  SlideshowContainerStyled,
  SlideshowPreviousStyled,
  SlideshowNextStyled,
  SlideshowImageStyled,
  SlideshowVideoStyled,
  SlideshowCaptionStyled
} from "Gallery/style.js";
import ResponsiveImage from "shared/components/ResponsiveImage.js";
import galleryData from "../galleryData.json";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import GalleryVideoScrollController from "shared/components/GalleryVideoScrollController.jsx";

const SlideshowContainer = styled.div`
  ${SlideshowContainerStyled};
`;

const SlideshowPrevious = styled.div`
  ${SlideshowPreviousStyled};
`;

const SlideshowNext = styled.div`
  ${SlideshowNextStyled};
`;

const SlideshowImage = styled.div`
  ${SlideshowImageStyled};
`;
const SlideshowVideo = styled.div`
  ${SlideshowVideoStyled};
`;
const SlideshowCaption = styled.div`
  ${SlideshowCaptionStyled};
`;

const videoElement = () => ({
  width: "100%",
  height: "100%",
  maxHeight: "100%"
});

const SlideshowMedia = ({ sectionId, media, mediaId }) => {
  const [startVideo, setStartVideo] = useState(false);
  const context = useContext(Context);
  const {
    setGlobalConfig,
    setReturnPath,
    scrollCooldown,
    pauseScroll
  } = context;

  const previousMedia = () => {
    if (sectionId === 0) {
      if (mediaId === 0) {
        // Previous Section's Last Media
        navigate(
          "/gallery/" +
            galleryData[3].slug +
            "/" +
            galleryData[3].media[galleryData[3].media.length - 1].slug
        );
      } else {
        // Previous Media
        navigate(
          "/gallery/" +
            galleryData[0].slug +
            "/" +
            galleryData[0].media[mediaId - 1].slug
        );
      }
    } else if (sectionId === 1) {
      if (mediaId === 0) {
        // Previous Section's Last Media
        navigate(
          "/gallery/" +
            galleryData[0].slug +
            "/" +
            galleryData[0].media[galleryData[0].media.length - 1].slug
        );
      } else {
        // Previous Media
        navigate(
          "/gallery/" +
            galleryData[1].slug +
            "/" +
            galleryData[1].media[mediaId - 1].slug
        );
      }
    } else if (sectionId === 2) {
      if (mediaId === 0) {
        // Previous Section's Last Media
        navigate(
          "/gallery/" +
            galleryData[1].slug +
            "/" +
            galleryData[1].media[galleryData[1].media.length - 1].slug
        );
      } else {
        // Previous Media
        navigate(
          "/gallery/" +
            galleryData[2].slug +
            "/" +
            galleryData[2].media[mediaId - 1].slug
        );
      }
    } else if (sectionId === 3) {
      if (mediaId === 0) {
        // Previous Section's Last Media
        navigate(
          "/gallery/" +
            galleryData[2].slug +
            "/" +
            galleryData[2].media[galleryData[2].media.length - 1].slug
        );
      } else {
        // Previous Media
        navigate(
          "/gallery/" +
            galleryData[3].slug +
            "/" +
            galleryData[3].media[mediaId - 1].slug
        );
      }
    }
  };

  const nextMedia = () => {
    if (sectionId === 0) {
      if (mediaId === galleryData[0].media.length - 1) {
        //  Next Section's First Media
        navigate("/gallery/" + galleryData[1].slug);
      } else {
        // Next Media
        navigate(
          "/gallery/" +
            galleryData[0].slug +
            "/" +
            galleryData[0].media[mediaId + 1].slug
        );
      }
    } else if (sectionId === 1) {
      if (mediaId === galleryData[1].media.length - 1) {
        //  Next Section's First Media
        navigate("/gallery/" + galleryData[2].slug);
      } else {
        // Next Media
        navigate(
          "/gallery/" +
            galleryData[1].slug +
            "/" +
            galleryData[1].media[mediaId + 1].slug
        );
      }
    } else if (sectionId === 2) {
      if (mediaId === galleryData[2].media.length - 1) {
        //  Next Section's First Media
        navigate("/gallery/" + galleryData[3].slug);
      } else {
        // Next Media
        navigate(
          "/gallery/" +
            galleryData[2].slug +
            "/" +
            galleryData[2].media[mediaId + 1].slug
        );
      }
    } else if (sectionId === 3) {
      if (mediaId === galleryData[3].media.length - 1) {
        //  Next Section's First Media
        navigate("/gallery/" + galleryData[0].slug);
      } else {
        // Next Media
        navigate(
          "/gallery/" +
            galleryData[3].slug +
            "/" +
            galleryData[3].media[mediaId + 1].slug
        );
      }
    }
  };

  const removePlaceholder = () => {
    setStartVideo(true);
  };

  useEffect(() => {
    setReturnPath("/gallery");
  }, [setReturnPath]);

  useEffect(() => {
    return () => {
      setReturnPath(null);
    };
  }, [setReturnPath]);

  useEffect(() => {
    setGlobalConfig({
      headerBackground: "white",
      footerBackground: "transparent",
      footerDisplay: false,
      footerFixed: false,
      sidebarBackground: "transparent"
    });
  }, [setGlobalConfig]);

  useEffect(() => {
    return () => {
      setGlobalConfig({
        headerBackground: "white",
        footerBackground: "transparent",
        footerDisplay: true,
        footerFixed: false,
        sidebarBackground: "transparent"
      });
    };
  }, [setGlobalConfig]);

  return (
    <ReactScrollWheelHandler
      pauseListeners={pauseScroll}
      upHandler={() => {
        previousMedia();
        scrollCooldown(1000);
      }}
      downHandler={() => {
        nextMedia();
        scrollCooldown(1000);
      }}
      rightHandler={() => {
        previousMedia();
        scrollCooldown(1000);
      }}
      leftHandler={() => {
        nextMedia();
        scrollCooldown(1000);
      }}
    >
      <SlideshowContainer>
        <SlideshowPrevious onClick={previousMedia} />
        <SlideshowNext onClick={nextMedia} />
        {media.type === "image" ? (
          <SlideshowImage>
            <ResponsiveImage srcPath={media.source} />
          </SlideshowImage>
        ) : (
          <SlideshowVideo>
            <ReactPlayer
              url={media.source}
              preload="true"
              controls
              playsinline
              width="100%"
              height="56.25vw"
              style={videoElement()}
              config={{
                vimeo: {
                  playerVars: { transparent: true }
                }
              }}
            />
          </SlideshowVideo>
        )}
        <SlideshowCaption>{media.caption}</SlideshowCaption>
      </SlideshowContainer>
    </ReactScrollWheelHandler>
  );
};

export default SlideshowMedia;
