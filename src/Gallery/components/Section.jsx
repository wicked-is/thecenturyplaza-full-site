import React, { useContext } from "react";
import { Link } from "@reach/router";
import Context from "../../config/Context";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Grid from "styled-components-grid";
import Fade from "react-reveal/Fade";

import {
  SectionStyled,
  SectionTitlesStyled,
  SectionTitleStyled,
  SectionMediaStyled,
  MediaStyled,
  PlaceholderStyled
} from "Gallery/style.js";
import ResponsiveImage from "shared/components/ResponsiveImage.js";

const GallerySection = styled.section`
  ${SectionStyled};
`;
const GallerySectionTitles = styled.div`
  ${SectionTitlesStyled};
`;
const GallerySectionTitle = styled.h2`
  ${SectionTitleStyled};
`;
const GallerySectionMedia = styled.div`
  ${SectionMediaStyled};
`;
const GalleryMedia = styled.div`
  ${MediaStyled};
`;
const Placeholder = styled.div`
  ${PlaceholderStyled};
`;

const videoElement = () => ({
  width: "100%",
  height: "100%",
  display: "none"
});

const Section = ({ section, uri }) => {
  const context = useContext(Context);
  const { globalConfig, setGlobalConfig } = context;

  const declareReturnPath = () => {
    setGlobalConfig({
      ...globalConfig,
      headerBackground: "transparent",
      returnPath: "/gallery"
    });
  };

  return (
    <GallerySection>
      <Grid>
        <Grid.Unit size={{ phone: 1, tabletLandscape: 2 / 12 }}>
          <GallerySectionTitles>
            <GallerySectionTitle>{section.title}</GallerySectionTitle>
          </GallerySectionTitles>
        </Grid.Unit>
        <Grid.Unit size={{ phone: 1, tabletLandscape: 10 / 12 }}>
          <GallerySectionMedia>
            {section.media.map((media, index) => (
              <GalleryMedia key={index} type={media.type}>
                <Fade>
                  <Link
                    onClick={declareReturnPath}
                    to={"/gallery/" + section.slug + "/" + media.slug}
                  >
                    {media.type === "video" ? (
                      <React.Fragment>
                        <Placeholder>
                          <ResponsiveImage srcPath={media.placeholder} />
                        </Placeholder>
                        <ReactPlayer
                          url={media.source}
                          width="100%"
                          height="100%"
                          style={videoElement()}
                        />
                      </React.Fragment>
                    ) : (
                      <ResponsiveImage srcPath={media.source} />
                    )}
                  </Link>
                </Fade>
              </GalleryMedia>
            ))}
          </GallerySectionMedia>
        </Grid.Unit>
      </Grid>
    </GallerySection>
  );
};

export default Section;
