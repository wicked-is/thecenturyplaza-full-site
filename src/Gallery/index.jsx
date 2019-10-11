import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Wrapper } from "../shared/styled-components/Layouts.js";
import { ContainerStyled } from "Gallery/style.js";
import Section from "Gallery/components/Section.jsx";
import Context from "../config/Context";

const GalleryWrapper = styled.div`
  ${Wrapper};
`;
const GalleryContainer = styled.div`
  ${ContainerStyled};
`;

const Press = props => {
  const { galleryData, setPageColor } = props;
  const context = useContext(Context);
  const { setHasCaptions } = context;

  useEffect(() => {
    setHasCaptions(false);
    setPageColor("white");
  }, [setPageColor, setHasCaptions]);

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
