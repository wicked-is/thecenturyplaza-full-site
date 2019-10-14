import React, { useEffect } from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import { Wrapper } from "../shared/styled-components/Layouts.js";
import { ContainerStyled } from "Team/style.js";
import Member from "Team/components/Member.jsx";

const TeamWrapper = styled.div`
  ${Wrapper};
`;
const TeamContainer = styled.div`
  ${ContainerStyled};
`;

const Team = ({ teamData, setPageColor }) => {
  useEffect(() => {
    setPageColor("white");
  }, [setPageColor]);

  return (
    <TeamWrapper>
      <TeamContainer>
        <Router primary={false}>
          {teamData.map((member, index) => (
            <Member
              teamData={teamData}
              default={index === 0 && true}
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
