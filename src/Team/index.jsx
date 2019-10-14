import React, { useEffect, useContext } from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import Context from "../config/Context";
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
  const context = useContext(Context);
  const { setHasCaptions } = context;

  useEffect(() => {
    setHasCaptions(false);
    setPageColor("white");
  }, [setPageColor, setHasCaptions]);

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
