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
  const { globalConfig } = context;

  return (
    <FooterWrapper
      pageColor={pageColor}
      isExpanded={isExpanded}
      globalConfig={globalConfig}
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
