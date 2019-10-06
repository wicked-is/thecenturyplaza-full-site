import React from "react";
import styled from "styled-components";
import { AsideStyled, ItemsStyled } from "Team/style.js";
import Grid from "styled-components-grid";
import parse from "html-react-parser";
import ResponsiveImage from "shared/components/ResponsiveImage.js";
import TeamMenu from "Team/components/TeamMenu.jsx";

const TeamAside = styled.aside`
  ${AsideStyled};
`;
const MemberItems = styled.div`
  ${ItemsStyled}
`;

const Member = props => {
  const { member, isExpanded, teamData } = props;

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
          ))}
        </Grid>
      </Grid.Unit>
    </Grid>
  );
};

export default Member;
