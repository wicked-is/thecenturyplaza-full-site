import React, { useContext, useEffect } from "react";
import Context from "../../config/Context";
import { Link } from "@reach/router";
import styled from "styled-components";
import { mediaMin } from "shared/styled-components/MediaQueries.js";

const MainMenuContainer = styled.div`
  opacity: ${props => (props.navActive ? "1" : "0")};
  visibility: ${props => (props.navActive ? "visible" : "hidden")};
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  min-height: calc(100vh - 80px);
  z-index: 10000;
  text-indent: 0;
  color: ${props => props.theme.gray};

  a:hover {
    opacity: 0.5;
  }
`;

const LinksContainer = styled.nav`
  position: relative;
  width: 100%;
  padding: ${props => props.theme.headerHeight}px
    ${props => props.theme.mobileMargin}px
    ${props => props.theme.headerHeight}px;
  height: auto;
  min-height: 100vh;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.black};

  ${mediaMin.tabletLandscape`
    width: 70vw;
    padding: 120px 0 0 30vw;
    height: auto;
  `}
`;

const PrimaryLinks = styled.ul`
  display: inline-block;
  width: auto;
  height: auto;
  text-align: left;
  margin: 0 0 30px;
  padding: 0;

  li {
    display: block;
    margin: 0 0 10px;

    a {
      font-family: ${props => props.theme.serifRoman}, serif;
      font-weight: 300;
      font-size: 30px;
      line-height: 1.1em;
      letter-spacing: 0.05em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: antialiased;
      color: ${props => props.theme.gray};
      text-decoration: none;

      ${mediaMin.tablet`
         font-size: 40px;
      `}
    }
  }
`;

const SecondaryLinks = styled.ul`
  display: inline-block;
  width: auto;
  height: auto;
  text-align: left;
  margin: 0 0 30px;
  padding: 0;

  ${mediaMin.phoneXL`
    margin: 0 0 60px;
  `}

  ${mediaMin.desktop`
    margin: 0 0 30px;
  `}


  li {
    display: block;
    margin: 0 0 15px;

    a {
      font-family: ${props => props.theme.sansSerifThin};
      font-size: 24px;
      letter-spacing: 1.03px;
      color: ${props => props.theme.gray};
      text-decoration: none;
    }
  }
`;

const InfoCluster = styled.div`
  ${mediaMin.tabletLandscape`
    position: absolute;
    left: ${props => props.theme.desktopMargin}px;
    top: 125px;
 `}

  p {
    font-family: ${props => props.theme.sansSerifLight};
    line-height: 1.4em;
    letter-spacing: 0.05em;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    margin: 0 0 20px;

    strong {
      display: block;
      font-family: ${props => props.theme.sansSerifRegular};
      font-weight: 400;
      font-weight: normal;
    }

    a {
      color: ${props => props.theme.gray};
      &:hover {
        opacity: 0.5;
      }
    }
  }

  > a {
    display: inline-block;
    margin: 10px 0 30px;
    font-family: ${props => props.theme.sansSerifRegular};
    color: ${props => props.theme.gray};
    text-decoration: none;

    ${mediaMin.tabletLandscape`
      margin: 25px 0 0;
    `}
  }
`;

const DownloadsLinks = styled.ul`
  display: inline-block;
  text-align: left;
  margin: 0;
  padding: 0;

  ${mediaMin.tabletLandscape`
    position: absolute;
    left: ${props => props.theme.desktopMargin}px;
    top: 370px
 `}

  ${mediaMin.desktop`
    position: relative;
    left: auto;
    top: auto;
 `}


  li {
    font-family: ${props => props.theme.sansSerifRegular};
    display: block;
    margin: 0 0 5px;

    &:first-child {
      margin: 0 0 15px;
    }

    a {
      font-family: ${props => props.theme.sansSerifLight};
      letter-spacing: 0.6px;
      color: ${props => props.theme.gray};
      text-decoration: none;
    }
  }
`;

const FooterLinks = styled.ul`
  display: none;

  ${mediaMin.tabletLandscape`
    display: inline-block;
    position: absolute;
    bottom: 60px;
    right: 40px;
    margin: 0;
    padding: 0;
    list-style: none;
    transform: translateY(-90px);
      
    li {
      display: inline-block;
      margin: 0 0 0 20px;

      a {
        color: ${props => props.theme.gray};
        font-family: ${props => props.theme.sansSerifRegular}, sans-serif;
        font-weight: 300;
        font-size: 12px;
        line-height: 1.35em;
        letter-spacing: 0.03em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;

        text-decoration: none;
      }
    }
  `}
`;

const MainMenu = props => {
  const { primaryData } = props;
  const context = useContext(Context);
  const { navActive, toggleMenu } = context;

  return (
    <MainMenuContainer navActive={navActive}>
      <LinksContainer>
        <PrimaryLinks>
          {primaryData.map((section, index) => (
            <li key={index}>
              <Link
                to={"/" + section.slug + "/" + section.slides[0].slug}
                onClick={toggleMenu}
              >
                {section.title}
              </Link>
            </li>
          ))}
        </PrimaryLinks>
        <SecondaryLinks>
          <li>
            <Link to="/neighborhood" onClick={toggleMenu}>
              Neighborhood
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={toggleMenu}>
              Team
            </Link>
          </li>
          <li>
            <Link to="/availability" onClick={toggleMenu}>
              Availability
            </Link>
          </li>
          <li>
            <Link to="/press" onClick={toggleMenu}>
              Press
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={toggleMenu}>
              Gallery
            </Link>
          </li>
        </SecondaryLinks>
        <InfoCluster>
          <p>
            <strong>Sales Gallery</strong>
            <a
              href="https://www.google.com/maps/place/10250+Constellation+Blvd,+Century+City,+CA+90067/@34.0570794,-118.4196399,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2bb8d3cafffff:0x7165eaa7048208a8!8m2!3d34.0570794!4d-118.4174512"
              target="_blank"
              rel="noopener noreferrer"
            >
              10250 Consteallation Boulevard
              <br />
              Los Angeles, California 90067
            </a>
          </p>
          <p>
            <strong>Schedule an Appointment</strong>
            +1 310 246 4777
            <br />
            <a href="mailto:info@thecenturyplaza.com" rel="noopener noreferrer">
              info@thecenturyplaza.com
            </a>
          </p>
          <Link to="/contact" onClick={toggleMenu}>
            Register Your Interest
          </Link>
        </InfoCluster>
        <DownloadsLinks>
          <li>Downloads</li>
          <li>
            <a
              href={
                process.env.PUBLIC_URL +
                "/downloads/Century-Plaza-Newsletter-2017-Q2.pdf"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Brochure
            </a>
          </li>
          <li>
            <a
              href={
                process.env.PUBLIC_URL +
                "/downloads/Fairmont-Century-Plaza-Residences.pdf"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Hotel Fact Sheet
            </a>
          </li>
          <li>
            <a
              href={
                process.env.PUBLIC_URL +
                "/downloads/Century-Plaza_Tower-Residences.pdf"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Tower Fact Sheet
            </a>
          </li>
        </DownloadsLinks>
        <FooterLinks>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/broker-portal" onClick={toggleMenu}>
              Broker Portal
            </Link>
          </li>
          <li>
            <Link to="/legal" onClick={toggleMenu}>
              Legal
            </Link>
          </li>
          <li>
            <Link to="/accessibility" onClick={toggleMenu}>
              Accessibility
            </Link>
          </li>
        </FooterLinks>
      </LinksContainer>
    </MainMenuContainer>
  );
};
export default MainMenu;
