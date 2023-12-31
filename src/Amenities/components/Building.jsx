import React, { useContext } from "react";
import styled from "styled-components/macro";
import {
  PageTitle,
  PagePreTitle
} from "shared/styled-components/Typography.js";
import {
  ContainerStyled,
  ContentStyled,
  SectionStyled,
  SectionTitleStyled,
  ListStyled,
  ListSubLineStyled,
  ListTitleStyled,
  LinksStyled,
  DisclaimerStyled
} from "Amenities/style.js";
import Context from "../../config/Context";

const Container = styled.div`
  ${ContainerStyled};
`;

const PreTitle = styled.p`
  ${PagePreTitle};
`;

const Title = styled.h1`
  ${PageTitle};
`;

const Content = styled.div`
  ${ContentStyled};
`;

const SectionTitle = styled.h2`
  ${SectionTitleStyled};
`;

const Section = styled.div`
  ${SectionStyled};
`;

const List = styled.div`
  ${ListStyled};
`;

const ListTitle = styled.h3`
  ${ListTitleStyled};
`;

const ListSubLine = styled.h4`
  ${ListSubLineStyled};
`;

const Links = styled.a`
  ${LinksStyled};
`;

const Disclaimer = styled.p`
  ${DisclaimerStyled};
`;

const Building = props => {
  const { building } = props;
  const context = useContext(Context);
  const { navActive } = context;

  return (
    <Container navActive={navActive}>
      <PreTitle>{building.pretitle}</PreTitle>
      <Title>{building.title}</Title>
      <Content>
        {building.sections.map((section, index) => (
          <React.Fragment key={index}>
            {section.title.length > 0 && (
              <SectionTitle>{section.title}</SectionTitle>
            )}
            <Section>
              {section.lists.map((list, index) => (
                <List key={index}>
                  {list.title.length > 0 && <ListTitle>{list.title}</ListTitle>}
                  {list.subline.length > 0 && (
                    <ListSubLine>{list.subline}</ListSubLine>
                  )}
                  <ul>
                    {list.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </List>
              ))}
            </Section>
          </React.Fragment>
        ))}
      </Content>
      <div>
        {building.links.map((link, index) => (
          <Links
            key={index}
            href={
              link.path.length > 0
                ? link.path
                : process.env.PUBLIC_URL + link.url
            }
            target={link.path.length > 0 ? "_self" : "_blank"}
          >
            {link.cta}
          </Links>
        ))}
        <Disclaimer>{building.disclaimer}</Disclaimer>
      </div>
    </Container>
  );
};

export default Building;
