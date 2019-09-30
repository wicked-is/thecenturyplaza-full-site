import React from "react";
import styled from "styled-components";

const PrimaryContainer = styled.div`
  transition: all 0.5s ease-in-out;
  transition-delay: 0.25s;
  height: auto;
  width: ${props => props.isExpanded ? "100vw" : "calc(100vw - 80px)"};
  margin: ${props => props.isExpanded ? "-80px 0 0" : "0 40px"};
  ${'' /* background:  red; */}
  overflow: hidden;
`

const Press = props => {
  const { pressData } = props;
  return (
    <PrimaryContainer>
      {pressData.map((entry, index) => (
        <article key={index}>
          <span>{entry.date}</span>
          <h2><a href="{entry.source}" target="_blank">{entry.headline}</a></h2>
          <p>{entry.publication}</p>
        </article>
      ))}
    </PrimaryContainer>
  );
}

export default Press;
