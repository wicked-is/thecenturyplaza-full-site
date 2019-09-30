import React from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import Member from "Team/components/Member.jsx";

const PrimaryContainer = styled.div`
  transition: all 0.5s ease-in-out;
  transition-delay: 0.25s;
  height: auto;
  width: ${props => props.isExpanded ? "100vw" : "calc(100vw - 80px)"};
  margin: ${props => props.isExpanded ? "-80px 0 0" : "0 40px"};
  ${'' /* background:  red; */}
  overflow: hidden;
`

const Team = props => {
  const { isExpanded, teamData } = props;

  return (
    <PrimaryContainer isExpanded={isExpanded}>
      <Router>
        {teamData.map((member, index) => (
          <Member teamData={teamData} default={index === 0 && true} isExpanded={isExpanded} toggleExpand={props.toggleExpand} closeExpand={props.closeExpand} key={index} path={member.slug} member={member} />
        ))}
      </Router>
    </PrimaryContainer>
  );
}

export default Team;