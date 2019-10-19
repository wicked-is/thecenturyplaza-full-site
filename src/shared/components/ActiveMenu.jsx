import React, { useContext } from "react";
import { Link, Match } from "@reach/router";
import styled from "styled-components/macro";
import { ActiveMenuContainerStyled } from "shared/styled-components/Navigation.js";
import Context from "../../config/Context";

const ActiveMenuContainer = styled.ul`
  ${ActiveMenuContainerStyled};
`;

const ActiveMenu = props => {
  const { primaryData } = props;
  const context = useContext(Context);
  const { pauseScroll } = context;

  const ActiveMenuLink = props => (
    <li>
      <Link
        {...props}
        getProps={({ isPartiallyCurrent }) => {
          return isPartiallyCurrent ? { className: "active" } : null;
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
      <ActiveMenuContainer pauseScroll={pauseScroll}>
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
