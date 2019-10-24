import React, { useEffect, useContext } from "react";
import Context from "../config/Context";
import styled from "styled-components/macro";
import Grid from "styled-components-grid";
import Fade from "react-reveal/Fade";
import LazyLoad from "react-lazyload";
import { Wrapper } from "../shared/styled-components/Layouts.js";
import {
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

const NeighborhoodWrapper = styled.div`
  ${Wrapper};
`;

const NeighborhoodContainer = styled.div`
  ${ContainerStyled};
`;
const NeighborhoodHeader = styled.header`
  ${HeaderStyled};
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
  const context = useContext(Context);
  const { setGlobalConfig, navActive } = context;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = "#FFFFFF";
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
    <NeighborhoodWrapper navActive={navActive}>
      <NeighborhoodHeader navActive={navActive}>
        <Fade>
          <ResponsiveImage srcPath={neighborhoodData[0].source[0]} />
        </Fade>
      </NeighborhoodHeader>
      <NeighborhoodContainer navActive={navActive}>
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
                {item.source.length === 1 && item.source[0] && (
                  <LazyLoad once offset={400}>
                    <Fade>
                      <ResponsiveImage srcPath={item.source[0]} />
                    </Fade>
                  </LazyLoad>
                )}
                {item.source.length > 1 && (
                  <LazyLoad once offset={400}>
                    <Fade>
                      <NeighborhoodItemPaired>
                        <ResponsiveImage srcPath={item.source[0]} />
                        <ResponsiveImage srcPath={item.source[1]} />
                      </NeighborhoodItemPaired>
                    </Fade>
                  </LazyLoad>
                )}
                {item.caption.length > 0 && (
                  <LazyLoad once offset={400}>
                    <Fade>
                      <NeighborhoodItemCaption>
                        {item.caption}
                      </NeighborhoodItemCaption>
                    </Fade>
                  </LazyLoad>
                )}
                {item.headline.length > 0 && (
                  <LazyLoad once offset={400}>
                    <Fade>
                      <NeighborhoodItemHeadline>
                        {item.headline}
                      </NeighborhoodItemHeadline>
                    </Fade>
                  </LazyLoad>
                )}
                {item.copy.length > 0 && (
                  <LazyLoad once offset={400}>
                    <Fade>
                      <NeighborhoodItemCopy>{item.copy}</NeighborhoodItemCopy>
                    </Fade>
                  </LazyLoad>
                )}
                {item.cta.length > 0 && (
                  <LazyLoad once offset={400}>
                    <Fade>
                      <NeighborhoodItemCTA>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.cta}
                        </a>
                      </NeighborhoodItemCTA>
                    </Fade>
                  </LazyLoad>
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
