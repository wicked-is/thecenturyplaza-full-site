import React from "react";
import { Router } from "@reach/router";
import VideoSlide from "Primary/components/VideoSlide.jsx";
import SplitSlide from "Primary/components/SplitSlide.jsx";
import ImageSlide from "Primary/components/ImageSlide.jsx";
import TextSlide from "Primary/components/TextSlide.jsx";


const Section = props => {
  const { section, previousSection, nextSection, isExpanded, isFirstSection, scrollPath } = props;

  const getActiveSlide = (slide, index) => {

    let previousPath;
    if (index !== 0) {
      previousPath = "/" + section.slug + "/" + section.slides[index - 1].slug
    } else {
      if (previousSection === null) {
        previousPath = "/" + section.slug; // First Slide
      } else {
        previousPath = "/" + previousSection;
      }
    }

    let nextPath;
    if (index !== section.slides.length - 1) {
      nextPath = "/" + section.slug + "/" + section.slides[index + 1].slug
    } else {
      if (nextSection === null) {
        nextPath = "/continue"; // Last Slide
      } else {
        nextPath = "/" + nextSection;
      }
    }

    if (slide.type === "video") {
      return <VideoSlide isFirstSection={isFirstSection} isFirstLoad={index === 0 && true} default={index === 0 && true} isExpanded={isExpanded} toggleExpand={props.toggleExpand} closeExpand={props.closeExpand} key={index} slide={slide} path={slide.slug} nextPath={nextPath} previousPath={previousPath} scrollPath={scrollPath} />;
    } else if (slide.type === "image") {
      return <ImageSlide isFirstSection={isFirstSection} isFirstLoad={index === 0 && true} default={index === 0 && true} isExpanded={isExpanded} toggleExpand={props.toggleExpand} closeExpand={props.closeExpand} key={index} slide={slide} path={slide.slug} nextPath={nextPath} previousPath={previousPath} scrollPath={scrollPath} />;
    } else if (slide.type === "split") {
      return <SplitSlide isFirstSection={isFirstSection} isFirstLoad={index === 0 && true} default={index === 0 && true} isExpanded={isExpanded} toggleExpand={props.toggleExpand} closeExpand={props.closeExpand} key={index} slide={slide} path={slide.slug} nextPath={nextPath} previousPath={previousPath} scrollPath={scrollPath} />;
    } else if (slide.type === "text") {
      return <TextSlide isFirstSection={isFirstSection} isFirstLoad={index === 0 && true} default={index === 0 && true} isExpanded={isExpanded} toggleExpand={props.toggleExpand} closeExpand={props.closeExpand} key={index} slide={slide} path={slide.slug} nextPath={nextPath} previousPath={previousPath} scrollPath={scrollPath} />;
    }
  };

  return (
    <section>
      <Router primary={false}>
        {section.slides.map((slide, index) => (
          getActiveSlide(slide, index)
        ))}
      </Router>
    </section>
  );
};

export default Section;
