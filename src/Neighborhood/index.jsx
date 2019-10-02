import React, { useEffect } from "react";
import styled from "styled-components";
import { PageTitle } from "shared/styled-components/Typography.js";
import { WrapperStyled, HeaderStyled, ContainerStyled, ItemStyled, PairedStyled, ItemCaptionStyled, ItemHeadlineStyled, ItemCopyStyled } from 'Neighborhood/style.js';
import ResponsiveImage from "shared/components/ResponsiveImage.js"
import Grid from 'styled-components-grid';

const NeighborhoodWrapper = styled.div`${WrapperStyled};`;
const NeighborhoodContainer = styled.div`${ContainerStyled};`;
const NeighborhoodHeader = styled.header`${HeaderStyled};`;
const NeighborhoodTitle = styled.h1`${PageTitle};`;
const NeighborhoodItem = styled.div`${ItemStyled};`;
const NeighborhoodItemCaption = styled.p`${ItemCaptionStyled};`;
const NeighborhoodItemHeadline = styled.p`${ItemHeadlineStyled};`;
const NeighborhoodItemCopy = styled.p`${ItemCopyStyled};`;
const NeighborhoodItemPaired = styled.p`${PairedStyled};`;


const Neighborhood = props => {
  const { neighborhoodData, setPageColor } = props;

  useEffect(() => {
    setPageColor(props => props.theme.white);
  }, [setPageColor]);

  return (
    <NeighborhoodWrapper>
      <NeighborhoodHeader>
        <NeighborhoodTitle>In The Heart of Los Angeles</NeighborhoodTitle>
        <ResponsiveImage srcPath={neighborhoodData[0].source[0]} />
      </NeighborhoodHeader>
      <NeighborhoodContainer>
        <Grid>
          {neighborhoodData.slice(1).map((item, index) => (
            <Grid.Unit key={index} size={{ phone: item.span[1] / 10, tabletLandscape: item.span[1] / 10 }}>
              <NeighborhoodItem >
                {item.source.length === 1 && item.source != "" && <ResponsiveImage srcPath={item.source[0]} />}
                {item.source.length > 1 && (
                  <NeighborhoodItemPaired>
                    <ResponsiveImage srcPath={item.source[0]} />
                    <ResponsiveImage srcPath={item.source[1]} />
                  </NeighborhoodItemPaired>
                )}
                {item.caption.length > 0 && <NeighborhoodItemCaption>{item.caption}</NeighborhoodItemCaption>}
                {item.headline.length > 0 && <NeighborhoodItemHeadline>{item.headline}</NeighborhoodItemHeadline>}
                {item.copy.length > 0 && <NeighborhoodItemCopy>{item.copy}</NeighborhoodItemCopy>}
              </NeighborhoodItem>
            </Grid.Unit>
          ))}
        </Grid>
      </NeighborhoodContainer>
    </NeighborhoodWrapper>
  );
}

export default Neighborhood;
