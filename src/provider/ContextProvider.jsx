/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Context from "../config/Context";
import { navigate } from "@reach/router";

const parsePress = pressData => {
  return pressData
    .map(el => {
      el.acf.id = el.id;
      return el.acf;
    })
    .sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
};

const ContextProvider = props => {
  const [navActive, setNavActive] = useState(false);
  const [pauseScroll, setPauseScroll] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isExisting, setIsExisting] = useState(false);
  const [isCrossFadingUp, setIsCrossFadingUp] = useState(false);
  const [isCrossFadingDown, setIsCrossFadingDown] = useState(false);
  const [pressItems, setPressItems] = useState([]);
  const [isSection, setSection] = useState(0);
  const [isSlide, setSlide] = useState(0);
  const [hasCaptions, setHasCaptions] = useState(false);
  const [updateHeader, setUpdateHeader] = useState({
    position: "fixed",
    backgroundColor: props => props.theme.white,
    textColor: props => props.theme.black
  });
  const [updateFooter, setUpdateFooter] = useState({
    position: "relative",
    backgroundColor: "transparent",
    textColor: props => props.theme.black
  });

  const scrollCooldown = () => {
    setPauseScroll(true);
    setTimeout(() => setPauseScroll(false), 1000);
  };

  const toggleMenu = () => {
    setNavActive(!navActive);
  };

  const markPlayed = () => {
    setHasPlayed(true);
  };

  const triggerExit = path => {
    setIsExisting(true);

    setTimeout(() => {
      scrollCooldown();
      setIsExisting(false);
      navigate(path);
    }, 500);
  };

  const triggerCrossFadeUp = path => {
    setIsExisting(true);
    setIsCrossFadingUp(true);
    setTimeout(() => {
      scrollCooldown();
      setIsExisting(false);
      setIsCrossFadingUp(false);
      navigate(path);
    }, 500);
  };

  const triggerCrossFadeDown = path => {
    setIsExisting(true);
    setIsCrossFadingDown(true);
    setTimeout(() => {
      scrollCooldown();
      setIsExisting(false);
      setIsCrossFadingDown(false);
      navigate(path);
    }, 500);
  };

  const currentSectionIndex = index => {
    setSection(index);
  };

  const currentSlideIndex = index => {
    setSlide(index);
  };

  const fetchPress = async () => {
    console.log("Fetching Press");
    try {
      const pressData = await fetch(
        "https://cms.dbox.com/wp-json/wp/v2/cp_press?per_page=100"
      );
      const pressItems = await pressData.json();
      console.log(parsePress(pressItems));
      setPressItems(parsePress(pressItems));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Context.Provider
      value={{
        ...props,
        navActive,
        toggleMenu,
        pauseScroll,
        scrollCooldown,
        hasPlayed,
        markPlayed,
        isExisting,
        setIsExisting,
        triggerExit,
        isCrossFadingUp,
        setIsCrossFadingUp,
        isCrossFadingDown,
        setIsCrossFadingDown,
        triggerCrossFadeUp,
        triggerCrossFadeDown,
        pressItems,
        fetchPress,
        isSection,
        isSlide,
        currentSectionIndex,
        currentSlideIndex,
        hasCaptions,
        setHasCaptions,
        updateHeader,
        setUpdateHeader,
        updateFooter,
        setUpdateFooter
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
