import React, { useState } from "react";
import { Link, Location } from "@reach/router";
import styled from "styled-components/macro";
import { MenuStyled } from "../style.js";

const TeamMembers = styled.ul`
  ${MenuStyled};
`;

const TeamMenu = props => {
  const { teamData } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const TeamMember = props => (
    <Location>
      {({ location }) => (
        <li
          className={props.to === location.pathname ? "active" : "inactive"}
          onClick={toggleOpen}
        >
          <Link
            {...props}
            getProps={({ isCurrent }) => {
              return {
                style: {
                  color: isCurrent ? "#101820" : "#B4BAC1"
                }
              };
            }}
          />
        </li>
      )}
    </Location>
  );

  return (
    <div>
      <nav>
        <TeamMembers isOpen={isOpen}>
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
