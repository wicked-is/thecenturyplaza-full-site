import React, { useContext } from "react";
import Context from "../../config/Context";
import styled from "styled-components/macro";
import { PageFooter } from "shared/styled-components/Typography.js";
import Footer from "shared/components/Footer.jsx";

const FooterWrapper = styled.div`
  ${PageFooter};
`;

const AppFooter = props => {
  const { primaryData, pageColor, isExpanded } = props;
  const context = useContext(Context);
  const { globalConfig, navActive, hasCaptions } = context;

  return (
    <FooterWrapper
      pageColor={pageColor}
      isExpanded={isExpanded}
      globalConfig={globalConfig}
      navActive={navActive}
      hasCaptions={hasCaptions}
    >
      <Footer
        pageColor={pageColor}
        isExpanded={isExpanded}
        primaryData={primaryData}
        navActive={navActive}
      />
    </FooterWrapper>
  );
};
export default AppFooter;
