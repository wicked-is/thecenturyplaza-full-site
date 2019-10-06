import React, { useEffect, useContext } from "react";
import Context from "config/Context";
import styled from "styled-components";
import { PageTitle } from "shared/styled-components/Typography.js";
import { Wrapper } from "shared/styled-components/Layouts.js";
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
  const context = useContext(Context);
  const { removeFixedFooter } = context;
  const { pressData, setPageColor } = props;

  useEffect(() => {
    removeFixedFooter();
    setPageColor(props => props.theme.white);
  }, [setPageColor, removeFixedFooter]);

  return (
    <PressWrapper>
      <PressContainer>
        <PressTitle>Featured Press</PressTitle>
        {pressData.map((entry, index) => (
          <PressEntry key={index}>
            <PressPubDate>{entry.date}</PressPubDate>
            <PressPubInfo>
              <h2>
                <a
                  href={entry.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {entry.headline}
                </a>
              </h2>
              <p>{entry.publication}</p>
            </PressPubInfo>
          </PressEntry>
        ))}
      </PressContainer>
    </PressWrapper>
  );
};

export default Press;
