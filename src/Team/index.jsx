import React, { useEffect, useContext } from "react";
import Context from "../config/Context";
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

const Team = props => {
  const { teamData, setPageColor } = props;
  const context = useContext(Context);
  const { globalConfig, setGlobalConfig } = context;

  useEffect(() => {
    setPageColor("white");
  }, [setPageColor]);

  useEffect(() => {
    setGlobalConfig({
      ...globalConfig,
      headerBackground: "white",
      footerBackground: "transparent",
      pageBackground: "white",
      footerDisplay: true,
      footerFixed: false,
      returnPath: null
    });
  }, [setGlobalConfig]);

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
