import React, { useContext, useEffect } from "react";
import Context from "../../config/Context";
import styled from "styled-components";
import ReactPlayer from "react-player";
import {
  SlideshowContainerStyled,
  SlideshowImageStyled,
  SlideshowVideoStyled,
  SlideshowCaptionStyled
} from "Gallery/style.js";
import ResponsiveImage from "shared/components/ResponsiveImage.js";

const SlideshowContainer = styled.section`
  ${SlideshowContainerStyled};
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

const SlideshowMedia = ({ media }) => {
  const context = useContext(Context);
  const { setHideFooter, globalConfig, setGlobalConfig } = context;

  useEffect(() => {
    setHideFooter(true);
    return () => {
      setHideFooter(false);
    };
  }, [setHideFooter]);

  useEffect(() => {
    return () => {
      setGlobalConfig({
        ...globalConfig,
        returnPath: null
      });
    };
  }, [globalConfig, setGlobalConfig]);

  return (
    <SlideshowContainer>
      {media.type === "image" ? (
        <SlideshowImage>
          <ResponsiveImage srcPath={media.source} />
        </SlideshowImage>
      ) : (
        <SlideshowVideo>
          <ReactPlayer
            url={media.source}
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
