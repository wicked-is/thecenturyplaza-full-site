import React, { useEffect } from "react";
import styled from "styled-components";
import { SectionStyled, SectionTitleStyled, SectionMediaStyled, MediaStyled } from 'Gallery/style.js';
import ResponsiveImage from "shared/components/ResponsiveImage.js"
import ReactPlayer from 'react-player';
import Grid from 'styled-components-grid';

const GallerySection = styled.section`${SectionStyled};`;
const GallerySectionTitle = styled.h2`${SectionTitleStyled};`;
const GallerySectionMedia = styled.div`${SectionMediaStyled};`;
const GalleryMedia = styled.div`${MediaStyled};`;

const videoElement = (isExpanded) => ({
  width: '100%',
  height: '100%',
  // position: 'absolute',
  // // transition: 'all 0.5s ease-in-out',
  // // transitionDelay: '0.05s',
  // top: isExpanded ? '0' : '-80px',
  // left: isExpanded ? '0' : '-40px',
  background: 'transparent'
});

const Section = props => {
  const { section } = props;

  return (
    <GallerySection>
      <Grid>
        <Grid.Unit size={{ phone: 1, tabletLandscape: 2 / 12 }}>
          <GallerySectionTitle>{section.title}</GallerySectionTitle>
        </Grid.Unit>
        <Grid.Unit size={{ phone: 1, tabletLandscape: 10 / 12 }}>
          <GallerySectionMedia>
            {section.media.map((media, index) => (
              <GalleryMedia key={index}>
                {media.type === "video" ? (
                  <ReactPlayer url={media.source} playsinline controls preload="true" style={videoElement()} />
                ) : (
                    <ResponsiveImage srcPath={media.source} />
                  )}
              </GalleryMedia>
            ))}
          </GallerySectionMedia>
        </Grid.Unit>
      </Grid>
    </GallerySection>
  );
}

export default Section;
