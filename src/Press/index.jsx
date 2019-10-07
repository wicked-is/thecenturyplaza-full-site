import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import Context from 'config/Context';
import { PageTitle } from 'shared/styled-components/Typography.js';
import { Wrapper } from 'shared/styled-components/Layouts.js';
import {
  ContainerStyled,
  EntryStyled,
  PubDateStyled,
  PubInfoStyled
} from 'Press/style.js';

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

const Press = ({ setPageColor }) => {
  const context = useContext(Context);
  const { fetchPress, pressItems } = context;

  const generatePress = () => {
    return pressItems.map(entry => {
      return (
        <PressEntry key={entry.id}>
          <PressPubDate>{entry.date}</PressPubDate>
          <PressPubInfo>
            <h2>
              <a
                href={
                  entry['source-url']
                    ? entry['source-url']
                    : entry['source-pdf']
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
    if (pressItems == false) {
      fetchPress();
    }
  }, []);

  useEffect(() => {
    setPageColor(props => props.theme.white);
  }, [setPageColor]);

  return (
    <PressWrapper>
      <PressContainer>
        <PressTitle>Featured Press</PressTitle>
        {generatePress()}
      </PressContainer>
    </PressWrapper>
  );
};

export default Press;
