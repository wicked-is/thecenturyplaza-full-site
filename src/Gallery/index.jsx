import React, { useEffect, useContext } from "react";
import Context from "config/Context";
import styled from "styled-components";
import { Wrapper } from "shared/styled-components/Layouts.js";
import { ContainerStyled } from "Gallery/style.js";
import Section from "Gallery/components/Section.jsx";

const GalleryWrapper = styled.div`
  ${Wrapper};
`;
const GalleryContainer = styled.div`
  ${ContainerStyled};
`;

const Press = props => {
  const context = useContext(Context);
  const { removeFixedFooter } = context;
  const { galleryData, setPageColor } = props;

  useEffect(() => {
    removeFixedFooter();
    setPageColor(props => props.theme.white);
  }, [setPageColor, removeFixedFooter]);

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
