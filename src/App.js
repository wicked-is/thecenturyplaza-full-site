import React, {Component} from "react";
import {Router, Redirect, Location} from "@reach/router";
import styled, {ThemeProvider} from "styled-components";
import ScrollPrompt from "shared/components/ScrollPrompt.jsx";
import ContextProvider from "./provider/ContextProvider";
import {PageBody} from "shared/styled-components/Typography.js";
import AppHeader from "shared/components/AppHeader.jsx";
import MainMenu from "shared/components/MainMenu.jsx";
import AppFooter from "shared/components/AppFooter.jsx";
import SEO from "shared/components/SEO.jsx";
import seoData from "config/seoData.json";
import Primary from "Primary";
import BrokerPortal from "BrokerPortal";
import primaryData from "Primary/primaryData.json";
import SecondaryMenu from "shared/components/SecondaryMenu.jsx";
import Neighborhood from "Neighborhood";
import neighborhoodData from "Neighborhood/neighborhoodData.json";
import Team from "Team";
import teamData from "Team/teamData.json";
import Availability from "Availability";
import Press from "Press";
import Gallery from "Gallery";
import SlideshowSection from "Gallery/components/SlideshowSection.jsx";
import galleryData from "Gallery/galleryData.json";
import landingData from "Landing/landingData.json";
import Contact from "Contact";
import Legal from "Legal";
import Accessibility from "Accessibility";
import Amenities from "Amenities";
import amenitiesData from "Amenities/amenitiesData.json";
import Div100vh from "react-div-100vh";
import Landing from "./Landing";

const theme = {
  breakpoints: {
    phone: 375,
    phoneLarge: 414,
    phoneXL: 550,
    tablet: 768,
    tabletLandscape: 1024,
    desktopSmall: 1250,
    desktop: 1440,
    desktopLarge: 1920,
    desktopXLarge: 2048
  },
  whiteGradient:
    "linear-gradient(to bottom, rgba(255,255,255,1) 70%,rgba(255,255,255,0) 100%)",
  black: "#101820",
  blackGradient:
    "linear-gradient(to bottom, rgba(16,24,32,1) 70%,rgba(16,24,32,0) 100%)",
  grayLight: "#E7E7E7",
  grayLightGradient:
    "linear-gradient(to bottom, rgba(231,231,231,1) 70%,rgba(231,231,231,0) 100%)",
  gray: "#B4BAC1",
  grayGradient:
    "linear-gradient(to bottom, rgba(180,186,193,1) 70%,rgba(180,186,193,0) 100%)",
  gold: "#BB8A47",
  goldGradient:
    "linear-gradient(to bottom, rgba(187,138,71,1) 70%,rgba(187,138,71,0) 100%)",
  sansSerifThin: "HelveticaNeueLTStd-UltLt",
  sansSerifThinItalic: "HelveticaNeueLTStd-UltLt",
  sansSerifLight: "HelveticaNeueLTStd-Lt",
  sansSerifLightItalic: "HelveticaNeueLTStd-LtIt",
  sansSerifRegular: "HelveticaNeueLTStd-Roman",
  sansSerifItalic: "HelveticaNeueLTStd-It",
  sansSerifMedium: "HelveticaNeueLTStd-Md",
  sansSerifMediumItalic: "HelveticaNeueLTStd-MdIt",
  serifRoman: "Austin-Roman",
  serifMedium: "Austin-Medium",
  serifMediumItalic: "Austin-Medium-Italic",
  mobilePortraitHeaderHeight: "60",
  mobileLandscapeHeaderHeight: "40",
  desktopHeaderHeight: "80",
  mobileSideMargin: "25",
  mobileColumn: "7.2822%",
  mobileGutter: "20",
  browserBottom: "40",
  desktopSideMargin: "40",
  desktopColumn: "8.3125%",
  desktopGutter: "20"
};

// Size varaibles listed above declared without units for computations

const AppBody = styled.div`
  ${PageBody};
`;

class App extends Component {
  state = {
    isExpanded: false,
    pageColor: "white"
  };

  setPageColor = color => {
    this.setState(() => ({pageColor: color}));
  };

  toggleExpand = () => {
    this.setState(state => ({isExpanded: !state.isExpanded}));
  };

  closeExpand = () => {
    this.setState(() => ({isExpanded: false}));
  };

  render() {
    return (
      <ContextProvider pageColor={this.state.pageColor}>
        <ThemeProvider theme={theme}>
          <Div100vh>
            <AppBody pageColor={this.state.pageColor}>
              <Location>
                {({location}) => (
                  <>
                    {
                      location.pathname !== '/landing' ?
                        <>
                          <ScrollPrompt isExpanded={this.state.isExpanded}/>
                          <AppHeader
                            pageColor={this.state.pageColor}
                            isExpanded={this.state.isExpanded}
                            primaryData={primaryData}
                          />
                          <MainMenu
                            pageColor={this.state.pageColor}
                            isExpanded={this.state.isExpanded}
                            primaryData={primaryData}
                            setPageColor={this.setPageColor}
                          />
                        </> :
                        null
                    }
                    <Router primary={false}>
                      <SEO path="*" seoData={seoData} />
                    </Router>
                    <Router>
                      {/* <Redirect from="/" to="home" noThrow /> */}
                      {primaryData.map((section, index) => (
                        <Primary
                          key={index}
                          default
                          path={section.slug + "/*"}
                          primaryData={primaryData}
                          isExpanded={this.state.isExpanded}
                          toggleExpand={this.toggleExpand}
                          closeExpand={this.closeExpand}
                          setPageColor={this.setPageColor}
                        />
                      ))}
                      <SecondaryMenu
                        setPageColor={this.setPageColor}
                        path="continue"
                      />
                      <Redirect from="fairmont" to="fairmont/hotel" noThrow/>
                      <Neighborhood
                        neighborhoodData={neighborhoodData}
                        path="neighborhood"
                        setPageColor={this.setPageColor}
                      />
                      <Team
                        teamData={teamData}
                        path="team/*"
                        toggleExpand={this.toggleExpand}
                        setPageColor={this.setPageColor}
                      />
                      <Redirect from="team" to={"team/" + teamData[0].slug} noThrow/>
                      <Availability
                        path="availability/*"
                        setPageColor={this.setPageColor}
                      />
                      <Redirect from="availability" to="availability/hotel" noThrow/>
                      <Press path="press" setPageColor={this.setPageColor}/>
                      <Gallery
                        galleryData={galleryData}
                        path="gallery"
                        setPageColor={this.setPageColor}
                      />
                      {galleryData.map((section, index) => (
                        <SlideshowSection
                          key={index}
                          path={"gallery/" + section.slug + "/*"}
                          section={section}
                          sectionId={index}
                          galleryData={galleryData}
                          pageColor={this.state.pageColor}
                        />
                      ))}
                      <Legal path="legal" setPageColor={this.setPageColor}/>
                      <Contact path="contact" setPageColor={this.setPageColor}/>
                      <Landing
                        path="landing"
                        landingData={landingData}
                        setPageColor={this.setPageColor}/>
                      <Accessibility
                        path="accessibility"
                        setPageColor={this.setPageColor}
                      />
                      <Amenities
                        pageColor={this.state.pageColor}
                        amenitiesData={amenitiesData}
                        path="amenities/*"
                        setPageColor={this.setPageColor}
                      />
                      <BrokerPortal
                        path="broker-portal"
                        setPageColor={this.setPageColor}
                      />
                    </Router>
                    {
                      location.pathname !== '/landing' ?
                        <AppFooter
                          pageColor={this.state.pageColor}
                          isExpanded={this.state.isExpanded}
                          primaryData={primaryData}
                        /> :
                        null
                    }
                  </>
                )}
              </Location>
            </AppBody>
          </Div100vh>
        </ThemeProvider>
      </ContextProvider>
    );
  }
}

export default App;
