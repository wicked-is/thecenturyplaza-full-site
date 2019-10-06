import React, { useEffect, useContext } from "react";
import { Router } from "@reach/router";
import Context from "config/Context";
import styled from "styled-components";
import { Wrapper } from "shared/styled-components/Layouts.js";
import { ContainerStyled } from "Team/style.js";
import Member from "Team/components/Member.jsx";

const TeamWrapper = styled.div`
  ${Wrapper};
`;
const TeamContainer = styled.div`
  ${ContainerStyled};
`;

const Team = props => {
  const context = useContext(Context);
  const { removeFixedFooter } = context;
  const { isExpanded, teamData, setPageColor } = props;

  useEffect(() => {
    removeFixedFooter();
    setPageColor(props => props.theme.white);
  }, [setPageColor, removeFixedFooter]);

  return (
    <TeamWrapper isExpanded={isExpanded}>
      <TeamContainer>
        <Router primary={false}>
          {teamData.map((member, index) => (
            <Member
              teamData={teamData}
              default={index === 0 && true}
              isExpanded={isExpanded}
              toggleExpand={props.toggleExpand}
              key={index}
              path={member.slug}
              member={member}
            />
          ))}
        </Router>
      </TeamContainer>
    </TeamWrapper>
  );
};

export default Team;
