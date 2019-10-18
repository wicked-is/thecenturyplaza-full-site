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
  const { navActive, toggleMenu, globalConfig } = context;

  return (
    <HeaderWrapper
      globalConfig={globalConfig}
      navActive={navActive}
      pageColor={pageColor}
      isExpanded={isExpanded}
    >
      <Header
        pageColor={pageColor}
        isExpanded={isExpanded}
        primaryData={primaryData}
      />
    </HeaderWrapper>
  );
};
export default AppHeader;
