import React from "react";
import styled from "styled-components/macro";
import Grid from "styled-components-grid";
import parse from "html-react-parser";

import { AsideStyled, ItemsStyled } from "Team/style.js";
import ResponsiveImage from "shared/components/ResponsiveImage.js";
import TeamMenu from "Team/components/TeamMenu.jsx";

const TeamAside = styled.aside`
  ${AsideStyled};
`;
const MemberItems = styled.div`
  ${ItemsStyled}
`;

const Member = ({ member, teamData }) => {
  return (
    <Grid>
      <Grid.Unit
        size={{
          phone: 1,
          phoneXL: 5 / 12,
          tablet: 1,
          tabletLandscape: 3 / 10,
          desktopSmall: 2 / 8
        }}
      >
        <TeamAside>
          <TeamMenu teamData={teamData} />
          <p>{parse(member.bio)}</p>
        </TeamAside>
      </Grid.Unit>
      <Grid.Unit
        size={{
          phone: 1,
          phoneXL: 7 / 12,
          tablet: 1,
          tabletLandscape: 7 / 10,
          desktopSmall: 6 / 8
        }}
      >
        <Grid>
          {member.images.map((image, index) => (
            <Grid.Unit
              key={index}
              size={{
                phone: 1,
                phoneXL: image.span[0] / 10,
                tabletLandscape: image.span[1] / 6
              }}
            >
              <MemberItems
                mobileLift={image.lift[0]}
                desktopLift={image.lift[1]}
              >
                {image.source.length > 0 && (
                  <ResponsiveImage key={index} srcPath={image.source} reveal />
                )}
              </MemberItems>
            </Grid.Unit>
          ))}
        </Grid>
      </Grid.Unit>
    </Grid>
  );
};

export default Member;
