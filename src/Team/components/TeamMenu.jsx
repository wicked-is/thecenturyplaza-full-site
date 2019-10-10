import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { MenuStyled } from "../style.js";

const TeamMembers = styled.ul`
  ${MenuStyled};
`;

const TeamMenu = props => {
  const { isExpanded, teamData } = props;

  const TeamMember = props => (
    <li>
      <Link
        {...props}
        getProps={({ isPartiallyCurrent }) => {
          return {
            style: {
              color: isPartiallyCurrent ? "#101820" : "#B4BAC1"
            }
          };
        }}
      />
    </li>
  );

  return (
    <div>
      <nav>
        <TeamMembers isExpanded={isExpanded}>
          {teamData.map((member, index) => (
            <TeamMember key={index} to={"/team/" + member.slug}>
              {member.title}
            </TeamMember>
          ))}
        </TeamMembers>
      </nav>
    </div>
  );
};
export default TeamMenu;
