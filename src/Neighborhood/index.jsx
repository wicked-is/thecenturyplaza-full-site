import React, { useEffect } from "react";
import styled from "styled-components";
import { PageTitle } from "shared/styled-components/Typography.js";
import {
  WrapperStyled,
  HeaderStyled,
  ContainerStyled,
  ItemStyled,
  PairedStyled,
  ItemCaptionStyled,
  ItemHeadlineStyled,
  ItemCopyStyled,
  ItemCTAStyled
} from "Neighborhood/style.js";
import ResponsiveImage from "shared/components/ResponsiveImage.js";
import Grid from "styled-components-grid";

const NeighborhoodWrapper = styled.div`
  ${WrapperStyled};
`;
const NeighborhoodContainer = styled.div`
  ${ContainerStyled};
`;
const NeighborhoodHeader = styled.header`
  ${HeaderStyled};
`;
const NeighborhoodTitle = styled.h1`
  ${PageTitle};
`;
const NeighborhoodItem = styled.div`
  ${ItemStyled};
`;
const NeighborhoodItemPaired = styled.div`
  ${PairedStyled};
`;
const NeighborhoodItemCaption = styled.p`
  ${ItemCaptionStyled};
`;
const NeighborhoodItemHeadline = styled.p`
  ${ItemHeadlineStyled};
`;
const NeighborhoodItemCopy = styled.p`
  ${ItemCopyStyled};
`;
const NeighborhoodItemCTA = styled.p`
  ${ItemCTAStyled};
`;

const Neighborhood = props => {
  const { neighborhoodData, setPageColor } = props;

  useEffect(() => {
    setPageColor(props => props.theme.white);
  }, [setPageColor]);

  return (
    <NeighborhoodWrapper>
      <NeighborhoodHeader>
        {/* <NeighborhoodTitle>In The Heart of Los Angeles</NeighborhoodTitle> */}
        <ResponsiveImage srcPath={neighborhoodData[0].source[0]} />
      </NeighborhoodHeader>
      <NeighborhoodContainer>
        <Grid halign="justify">
          {neighborhoodData.slice(1).map((item, index) => (
            <Grid.Unit
              key={index}
              size={{
                phone: item.span[0] / 10,
                tabletLandscape: item.span[1] / 10
              }}
            >
              <NeighborhoodItem valign={item.valign}>
                {item.source.length === 1 && item.source != "" && (
                  <ResponsiveImage srcPath={item.source[0]} />
                )}
                {item.source.length > 1 && (
                  <NeighborhoodItemPaired>
                    <ResponsiveImage srcPath={item.source[0]} />
                    <ResponsiveImage srcPath={item.source[1]} />
                  </NeighborhoodItemPaired>
                )}
                {item.caption.length > 0 && (
                  <NeighborhoodItemCaption>
                    {item.caption}
                  </NeighborhoodItemCaption>
                )}
                {item.headline.length > 0 && (
                  <NeighborhoodItemHeadline>
                    {item.headline}
                  </NeighborhoodItemHeadline>
                )}
                {item.copy.length > 0 && (
                  <NeighborhoodItemCopy>{item.copy}</NeighborhoodItemCopy>
                )}
                {item.cta.length > 0 && (
                  <NeighborhoodItemCTA>
                    <a href={item.url}>{item.cta}</a>
                  </NeighborhoodItemCTA>
                )}
              </NeighborhoodItem>
            </Grid.Unit>
          ))}
        </Grid>
      </NeighborhoodContainer>
    </NeighborhoodWrapper>
  );
};

export default Neighborhood;
