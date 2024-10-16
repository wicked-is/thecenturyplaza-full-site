import React, { useContext } from "react";
import Context from "../../config/Context";
import { Link } from "@reach/router";
import styled from "styled-components/macro";
import { mediaMin, mediaMax } from "shared/styled-components/MediaQueries.js";

import iconFB from "icons/social/icon-fb.svg";
import iconIG from "icons/social/icon-ig.svg";
import iconTW from "icons/social/icon-tw.svg";

const MainMenuWrapper = styled.div`
  opacity: ${(props) => (props.navActive ? "1" : "0")};
  visibility: ${(props) => (props.navActive ? "visible" : "hidden")};
  display: ${(props) => (props.navActive ? "flex" : "none")};
  flex-wrap: wrap;
  position: relative;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  z-index: ${(props) => (props.navActive ? "10000" : "0")};
  text-indent: 0;
  color: ${(props) => props.theme.gray};
  background: ${(props) => props.theme.black};
  z-index: 1000;

  a:hover {
    opacity: 0.5;
  }
`;

const LinksContainer = styled.nav`
  display: inline-block;
  position: relative;
  width: 100%;
  padding: 0 ${(props) => props.theme.mobileSideMargin}px;
  height: auto;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: calc(
    ${(props) => props.theme.mobilePortraitHeaderHeight}px + 20px
  );

  ${mediaMin.phoneXL`
    margin-top: calc(${(props) =>
      props.theme.mobileLandscapeHeaderHeight}px + 20px);
  `}
  ${mediaMin.tablet`
    margin-top: calc(${(props) => props.theme.desktopHeaderHeight}px + 20px);
  `}

  ${mediaMin.tabletLandscape`
    width: 70vw;
    padding: 0 0 0 30vw;
    margin-top: calc( ${(props) => props.theme.desktopHeaderHeight}px + 40px );
  `}

  ${mediaMin.desktop`
      margin-top: calc( ${(props) =>
        props.theme.desktopHeaderHeight}px + 80px );
  `}
`;

const PrimaryLinks = styled.ul`
  display: inline-block;
  width: auto;
  height: auto;
  text-align: left;
  margin: -5px 0 30px;
  padding: 0;

  li {
    display: block;
    margin: 0 0 10px;

    a {
      font-family: ${(props) => props.theme.serifRoman}, serif;
      font-weight: 300;
      font-size: 30px;
      line-height: 1.1em;
      letter-spacing: 0.05em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: antialiased;
      color: ${(props) => props.theme.gray};
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

  li {
    display: block;
    margin: 0 0 15px;

    a {
      font-family: ${(props) => props.theme.sansSerifThin};
      font-size: 24px;
      letter-spacing: 1.03px;
      color: ${(props) => props.theme.gray};
      text-decoration: none;
    }
  }
`;

const InfoCluster = styled.div`
  ${mediaMin.tabletLandscape`
    position: absolute;
    left: ${(props) => props.theme.desktopSideMargin}px;
    top: 0;
    .mobile{
      display: none;
    }
 `}

  p {
    font-family: ${(props) => props.theme.sansSerifLight};
    line-height: 1.4em;
    letter-spacing: 0.05em;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    margin: 20px 0 30px;
    &.margin-top-0 {
      ${mediaMin.tabletLandscape`
        margin-top: 0;
      `}
    }
    strong {
      display: block;
      font-family: ${(props) => props.theme.sansSerifRegular};
      font-weight: 400;
      font-weight: normal;
    }

    a {
      color: ${(props) => props.theme.gray};
      &:hover {
        opacity: 0.5;
      }
    }
  }

  > a {
    display: inline-block;
    margin: 10px 0;
    font-family: ${(props) => props.theme.sansSerifRegular};
    color: ${(props) => props.theme.gray};
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
    left: ${(props) => props.theme.desktopSideMargin}px;
    top: 245px
 `}

  ${mediaMin.desktop`
    position: relative;
    left: auto;
    top: auto;
    margin: 0 0 30px;
 `}


  li {
    font-family: ${(props) => props.theme.sansSerifRegular};
    display: block;
    margin: 0 0 0.25em;

    &:first-child {
      margin: 0 0 15px;
    }

    a {
      font-family: ${(props) => props.theme.sansSerifLight};
      letter-spacing: 0.6px;
      line-height: 1.35em;
      color: ${(props) => props.theme.gray};
      text-decoration: none;
    }
  }
`;

const FooterLinks = styled.ul`
  display: inline-block;
  margin: 30px ${(props) => props.theme.mobileSideMargin}px;
  padding: 0;
  list-style: none;
  width: 100%;

  ${mediaMin.tabletLandscape`
    margin: 0;
    position: fixed;
    bottom: 30px;
    right: 40px;
    width: auto;
  `}

  li {
    display: block;
    margin: 0 0 0.25em;

    ${mediaMin.tabletLandscape`
      display: inline-block;
      margin: 0 0 0 20px;
    `}
    &.mobile-only {
      ${mediaMin.tabletLandscape`
        display: none;
      `}
    }

    a {
      color: ${(props) => props.theme.gray};
      font-family: ${(props) => props.theme.sansSerifRegular}, sans-serif;
      font-weight: 300;
      font-size: 14px;
      line-height: 1.35em;
      letter-spacing: 0.03em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: antialiased;
      text-decoration: none;

      ${mediaMin.tabletLandscape`
        font-size: 12px;
      `}
    }
  }
`;

const SocialIcon = styled.li`
  position: relative;
  width: 20px;
  height: 17px;

  ${mediaMax.tabletLandscape`
    height: 32px;
    display: inline-block !important;
    margin-right: 12px !important;
  `}

  a {
    display: block;
    position: absolute;
    top: 15%;
    left: 0;
  }
  img {
    width: 20px;
  }
`;

const MainMenu = (props) => {
  const { primaryData } = props;
  const context = useContext(Context);
  const { navActive, toggleMenu, setReturnPath } = context;

  const declareReturnPath = () => {
    toggleMenu();
    setReturnPath(window.location.pathname);
  };

  return (
    <MainMenuWrapper navActive={navActive}>
      <LinksContainer>
        <SecondaryLinks>
          <li>
            <Link to={"/"} onClick={toggleMenu}>
              Century Plaza
            </Link>
          </li>
          {primaryData.slice(1).map((section, index) => {
            if (section.slug === "fairmont/residences") return null;
            return (
              <li key={index}>
                <Link
                  to={"/" + section.slug + "/" + section.slides[0].slug}
                  onClick={toggleMenu}
                >
                  {section.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/neighborhood" onClick={toggleMenu}>
              Neighborhood
            </Link>
          </li>
          {/* <li>
            <Link to="/team" onClick={toggleMenu}>
              Team
            </Link>
          </li> */}
          {/* <li>
            <Link to="/availability/hotel" onClick={toggleMenu}>
              Fairmont Availability
            </Link>
          </li> */}
          {/* <li>
            <Link to="/availability/park-elm" onClick={toggleMenu}>
              Park Elm Availability
            </Link>
          </li> */}
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
          <Link to="/contact" onClick={declareReturnPath} className="mobile">
            Register Your Interest
          </Link>
          <p className="margin-top-0">
            <strong>Sales Gallery</strong>
            <a
              href="https://goo.gl/maps/vcBc5iq8PTft8RVC8"
              target="_blank"
              rel="noopener noreferrer"
            >
              2025 Avenue of the Stars
              <br />
              Los Angeles, CA 90067
            </a>
          </p>
          <p>
            <strong>Schedule an Appointment</strong>
            <span class="InfinityNumber clickable">3109221124</span>
            <br />
            <a href="mailto:info@thecenturyplaza.com" rel="noopener noreferrer">
              info@thecenturyplaza.com
            </a>
          </p>
        </InfoCluster>
        {/* <DownloadsLinks>
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
                "/downloads/Fairmont_Century_Plaza_Residences.pdf"
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
        </DownloadsLinks> */}
      </LinksContainer>
      <FooterLinks>
        <SocialIcon>
          <a
            href="https://www.instagram.com/thecenturyplaza/"
            target="_blank"
            title="Instagram"
            rel="noopener noreferrer"
          >
            <img src={iconIG} alt="Instagram" />
          </a>
        </SocialIcon>
        <SocialIcon>
          <a
            href="https://www.facebook.com/thecenturyplaza/"
            target="_blank"
            title="Facbook"
            rel="noopener noreferrer"
          >
            <img src={iconFB} alt="Facebook" />
          </a>
        </SocialIcon>
        <SocialIcon>
          <a
            href="https://twitter.com/thecenturyplaza"
            target="_blank"
            title="Twitter"
            rel="noopener noreferrer"
          >
            <img src={iconTW} alt="Twitter" />
          </a>
        </SocialIcon>
        <li className="mobile-only">
          <Link to="/contact" onClick={declareReturnPath}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/availability/park-elm" onClick={declareReturnPath}>
            Availability
          </Link>
        </li>
        <li>
          <Link onClick={declareReturnPath} to="/broker-portal">
            Broker Portal
          </Link>
        </li>
        <li>
          <Link to="/legal" onClick={declareReturnPath}>
            Legal
          </Link>
        </li>
        <li>
          <Link to="/accessibility" onClick={declareReturnPath}>
            Accessibility
          </Link>
        </li>
      </FooterLinks>
    </MainMenuWrapper>
  );
};
export default MainMenu;
