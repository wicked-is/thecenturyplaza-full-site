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
  // const [firstShouldSwipe, setFirstShouldSwipe] = useState(false);
  const [isExisting, setIsExisting] = useState(false);
  const [pressItems, setPressItems] = useState([]);
  const [isSection, setSection] = useState(0);
  const [isSlide, setSlide] = useState(0);
  const [hasCaptions, setHasCaptions] = useState(false);
  const [fixedFooter, setFixedFooter] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const [activeCrossFade, setActiveCrossFade] = useState(1);
  const [globalConfig, setGlobalConfig] = useState({
    firstLocation: window.location.pathname,
    returnPath: null,
    headerBackground: "white",
    footerBackground: "white",
    footerDisplay: true,
    footerFixed: true,
    sidebarBackground: "white",
    pageBackground: "white"
  });

  const scrollCooldown = delay => {
    setPauseScroll(true);
    setTimeout(() => setPauseScroll(false), delay);
  };

  const toggleMenu = () => {
    setNavActive(!navActive);
  };

  const markPlayed = () => {
    setHasPlayed(true);
  };

  const triggerExit = path => {
    setIsExisting(true);
    scrollCooldown(1500);
    setTimeout(() => {
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
        // firstShouldSwipe,
        // setFirstShouldSwipe,
        isExisting,
        setIsExisting,
        triggerExit,
        pressItems,
        fetchPress,
        isSection,
        isSlide,
        currentSectionIndex,
        currentSlideIndex,
        hasCaptions,
        setHasCaptions,
        fixedFooter,
        setFixedFooter,
        hideFooter,
        setHideFooter,
        activeCrossFade,
        setActiveCrossFade,
        globalConfig,
        setGlobalConfig
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
