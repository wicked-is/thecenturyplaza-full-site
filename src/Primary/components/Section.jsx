import React from "react";
import { Router } from "@reach/router";
import VideoSlide from "Primary/components/VideoSlide.jsx";
import SplitSlide from "Primary/components/SplitSlide.jsx";
import ImageSlide from "Primary/components/ImageSlide.jsx";
import CrossFadeSlide from "Primary/components/CrossFadeSlide.jsx";
import TextSlide from "Primary/components/TextSlide.jsx";
import PanoramaSlide from "Primary/components/PanoSlide.jsx";

const Section = ({
  section,
  previousSection,
  nextSection,
  previousSectionPath,
  nextSectionPath,
  isExpanded,
  isFirstSection,
  toggleExpand,
  closeExpand,
  sectionIndex
}) => {
  const getActiveSlide = (slide, index) => {
    // Used in triggerExit on Scroll Listeners

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

    // Used for Intro Video

    let firstSectionSlide;
    if (index === 0) {
      firstSectionSlide = true;
    } else {
      firstSectionSlide = false;
    }

    // let firstSlide;
    // if (index === 0 && previousSection === null) {
    //   firstSlide = true;
    // } else {
    //   firstSlide = false;
    // }

    // let lastSectionSlide;
    // if (index === section.slides.length - 1) {
    //   lastSectionSlide = true;
    // } else {
    //   lastSectionSlide = false;
    // }

    // let lastSlide;
    // if (index === section.slides.length - 1 && nextSection === null) {
    //   lastSlide = true;
    // } else {
    //   lastSlide = false;
    // }

    if (slide.type === "video") {
      return (
        <VideoSlide
          isFirstSection={isFirstSection}
          isFirstSlide={index === 0 && true}
          default={index === 0 && true}
          isExpanded={isExpanded}
          toggleExpand={toggleExpand}
          closeExpand={closeExpand}
          key={index}
          slide={slide}
          path={slide.slug}
          nextPath={nextPath}
          previousPath={previousPath}
          // firstSlide={firstSlide}
          firstSectionSlide={firstSectionSlide}
          sectionIndex={sectionIndex}
          slideIndex={index}
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
          path={slide.slug}
          nextPath={nextPath}
          previousPath={previousPath}
          // lastSlide={lastSlide}
          // lastSectionSlide={lastSectionSlide}
          sectionIndex={sectionIndex}
          slideIndex={index}
        />
      );
    } else if (slide.type === "crossfade") {
      return (
        <CrossFadeSlide
          isFirstSection={isFirstSection}
          isFirstSlide={index === 0 && true}
          default={index === 0 && true}
          key={index}
          slide={slide}
          path={slide.slug}
          nextPath={nextPath}
          previousPath={previousPath}
          // lastSlide={lastSlide}
          // lastSectionSlide={lastSectionSlide}
          sectionIndex={sectionIndex}
          slideIndex={index}
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
          path={slide.slug}
          nextPath={nextPath}
          previousPath={previousPath}
          // lastSlide={lastSlide}
          // lastSectionSlide={lastSectionSlide}
          sectionIndex={sectionIndex}
          slideIndex={index}
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
          path={slide.slug}
          nextPath={nextPath}
          previousPath={previousPath}
          // lastSlide={lastSlide}
          // lastSectionSlide={lastSectionSlide}
          sectionIndex={sectionIndex}
          slideIndex={index}
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
          path={slide.slug}
          nextPath={nextPath}
          previousPath={previousPath}
          sectionIndex={sectionIndex}
          slideIndex={index}
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
