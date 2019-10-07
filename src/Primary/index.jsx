import React, { useEffect } from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import { ViewportWrapper } from "shared/styled-components/Layouts.js";
import Section from "Primary/components/Section.jsx";

const PrimaryWrapper = styled.div`
  ${ViewportWrapper};
`;

const Primary = props => {
  const { isExpanded, primaryData, setPageColor, scrollPath } = props;

  const getPreviousSectionPath = index =>
    index !== 0
      ? primaryData[index - 1].slug +
        "/" +
        primaryData[index - 1].slides[primaryData[index - 1].slides.length - 1]
          .slug
      : null;
  const getNextSectionPath = index =>
    index !== primaryData.length - 1 ? primaryData[index + 1].slug : null;

  useEffect(() => {
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
            closeExpand={props.closeExpand}
            section={section}
            previousSection={
              primaryData[index - 1] ? primaryData[index - 1] : null
            }
            nextSection={primaryData[index + 1] ? primaryData[index + 1] : null}
            previousSectionPath={getPreviousSectionPath(index)}
            nextSectionPath={getNextSectionPath(index)}
            scrollPath={scrollPath}
          />
        ))}
      </Router>
    </PrimaryWrapper>
  );
};

export default Primary;
