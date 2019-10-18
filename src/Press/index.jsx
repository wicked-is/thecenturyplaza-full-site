import React, { useEffect, useContext } from "react";
import Context from "../config/Context";
import styled from "styled-components";
import { PageTitle } from "../shared/styled-components/Typography.js";
import { Wrapper } from "../shared/styled-components/Layouts.js";
import {
  ContainerStyled,
  EntryStyled,
  PubDateStyled,
  PubInfoStyled
} from "Press/style.js";

const PressWrapper = styled.div`
  ${Wrapper};
`;
const PressContainer = styled.div`
  ${ContainerStyled};
`;
const PressTitle = styled.h1`
  ${PageTitle};
`;
const PressEntry = styled.article`
  ${EntryStyled};
`;
const PressPubDate = styled.div`
  ${PubDateStyled};
`;
const PressPubInfo = styled.div`
  ${PubInfoStyled};
`;

const Press = props => {
  const { setPageColor } = props;
  const context = useContext(Context);
  const { fetchPress, pressItems, setGlobalConfig, navActive } = context;

  const generatePress = () => {
    return pressItems.map(entry => {
      return (
        <PressEntry key={entry.id}>
          <PressPubDate>{entry.date}</PressPubDate>
          <PressPubInfo>
            <h2>
              <a
                href={
                  entry["source-url"]
                    ? entry["source-url"]
                    : entry["source-pdf"]
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {entry.headline}
              </a>
            </h2>
            <p>{entry.publication}</p>
          </PressPubInfo>
        </PressEntry>
      );
    });
  };

  useEffect(() => {
    if (!pressItems || !pressItems.length) {
      fetchPress();
    }
  }, [pressItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageColor("white");
  }, [setPageColor]);

  useEffect(() => {
    setGlobalConfig({
      headerBackground: "white",
      footerBackground: "transparent",
      footerDisplay: true,
      footerFixed: false,
      sidebarBackground: "transparent"
    });
  }, [setGlobalConfig]);

  return (
    <PressWrapper navActive={navActive}>
      <PressContainer>
        <PressTitle>Featured Press</PressTitle>
        {generatePress()}
      </PressContainer>
    </PressWrapper>
  );
};

export default Press;
