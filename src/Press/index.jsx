import React, { useEffect } from "react";
import styled from "styled-components";
import { PageTitle } from "shared/styled-components/Typography.js";
import { Wrapper } from 'shared/styled-components/Layouts.js';
import { ContainerStyled, EntryStyled, PubDateStyled, PubInfoStyled } from 'Press/style.js';

const PressWrapper = styled.div`${Wrapper};`;
const PressContainer = styled.div`${ContainerStyled}; `;
const PressTitle = styled.h1`${PageTitle};`;
const PressEntry = styled.article`${EntryStyled};`;
const PressPubDate = styled.div`${PubDateStyled};`;
const PressPubInfo = styled.div`${PubInfoStyled};`;

const Press = props => {
  const { pressData, setPageColor } = props;

  useEffect(() => {
    setPageColor(props => props.theme.grayLight);
  }, [setPageColor]);

  return (
    <PressWrapper>
      <PressContainer>
        <PressTitle>Featured Press</PressTitle>
        {pressData.map((entry, index) => (
          <PressEntry key={index}>
            <PressPubDate>{entry.date}</PressPubDate>
            <PressPubInfo>
              <h2><a href={entry.source} target="_blank">{entry.headline}</a></h2>
              <p>{entry.publication}</p>
            </PressPubInfo>
          </PressEntry>
        ))}
      </PressContainer>
    </PressWrapper>
  );
}

export default Press;
