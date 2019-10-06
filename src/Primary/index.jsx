import React, { useEffect, useContext } from "react";
import { Router } from "@reach/router";
import Context from "config/Context";
import styled from "styled-components";
import { ViewportWrapper } from "shared/styled-components/Layouts.js";
import Section from "Primary/components/Section.jsx";

const PrimaryWrapper = styled.div`
  ${ViewportWrapper};
`;

const Primary = props => {
  const context = useContext(Context);
  const { applyFixedFooter } = context;

  const { isExpanded, primaryData, setPageColor, scrollPath } = props;

  const getPreviousSection = index =>
    index !== 0
      ? primaryData[index - 1].slug +
        "/" +
        primaryData[index - 1].slides[primaryData[index - 1].slides.length - 1]
          .slug
      : null;
  const getNextSection = index =>
    index !== primaryData.length - 1 ? primaryData[index + 1].slug : null;

  useEffect(() => {
    applyFixedFooter();
    setPageColor(props => props.theme.white);
  }, [setPageColor]);

  return (
    <PrimaryWrapper isExpanded={isExpanded}>
      <Router primary={false}>
        {primaryData.map((section, index) => (
          <Section
            key={index}
            path={section.slug + "/*"}
            isFirstSection={index === 0 && true}
            isExpanded={isExpanded}
            toggleExpand={props.toggleExpand}
            section={section}
            previousSection={getPreviousSection(index)}
            nextSection={getNextSection(index)}
            scrollPath={scrollPath}
          />
        ))}
      </Router>
    </PrimaryWrapper>
  );
};

export default Primary;
