import React, { useContext } from "react";
import Context from "../../config/Context";
import styled from "styled-components";
import { PageFooter } from "shared/styled-components/Typography.js";
import Footer from "shared/components/Footer.jsx";

const FooterWrapper = styled.div`
  ${PageFooter};
`;

const AppFooter = props => {
  const { primaryData, pageColor, isExpanded } = props;
  const context = useContext(Context);
  const { fixedFooter, hideFooter } = context;

  return (
    <FooterWrapper
      fixedFooter={fixedFooter}
      hideFooter={hideFooter}
      pageColor={pageColor}
      isExpanded={isExpanded}
    >
      <Footer
        pageColor={pageColor}
        isExpanded={isExpanded}
        primaryData={primaryData}
      />
    </FooterWrapper>
  );
};
export default AppFooter;
