import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import styled, { ThemeProvider } from "styled-components";
import Header from "shared/components/Header.jsx";
import Primary from "Primary";
import primaryData from "Primary/primaryData.json";
import Team from "Team";
import teamData from "Team/teamData.json";
import Press from "Press";
import pressData from "Press/pressData.json";

const PageContainer = styled.div`
  font-family: ${props => props.theme.sansSerifRegular}, courier;
  color: ${props => props.theme.black};
  font-size: 14px;
  letter-spacing: 0.6px;

  a {
    text-decoration: none;
  }
`

const theme = {
  black: "#101820",
  grayLight: "#E7E7E7",
  gray: "#B4BAC1",
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
  serifBold: "Austin-Bold"
};

class App extends Component {
  state = {
    isExpanded: false
  };

  toggleExpand = () => {
    this.setState(state => ({ isExpanded: !state.isExpanded }));
  };

  closeExpand = () => {
    this.setState(state => ({ isExpanded: false }));
  };


  render() {

    return (
      <ThemeProvider theme={theme}>
        <PageContainer>
          <Header primaryData={primaryData} isExpanded={this.state.isExpanded} />
          <main>
            <Router>
              <Primary primaryData={primaryData} path="/" isExpanded={this.state.isExpanded} toggleExpand={this.toggleExpand} closeExpand={this.closeExpand} >
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
              <Team teamData={teamData} path="team" isExpanded={this.state.isExpanded} toggleExpand={this.toggleExpand} closeExpand={this.closeExpand}>
                {teamData.map((member, index) => (
                  <div key={index} path={member.slug} />
                ))}
              </Team>
              <Press pressData={pressData} path="press" isExpanded={this.state.isExpanded} toggleExpand={this.toggleExpand} closeExpand={this.closeExpand} />
            </Router>
          </main>
        </PageContainer>
      </ThemeProvider>
    );
  }
}

export default App;
