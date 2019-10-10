import React, { useContext } from "react";
import Context from "../../config/Context";
import { PageFooter } from "shared/styled-components/Typography.js";
import Footer from "shared/components/Footer.jsx";

const AppFooter = styled.div`
  ${PageFooter};
`;

const AppFooter = props => {
  const { primaryData, pageColor, isExpanded } = props;
  const context = useContext(Context);
  const { fixedFooter } = context;

  return (
    <Footer
      fixedFooter={fixedFooter}
      pageColor={pageColor}
      isExpanded={isExpanded}
      primaryData={primaryData}
    />
  );
};
export default AppFooter;
