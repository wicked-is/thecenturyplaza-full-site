import React from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import Section from "Primary/components/Section.jsx";

const PrimaryContainer = styled.div`
  transition: all 0.5s ease-in-out;
  transition-delay: 0.05s;
  height: ${props => props.isExpanded ? "100vh" : "calc(100vh - 80px)"};
  width: ${props => props.isExpanded ? "100vw" : "calc(100vw - 80px)"};
  margin: ${props => props.isExpanded ? "-80px 0 0" : "0 40px"};
  background:  transparent;
  overflow: hidden;
`

const Primary = props => {
  const { isExpanded, primaryData } = props;

  const getPreviousSection = index => index !== 0 ? primaryData[index - 1].slug + "/" + primaryData[index - 1].slides[primaryData[index - 1].slides.length - 1].slug : null;
  const getNextSection = index => index !== primaryData.length - 1 ? primaryData[index + 1].slug : null;

  return (
    <PrimaryContainer isExpanded={isExpanded}>
      <Router>
        {primaryData.map((section, index) => (
          <Section isFirstSection={index === 0 && true} isExpanded={isExpanded} toggleExpand={props.toggleExpand} closeExpand={props.closeExpand} key={index} path={section.slug} section={section} previousSection={getPreviousSection(index)} nextSection={getNextSection(index)}>
            {
              section.slides.map((slide, index) => (
                <div key={index} path={slide.slug} />
              ))
            }
          </Section>
        ))}
      </Router>
    </PrimaryContainer>
  );
}

export default Primary;
