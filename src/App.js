import React, { Component } from 'react';
import { Router, Redirect } from '@reach/router';
import styled, { ThemeProvider } from 'styled-components';

import ContextProvider from './provider/ContextProvider';
import {
  PageBody,
  PageHeader,
  PageFooter
} from 'shared/styled-components/Typography.js';
import Header from 'shared/components/Header.jsx';
import Footer from 'shared/components/Footer.jsx';
import Primary from 'Primary';
import primaryData from 'Primary/primaryData.json';
import SecondaryMenu from 'shared/components/SecondaryMenu.jsx';
import Neighborhood from 'Neighborhood';
import neighborhoodData from 'Neighborhood/neighborhoodData.json';
import Team from 'Team';
import teamData from 'Team/teamData.json';
import Availability from 'Availability';
import Press from 'Press';
import Gallery from 'Gallery';
import galleryData from 'Gallery/galleryData.json';
import Contact from 'Contact';
import Legal from 'Legal';
import Accessibility from 'Accessibility';

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
  black: '#101820',
  grayLight: '#E7E7E7',
  gray: '#B4BAC1',
  white: '#FFFFFF',
  gold: '#BB8A47',
  sansSerifThin: 'HelveticaNeueLTStd-UltLt',
  sansSerifThinItalic: 'HelveticaNeueLTStd-UltLt',
  sansSerifLight: 'HelveticaNeueLTStd-Lt',
  sansSerifLightItalic: 'HelveticaNeueLTStd-LtIt',
  sansSerifRegular: 'HelveticaNeueLTStd-Roman',
  sansSerifItalic: 'HelveticaNeueLTStd-It',
  sansSerifMedium: 'HelveticaNeueLTStd-Md',
  sansSerifMediumItalic: 'HelveticaNeueLTStd-MdIt',
  serifRoman: 'Austin-Roman',
  serifMedium: 'Austin-Medium',
  serifMediumItalic: 'Austin-Medium-Italic',
  headerHeight: '80',
  mobileMargin: '25',
  mobileColumn: '7.2822%',
  mobileGutter: '20',
  desktopMargin: '40',
  desktopColumn: '8.3125%',
  desktopGutter: '20'
};

const AppBody = styled.div`
  ${PageBody};
`;
const AppHeader = styled.div`
  ${PageHeader};
`;
const AppFooter = styled.div`
  ${PageFooter};
`;

class App extends Component {
  state = {
    isExpanded: false,
    pageColor: theme.white,
    scrollPath: null
  };

  // setScrollPath = path =>

  setPageColor = color => {
    this.setState(state => ({ pageColor: color }));
  };

  toggleExpand = () => {
    this.setState(state => ({ isExpanded: !state.isExpanded }));
  };

  render() {
    return (
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <AppBody pageColor={this.state.pageColor}>
            <AppHeader
              pageColor={this.state.pageColor}
              isExpanded={this.state.isExpanded}
            >
              <Header
                primaryData={primaryData}
                isExpanded={this.state.isExpanded}
                pageColor={this.state.pageColor}
              />
            </AppHeader>
            <main>
              <Router primary={false}>
                <Redirect from="/" to="home" noThrow />
                {primaryData.map((section, index) => (
                  <Primary
                    key={index}
                    default
                    path={section.slug + '/*'}
                    primaryData={primaryData}
                    isExpanded={this.state.isExpanded}
                    toggleExpand={this.toggleExpand}
                    setPageColor={this.setPageColor}
                    scrollPath={this.state.scrollPath}
                  />
                ))}
                <Redirect from="fairmont" to="fairmont/hotel" noThrow />
                <Neighborhood
                  neighborhoodData={neighborhoodData}
                  path="neighborhood"
                  setPageColor={this.setPageColor}
                />
                <Team
                  teamData={teamData}
                  path="team/*"
                  isExpanded={this.state.isExpanded}
                  toggleExpand={this.toggleExpand}
                  setPageColor={this.setPageColor}
                />
                <Redirect from="team" to={'team/' + teamData[0].slug} noThrow />
                <Availability
                  path="availability/*"
                  setPageColor={this.setPageColor}
                />
                <Redirect from="availability" to="availability/hotel" noThrow />
                <Press path="press" setPageColor={this.setPageColor} />
                <Gallery
                  galleryData={galleryData}
                  path="gallery"
                  setPageColor={this.setPageColor}
                />
                <SecondaryMenu
                  setPageColor={this.setPageColor}
                  path="continue"
                />
                <Legal path="legal" setPageColor={this.setPageColor} />
                <Contact path="contact" setPageColor={this.setPageColor} />
                <Accessibility
                  path="accessibility"
                  setPageColor={this.setPageColor}
                />
              </Router>
            </main>
            <AppFooter
              pageColor={this.state.pageColor}
              isExpanded={this.state.isExpanded}
            >
              <Footer
                pageColor={this.state.pageColor}
                isExpanded={this.state.isExpanded}
              />
            </AppFooter>
          </AppBody>
        </ThemeProvider>
      </ContextProvider>
    );
  }
}

export default App;
