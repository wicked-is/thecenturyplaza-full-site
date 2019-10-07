import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Grid from 'styled-components-grid';
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';

import {
  SectionStyled,
  SectionTitlesStyled,
  SectionTitleStyled,
  SectionMediaStyled,
  MediaStyled
} from 'Gallery/style.js';
import ResponsiveImage from 'shared/components/ResponsiveImage.js';

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

const videoElement = isExpanded => ({
  width: '100%',
  height: '100%',
  background: 'transparent'
});

const Section = ({ section }) => {
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
              <GalleryMedia key={index}>
                <Fade>
                  {media.type === 'video' ? (
                    <ReactPlayer
                      url={media.source}
                      playsinline
                      controls
                      preload="true"
                      width="100%"
                      height="100%"
                      style={videoElement()}
                    />
                  ) : (
                    <ResponsiveImage srcPath={media.source} />
                  )}
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
