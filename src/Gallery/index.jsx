import React, { useEffect, useContext } from "react";
import Context from "../config/Context";
import styled from "styled-components";
import { Wrapper } from "../shared/styled-components/Layouts.js";
import { ContainerStyled } from "Gallery/style.js";
import Section from "Gallery/components/Section.jsx";

const GalleryWrapper = styled.div`
  ${Wrapper};
`;
const GalleryContainer = styled.div`
  ${ContainerStyled};
`;

const Press = props => {
  const { galleryData, setPageColor } = props;
  const context = useContext(Context);
  const { globalConfig, setGlobalConfig } = context;

  useEffect(() => {
    setPageColor("white");
  }, [setPageColor]);

  useEffect(() => {
    setGlobalConfig({
      ...globalConfig,
      headerBackground: "white",
      footerBackground: "transparent",
      pageBackground: "white",
      footerDisplay: true,
      footerFixed: false,
      returnPath: null
    });
  }, [setGlobalConfig]);

  return (
    <GalleryWrapper galleryData={galleryData}>
      <GalleryContainer>
        {galleryData.map((section, index) => (
          <Section key={index} section={section} />
        ))}
      </GalleryContainer>
    </GalleryWrapper>
  );
};

export default Press;
