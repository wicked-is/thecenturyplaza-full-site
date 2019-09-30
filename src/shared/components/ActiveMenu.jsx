import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const ActiveMenuContainer = styled.ul`
  display: inline-block;
  width: 100%;
  height: auto;
  text-align: center;
  margin: 30px 0 0;
  padding: 0;
  transition: all 0.5s ease-in-out;
  opacity: ${props => props.isExpanded ? "0" : "1"};

  li {
    display: inline-block;
    margin: 0 15px;

    a {
      color: ${props => props.theme.black};
      text-decoration: none;
      padding: 0 0 5px;
    }
  }
`

const ActiveMenu = props => {
  const { isExpanded, primaryData } = props;

  const ActiveMenuLink = props => (
    <li>
      <Link
        {...props}
        getProps={({ isPartiallyCurrent }) => {
          return {
            style: {
              borderBottom: isPartiallyCurrent ? "1px solid #101820" : "1px solid transparent"
            }
          };
        }}
      />
    </li>
  );

  return (
    <nav>
      <ActiveMenuContainer isExpanded={isExpanded}>
        {primaryData.map((section, index) => (
          <ActiveMenuLink key={index} to={section.slug}>{section.title}</ActiveMenuLink>
        ))}
      </ActiveMenuContainer>
    </nav>
  );
};
export default ActiveMenu;
