import React, { useContext, useEffect } from "react";
import Context from "../../config/Context";
import { navigate } from "@reach/router";
import styled from "styled-components";
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

const SlideshowContainer = styled.section`
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
const SlideshowVideo = styled.h2`
  ${SlideshowVideoStyled};
`;
const SlideshowCaption = styled.div`
  ${SlideshowCaptionStyled};
`;

const videoElement = () => ({
  width: "100%",
  height: "100%",
  maxHeight: "calc(100vh - 160px)"
});

const SlideshowMedia = ({ sectionId, media, mediaId }) => {
  const context = useContext(Context);
  const { setHideFooter, globalConfig, setGlobalConfig } = context;

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
        // Previous Media's Last Media
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

  useEffect(() => {
    setHideFooter(true);
    return () => {
      setHideFooter(false);
    };
  }, [setHideFooter]);

  useEffect(() => {
    setGlobalConfig({
      ...globalConfig,
      headerBackground: "white",
      pageBackground: "white",
      footerDisplay: false,
      returnPath: "/gallery"
    });
  }, [setGlobalConfig]);

  useEffect(() => {
    return () => {
      setGlobalConfig({
        ...globalConfig,
        returnPath: null
      });
    };
  }, [setGlobalConfig]);

  return (
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
          />
        </SlideshowVideo>
      )}
      <SlideshowCaption>{media.caption}</SlideshowCaption>
    </SlideshowContainer>
  );
};

export default SlideshowMedia;
