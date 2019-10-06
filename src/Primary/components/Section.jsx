import React from "react";
import { Router } from "@reach/router";
import VideoSlide from "Primary/components/VideoSlide.jsx";
import SplitSlide from "Primary/components/SplitSlide.jsx";
import ImageSlide from "Primary/components/ImageSlide.jsx";
import TextSlide from "Primary/components/TextSlide.jsx";
import PanoramaSlide from "Primary/components/PanoramaSlide.jsx";

const Section = ({
  section,
  previousSection,
  nextSection,
  previousSectionPath,
  nextSectionPath,
  isExpanded,
  isFirstSection,
  scrollPath,
  toggleExpand
}) => {
  const getActiveSlide = (slide, index) => {
    let previousPath;
    if (index !== 0) {
      previousPath = "/" + section.slug + "/" + section.slides[index - 1].slug;
    } else {
      if (previousSectionPath === null) {
        previousPath = "/" + section.slug; // First Slide
      } else {
        previousPath = "/" + previousSectionPath;
      }
    }

    let nextPath;
    if (index !== section.slides.length - 1) {
      nextPath = "/" + section.slug + "/" + section.slides[index + 1].slug;
    } else {
      if (nextSectionPath === null) {
        nextPath = "/continue"; // Last Slide
      } else {
        nextPath = "/" + nextSectionPath;
      }
    }

    let previousSlide;
    if (index !== 0) {
      previousSlide = section.slides[index - 1];
    } else {
      if (previousSection === null) {
        previousSlide = null; // First Slide
      } else {
        previousSlide = previousSection.slides.length - 1;
      }
    }

    let nextSlide;
    if (index !== section.slides.length - 1) {
      nextSlide = section.slides[index + 1];
    } else {
      if (nextSection === null) {
        nextSlide = null; // Last Slide
      } else {
        nextSlide = nextSection.slides[0];
      }
    }

    if (slide.type === "video") {
      return (
        <VideoSlide
          isFirstSection={isFirstSection}
          isFirstSlide={index === 0 && true}
          default={index === 0 && true}
          isExpanded={isExpanded}
          toggleExpand={toggleExpand}
          key={index}
          slide={slide}
          previousSlide={previousSlide}
          nextSlide={nextSlide}
          path={slide.slug}
          nextPath={nextPath}
          previousPath={previousPath}
          scrollPath={scrollPath}
        />
      );
    } else if (slide.type === "image") {
      return (
        <ImageSlide
          isFirstSection={isFirstSection}
          isFirstSlide={index === 0 && true}
          default={index === 0 && true}
          key={index}
          slide={slide}
          previousSlide={previousSlide}
          nextSlide={nextSlide}
          path={slide.slug}
          nextPath={nextPath}
          previousPath={previousPath}
          scrollPath={scrollPath}
        />
      );
    } else if (slide.type === "split") {
      return (
        <SplitSlide
          isFirstSection={isFirstSection}
          isFirstSlide={index === 0 && true}
          default={index === 0 && true}
          key={index}
          slide={slide}
          previousSlide={previousSlide}
          nextSlide={nextSlide}
          path={slide.slug}
          nextPath={nextPath}
          previousPath={previousPath}
          scrollPath={scrollPath}
        />
      );
    } else if (slide.type === "text") {
      return (
        <TextSlide
          isFirstSection={isFirstSection}
          isFirstSlide={index === 0 && true}
          default={index === 0 && true}
          key={index}
          slide={slide}
          previousSlide={previousSlide}
          nextSlide={nextSlide}
          path={slide.slug}
          nextPath={nextPath}
          previousPath={previousPath}
          scrollPath={scrollPath}
        />
      );
    } else if (slide.type === "panorama") {
      return (
        <PanoramaSlide
          isFirstSection={isFirstSection}
          isFirstSlide={index === 0 && true}
          default={index === 0 && true}
          key={index}
          slide={slide}
          previousSlide={previousSlide}
          nextSlide={nextSlide}
          path={slide.slug}
          nextPath={nextPath}
          previousPath={previousPath}
          scrollPath={scrollPath}
        />
      );
    }
  };

  return (
    <section>
      <Router primary={false}>
        {section.slides.map((slide, index) => getActiveSlide(slide, index))}
      </Router>
    </section>
  );
};

export default Section;
