import React from "react";
import { Link, Match } from "@reach/router";
import styled from "styled-components";
import { mediaMin } from "../styled-components/MediaQueries.js";

const ActiveMenuContainer = styled.ul`
  display: none;

  ${mediaMin.tabletLandscape`
    display: inline-block;
    width: 121%;
    height: auto;
    text-align: center;
    top: 15px;
    position: absolute;
    padding: 0;
    transition: opacity 0.5s ease-in-out;
    opacity: ${props => (props.isExpanded ? "0" : "1")};

    li {
      display: inline-block;
      margin: 0 15px;

      a {
        color: ${props => props.theme.black};
        text-decoration: none;
        padding: 0 0 5px;
        font-family: ${props => props.theme.sansSerifLight}, sans-serif;
        font-weight: 300;
        font-size: 14px;
        line-height: 1.35em;
        letter-spacing: 0.056em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
      }
    }
  `}

  ${mediaMin.desktopSmall`
    width: 100%;
  `}
`;

const ActiveMenu = props => {
  const { isExpanded, primaryData } = props;

  const ActiveMenuLink = props => (
    <li>
      <Link
        {...props}
        getProps={({ isPartiallyCurrent }) => {
          return {
            style: {
              borderBottom: isPartiallyCurrent
                ? "1px solid #101820"
                : "1px solid transparent",
              fontWeight: isPartiallyCurrent ? "600" : "300"
            }
          };
        }}
      />
    </li>
  );

  const PrimaryMenu = () =>
    primaryData.map((section, index) => (
      <ActiveMenuLink key={index} to={section.slug}>
        {section.title}
      </ActiveMenuLink>
    ));

  const SecondaryMenu = () => (
    <>
      <ActiveMenuLink to="/neighborhood">Neighborhood</ActiveMenuLink>
      <ActiveMenuLink to="/team">Team</ActiveMenuLink>
      <ActiveMenuLink to="/availability">Availability</ActiveMenuLink>
      <ActiveMenuLink to="/press">Press</ActiveMenuLink>
      <ActiveMenuLink to="/gallery">Gallery</ActiveMenuLink>
    </>
  );

  return (
    <nav>
      <ActiveMenuContainer isExpanded={isExpanded}>
        {primaryData.map((section, index) => (
          <Match key={index} path={"/" + section.slug + "/*"}>
            {props => props.match && <PrimaryMenu />}
          </Match>
        ))}
        <Match path="/neighborhood">
          {props => props.match && <SecondaryMenu />}
        </Match>
        <Match path="/team/*">
          {props => props.match && <SecondaryMenu />}
        </Match>
        <Match path="/availability/*">
          {props => props.match && <SecondaryMenu />}
        </Match>
        <Match path="/press">{props => props.match && <SecondaryMenu />}</Match>
        <Match path="/gallery/*">
          {props => props.match && <SecondaryMenu />}
        </Match>
      </ActiveMenuContainer>
    </nav>
  );
};
export default ActiveMenu;
