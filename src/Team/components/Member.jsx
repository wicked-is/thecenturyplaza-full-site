import React from "react";
import { Router } from "@reach/router";
import styled, { keyframes } from "styled-components";
import parse from "html-react-parser";
import ResponsiveImage from "shared/components/ResponsiveImage.js"
import { fadeIn } from "shared/styled-components/Transitions.js";
import TeamMenu from "Team/components/TeamMenu.jsx";

const MemberContainer = styled.article`
  ${'' /* width: 70%;
  float: right; */}
  ${'' /* display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  transition-delay: 0.25s;
  height: ${props => props.isExpanded ? "100vh" : "calc(100vh - 160px)"};
  width: ${props => props.isExpanded ? "100vw" : "calc(100vw - 80px)"};
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  will-change: opacity; */}
  ${'' /* background: green; */}

  p {
    ${'' /* position: absolute;
    bottom: 30px;
    left: 40px;
    margin: 0;
    transition: all 0.5s ease-in-out;
    opacity: ${props => props.isExpanded ? "0" : "1"};  */}
  }
`

const Member = props => {
  const { member, isExpanded, teamData } = props;

  return (
    <MemberContainer id={member.slug}>
      <TeamMenu isExpanded={isExpanded} teamData={teamData} />
      <p>{parse(member.bio)}</p>

      {member.images.map((image, index) => (
        <ResponsiveImage key={index} srcPath={image.source} />
      ))}

    </MemberContainer>
  );
};

export default Member;
