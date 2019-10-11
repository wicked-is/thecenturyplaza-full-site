import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { PageTitle } from "../shared/styled-components/Typography.js";
import { Wrapper } from "../shared/styled-components/Layouts.js";
import { ContainerStyled } from "Accessibility/style.js";
import Context from "../config/Context";

const AccessibilityWrapper = styled.div`
  ${Wrapper};
`;
const AccessibilityContainer = styled.div`
  ${ContainerStyled};
`;
const AccessibilityTitle = styled.h1`
  ${PageTitle};
`;

const Accessibility = props => {
  const { setPageColor } = props;
  const context = useContext(Context);

  useEffect(() => {
    setPageColor(props => props.theme.grayLight);
  }, [setPageColor]);

  return (
    <AccessibilityWrapper>
      <AccessibilityContainer>
        <AccessibilityTitle>Accessibility Statement</AccessibilityTitle>
        <p>
          Next Century Partners, LLC is committed to providing a website that is
          accessible to the widest possible audience, regardless of technology
          or ability. We aim to comply with all applicable standards.
        </p>
        <p>
          If you experience any difficulty in accessing any part of this
          website, please contact us by emailing{" "}
          <a href="mailto:mosborn@thecenturyplaza.com">
            mosborn@thecenturyplaza.com
          </a>{" "}
          or calling us at (+1) 310.246.4777.
        </p>
      </AccessibilityContainer>
    </AccessibilityWrapper>
  );
};

export default Accessibility;
