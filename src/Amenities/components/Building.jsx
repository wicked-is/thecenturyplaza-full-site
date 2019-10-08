import React from "react";
// import React, { useEffect, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import {
  PageTitle,
  PagePreTitle
} from "shared/styled-components/Typography.js";
import {
  ContainerStyled,
  SectionStyled,
  SectionTitleStyled,
  ListTitleStyled
} from "Amenities/style.js";
// import Context from "config/Context";

const BuildingContainer = styled.div`
  ${ContainerStyled};
`;

const BuildingPreTitle = styled.p`
  ${PagePreTitle};
`;

const BuildingTitle = styled.h1`
  ${PageTitle};
`;

const SectionGroup = styled.section`
  ${SectionStyled};
`;

const SectionTitle = styled.h2`
  ${SectionTitleStyled};
`;

const ListTitle = styled.h3`
  ${ListTitleStyled};
`;

const Building = props => {
  const { building } = props;
  // const context = useContext(Context);
  // const { setHasCaptions } = context;

  // useEffect(() => {
  //   setHasCaptions(false);
  //   setPageColor(props => props.theme.grayLight);
  // }, [setPageColor, setHasCaptions]);

  return (
    <BuildingContainer>
      <BuildingPreTitle>{building.pretitle}</BuildingPreTitle>
      <BuildingTitle>{building.title}</BuildingTitle>
      {building.sections.map((section, index) => (
        <div key={index}>
          <SectionTitle>{section.title}</SectionTitle>
          {section.lists.map((list, index) => (
            <SectionGroup key={index}>
              <ListTitle>{list.title}</ListTitle>
              <ul>
                {list.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </SectionGroup>
          ))}
        </div>
      ))}
      {building.links.map((link, index) => (
        <a
          key={index}
          href={
            link.path.length > 0 ? link.path : process.env.PUBLIC_URL + link.url
          }
          target={link.path.length > 0 ? "_self" : "_blank"}
        >
          {link.cta}
        </a>
      ))}
      <p>{building.disclaimer}</p>
    </BuildingContainer>
  );
};

export default Building;
