import React from 'react';
import styled from 'styled-components';
import Grid from 'styled-components-grid';
import parse from 'html-react-parser';
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';

import { AsideStyled, ItemsStyled } from 'Team/style.js';
import ResponsiveImage from 'shared/components/ResponsiveImage.js';
import TeamMenu from 'Team/components/TeamMenu.jsx';

const TeamAside = styled.aside`
  ${AsideStyled};
`;
const MemberItems = styled.div`
  ${ItemsStyled}
`;

const Member = ({ member, isExpanded, teamData }) => {
  return (
    <Grid>
      <Grid.Unit size={{ phone: 1, tabletLandscape: 2 / 8 }}>
        <TeamAside>
          <TeamMenu isExpanded={isExpanded} teamData={teamData} />
          <p>{parse(member.bio)}</p>
        </TeamAside>
      </Grid.Unit>
      <Grid.Unit size={{ phone: 1, tabletLandscape: 6 / 8 }}>
        <Grid>
          {member.images.map((image, index) => (
            <LazyLoad once offset={400}>
              <Fade>
                <Grid.Unit
                  key={index}
                  size={{
                    phone: image.span[0] / 10,
                    tabletLandscape: image.span[1] / 6
                  }}
                >
                  <MemberItems>
                    {image.source.length > 0 && (
                      <ResponsiveImage key={index} srcPath={image.source} />
                    )}
                  </MemberItems>
                </Grid.Unit>
              </Fade>
            </LazyLoad>
          ))}
        </Grid>
      </Grid.Unit>
    </Grid>
  );
};

export default Member;
