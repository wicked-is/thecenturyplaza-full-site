import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const ActiveMenuContainer = styled.ul`
  display: inline-block;
  width: 30%;
  height: auto;
  margin: 0;
  padding: 0;
  transition: all 0.5s ease-in-out;
  opacity: ${props => props.isExpanded ? "0" : "1"};

  li {
    display: inline-block;
    width: 100%;
    height: auto;
    margin: 0 0 20px;

    a {
      color: ${props => props.theme.black};
      text-decoration: none;
      padding: 0 0 5px;
    }
  }
`

const ActiveMenu = props => {
  const { isExpanded, teamData } = props;

  const ActiveMenuLink = props => (
    <li>
      <Link
        {...props}
        getProps={({ isPartiallyCurrent }) => {
          return {
            style: {
              fontWeight: isPartiallyCurrent ? "bold" : "normal",
              opacity: isPartiallyCurrent ? "1" : "0.5"
            }
          };
        }}
      />
    </li>
  );

  return (
    <div>
      <nav>
        <ActiveMenuContainer isExpanded={isExpanded}>
          {teamData.map((member, index) => (
            <ActiveMenuLink key={index} to={"/team/" + member.slug}>{member.title}</ActiveMenuLink>
          ))}
        </ActiveMenuContainer>
      </nav>
    </div>
  );
};
export default ActiveMenu;
