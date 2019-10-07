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
  toggleExpand,
  closeExpand
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

    let firstSectionSlide;
    if (index === 0) {
      firstSectionSlide = true;
    } else {
      firstSectionSlide = false;
    }

    let firstSlide;
    if (index === 0 && previousSection === null) {
      firstSlide = true;
    } else {
      firstSlide = false;
    }

    let lastSectionSlide;
    if (index === section.slides.length - 1) {
      lastSectionSlide = true;
    } else {
      lastSectionSlide = false;
    }

    let lastSlide;
    if (index === section.slides.length - 1 && nextSection === null) {
      lastSlide = true;
    } else {
      lastSlide = false;
    }

    let previousSlideImage;
    if (index !== 0 && section.slides[index - 1].type === "image") {
      previousSlideImage = true;
    } else {
      previousSlideImage = false;
    }

    let nextSlideImage;
    if (
      index !== section.slides.length - 1 &&
      section.slides[index + 1].type === "image"
    ) {
      nextSlideImage = true;
    } else {
      nextSlideImage = false;
    }

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
          scrollPath={scrollPath}
          firstSlide={firstSlide}
          firstSectionSlide={firstSectionSlide}
          lastSlide={lastSlide}
          lastSectionSlide={lastSectionSlide}
          previousSlideImage={previousSlideImage}
          nextSlideImage={nextSlideImage}
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
          scrollPath={scrollPath}
          firstSlide={firstSlide}
          firstSectionSlide={firstSectionSlide}
          lastSlide={lastSlide}
          lastSectionSlide={lastSectionSlide}
          previousSlideImage={previousSlideImage}
          nextSlideImage={nextSlideImage}
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
          scrollPath={scrollPath}
          firstSlide={firstSlide}
          firstSectionSlide={firstSectionSlide}
          lastSlide={lastSlide}
          lastSectionSlide={lastSectionSlide}
          previousSlideImage={previousSlideImage}
          nextSlideImage={nextSlideImage}
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
          scrollPath={scrollPath}
          firstSlide={firstSlide}
          firstSectionSlide={firstSectionSlide}
          lastSlide={lastSlide}
          lastSectionSlide={lastSectionSlide}
          previousSlideImage={previousSlideImage}
          nextSlideImage={nextSlideImage}
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
          scrollPath={scrollPath}
          firstSlide={firstSlide}
          firstSectionSlide={firstSectionSlide}
          lastSlide={lastSlide}
          lastSectionSlide={lastSectionSlide}
          previousSlideImage={previousSlideImage}
          nextSlideImage={nextSlideImage}
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
