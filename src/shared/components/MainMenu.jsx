import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
// import Footer from "shared/components/Footer.jsx";

const MainMenuContainer = styled.div`
  opacity: ${props => (props.navActive ? "1" : "0")};
  visibility: ${props => (props.navActive ? "visible" : "hidden")};
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: ${props => props.theme.black};
  text-indent: 0;
  color: ${props => props.theme.gray};

  a:hover {
    opacity: 0.5;
  }
`;

const LinksContainer = styled.nav`
  position: relative;
  width: 70vw;
  margin: 80px 0 0 30vw;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
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
      font-size: 40px;
      line-height: 1.1em;
      letter-spacing: 0.05em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: antialiased;
      color: ${props => props.theme.gray};
      text-decoration: none;
    }
  }
`;

const SecondaryLinks = styled.ul`
  display: inline-block;
  width: auto;
  height: auto;
  text-align: left;
  margin: 0 0 60px;
  padding: 0;
  z-index: 100000;
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
  position: absolute;
  left: calc(-30vw + 40px);
  top: 0;

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
    margin: 30px 0 0;
    font-family: ${props => props.theme.sansSerifRegular};
    color: ${props => props.theme.gray};
    text-decoration: none;
  }
`;

const DownloadsLinks = styled.ul`
  position: absolute;
  left: calc(-30vw + 40px);
  bottom: 30px;
  width: auto;
  height: auto;
  text-align: left;
  margin: 0;
  padding: 0;

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

  @media screen and (min-height: 700px) {
    display: inline-block;
    position: relative;
    left: auto;
    bottom: auto;
  }
`;

const MainMenu = props => {
  const { primaryData, navActive, toggleMenu } = props;

  return (
    <>
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
              <a
                href="mailto:info@thecenturyplaza.com"
                rel="noopener noreferrer"
              >
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
        </LinksContainer>
      </MainMenuContainer>
    </>
  );
};
export default MainMenu;
