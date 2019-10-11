import React, { useContext } from "react";
import Context from "../../config/Context";
import styled from "styled-components";
import { PageHeader } from "shared/styled-components/Typography.js";
import Header from "shared/components/Header.jsx";

const HeaderWrapper = styled.div`
  ${PageHeader};
`;

const AppHeader = props => {
  const { primaryData, pageColor, isExpanded } = props;
  const context = useContext(Context);
  const { navActive, fixedFooter, hideFooter } = context;

  return (
    <HeaderWrapper
      navActive={navActive}
      fixedFooter={fixedFooter}
      hideFooter={hideFooter}
      pageColor={pageColor}
      isExpanded={isExpanded}
    >
      <Header
        navActive={navActive}
        pageColor={pageColor}
        isExpanded={isExpanded}
        primaryData={primaryData}
      />
    </HeaderWrapper>
  );
};
export default AppHeader;
