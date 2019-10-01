import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import styled, { ThemeProvider } from "styled-components";
import { PageBody } from "shared/styled-components/Typography.js"
import Header from "shared/components/Header.jsx";
import Primary from "Primary";
import primaryData from "Primary/primaryData.json";
import SecondaryMenu from "shared/components/SecondaryMenu.jsx";
import Team from "Team";
import teamData from "Team/teamData.json";
import Press from "Press";
import pressData from "Press/pressData.json";
import Gallery from "Gallery";
import galleryData from "Gallery/galleryData.json";


const theme = {
  breakpoints: {
    phone: 375,
    phoneLarge: 414,
    phoneXL: 550,
    tablet: 768,
    tabletLandscape: 1025,
    desktopSmall: 1250,
    desktop: 1440,
    desktopLarge: 1920,
    desktopXLarge: 2048
  },
  black: "#101820",
  grayLight: "#E7E7E7",
  gray: "#B4BAC1",
  white: "#FFFFFF",
  sansSerifThin: "HelveticaNeueLT-Thin",
  sansSerifThinItalic: "HelveticaNeueLT-ThinItalic",
  sansSerifLight: "HelveticaNeueLT-Light",
  sansSerifLightItalic: "HelveticaNeueLT-LightItalic",
  sansSerifRegular: "HelveticaNeueLT-Light",
  sansSerifItalic: "HelveticaNeueLT-LightItalic",
  sansSerifMedium: "HelveticaNeueLT-Light",
  sansSerifMediumItalic: "HelveticaNeueLT-LightItalic",
  serifLight: "Austin-Roman",
  serifMedium: "Austin-Medium",
  serifBold: "Austin-Bold",
  headerHeight: "80",
  mobileMargin: "25",
  mobileColumn: "7.2822%",
  mobileGutter: "20",
  desktopMargin: "40",
  desktopColumn: "8.3125%",
  desktopGutter: "20"
};

const AppPageBody = styled.div`${PageBody};`;

class App extends Component {
  state = {
    isExpanded: false,
    PageColor: theme.white,
    scrollPath: null
  };

  // setScrollPath = path =>

  setPageColor = color => {
    this.setState(state => ({ PageColor: color }));
  }

  toggleExpand = () => {
    this.setState(state => ({ isExpanded: !state.isExpanded }));
  };

  closeExpand = () => {
    this.setState(state => ({ isExpanded: false }));
  };


  render() {

    return (
      <ThemeProvider theme={theme}>
        <AppPageBody PageColor={this.state.PageColor}>
          <Header primaryData={primaryData} isExpanded={this.state.isExpanded} />
          <main>
            <Router primary={false}>
              <Primary primaryData={primaryData} path="/" isExpanded={this.state.isExpanded} toggleExpand={this.toggleExpand} closeExpand={this.closeExpand} setPageColor={this.setPageColor} scrollPath={this.state.scrollPath}>
                {primaryData.map((section, index) => (
                  <div key={index} path={section.slug}>
                    {
                      section.slides.map((slide, index) => (
                        <div key={index} path={slide.slug} />
                      ))
                    }
                  </div>
                ))}
              </Primary>
              <Redirect from="/" to="century-plaza" noThrow />
              <Team teamData={teamData} path="team" isExpanded={this.state.isExpanded} toggleExpand={this.toggleExpand} closeExpand={this.closeExpand} setPageColor={this.setPageColor}>
                {teamData.map((member, index) => (
                  <div key={index} path={member.slug} />
                ))}
              </Team>
              <Press pressData={pressData} path="press" setPageColor={this.setPageColor} />
              <Gallery galleryData={galleryData} path="gallery" setPageColor={this.setPageColor} />
              <SecondaryMenu setPageColor={this.setPageColor} path="continue" />
            </Router>
          </main>
        </AppPageBody>
      </ThemeProvider>
    );
  }
}

export default App;
