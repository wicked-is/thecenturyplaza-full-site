import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import hamburgerBlackPNG from "icons/hamburger-black.png";
import hamburgerBlackSVG from "icons/hamburger-black.svg";
import hamburgerGrayPNG from "icons/hamburger-gray.png";
import hamburgerGraySVG from "icons/hamburger-gray.svg";
import closeGrayPNG from "icons/close-gray.png";
import closeGraySVG from "icons/close-gray.svg";
import logoGrayPNG from 'icons/logo-gray.png';
import logoGraySVG from 'icons/logo-gray.svg';

const MainMenuOpen = styled.button`
  position: absolute;
  right: 40px;
  top: 25px;
  display: inline-block;
  width: 25px;
  height: 16px;
  overflow: hidden;
  border: 0;
  text-indent: -99999px;
  background: url(${hamburgerBlackPNG}) no-repeat center center;
  background: url(${hamburgerBlackSVG}) no-repeat center center, none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  opacity: ${props => props.isExpanded ? "0" : "1"}; 
  
  &:hover {
    background: url(${hamburgerGrayPNG}) no-repeat center center;
    background: url(${hamburgerGraySVG}) no-repeat center center, none;
  }

  &:focus {
    outline: none;
  }
`

const MainMenuClose = styled.button`
  position: absolute;
  right: 40px;
  top: 25px;
  display: inline-block;
  width: 25px;
  height: 16px;
  overflow: hidden;
  border: 0;
  text-indent: -99999px;
  background: url(${closeGrayPNG}) no-repeat center center;
  background: url(${closeGraySVG}) no-repeat center center, none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`

const MainMenuContainer = styled.div`
  display: ${props => props.isOpen ? "flex" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.black};
  z-index: ${props => props.isExpanded ? "0" : "1000"};
  text-indent: 0;
  color: ${props => props.theme.gray};

  a:hover {
    opacity: 0.5;
  }
`

const Logo = styled.div`
  position: absolute;
  left: 40px;
  top: 25px;
  display: inline-block;
  width: 250px;
  height: 17px;
  background: url(${logoGrayPNG}) no-repeat center center;
  background: url(${logoGraySVG}) no-repeat center center, none;
`

const LinksContainer = styled.nav`
  position: relative;
  width: 400px;
  margin: 0 0 100px 35vw;
  align-self: flex-end;
`

const PrimaryLinks = styled.ul`
  display: inline-block;
  width: 100%;
  height: auto;
  text-align: left;
  margin: 0 0 30px;
  padding: 0;

  li {
    display: block;
    margin: 0 0 10px;

    a {
      font-family: ${props => props.theme.serifLight};
      font-size: 40px;
      letter-spacing: 1.5px;
      color: ${props => props.theme.gray};
      text-decoration: none;
    }
  }
`

const SecondaryLinks = styled.ul`
  display: inline-block;
  width: 100%;
  height: auto;
  text-align: left;
  margin: 0 0 60px;
  padding: 0;

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
`

const InfoCluster = styled.div`
  position: absolute;
  left: calc(-35vw + 40px);
  top: 0;

  p {
    font-family: ${props => props.theme.sansSerifLight};
    line-height: 1.4em;
    margin: 0 0 20px;

    strong {
      display: block;
      font-family: ${props => props.theme.sansSerifRegular};
      font-weight: normal;
    }

    a {
      color: ${props => props.theme.gray};
    }
  }

  > a {
    display: inline-block;
    margin: 30px 0 0;
    font-family: ${props => props.theme.sansSerifRegular};
    color: ${props => props.theme.gray};
    text-decoration: none;
  }
`

const DownloadsLinks = styled.ul`
  display: inline-block;
  width: 100%;
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
`

const MainMenu = props => {
  const { isExpanded, primaryData } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <MainMenuContainer isOpen={isOpen} >
        <Link to="/" onClick={() => setIsOpen(false)}><Logo /></Link>
        <MainMenuClose onClick={() => setIsOpen(false)}>
          Toggle Main Menu
        </MainMenuClose>
        <LinksContainer>
          <PrimaryLinks>
            {primaryData.map((section, index) => (
              <li key={index}><Link to={"/" + section.slug + "/" + section.slides[0].slug} onClick={() => setIsOpen(false)}>{section.title}</Link></li>
            ))}
          </PrimaryLinks>
          <SecondaryLinks>
            <li>
              <Link to="/neighborhood" onClick={() => setIsOpen(false)}>Neighborhood</Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setIsOpen(false)}>Team</Link>
            </li>
            <li>
              <a href="https://www.thecenturyplaza.com/availability/?hotel" target="_blank" onClick={() => setIsOpen(false)}>Availability</a>
            </li>
            <li>
              <Link to="/press" onClick={() => setIsOpen(false)}>Press</Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
            </li>
          </SecondaryLinks>
          <InfoCluster>
            <p>
              <strong>Sales Gallery</strong>
              10250 Consteallation Boulevard<br />
              Los Angeles, California 90067
            </p>
            <p>
              <strong>Schedule an Appointment</strong>
              +1 310 246 4777<br />
              <a href="mailto:info@thecenturyplaza.com" >info@thecenturyplaza.com</a>
            </p>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Register Your Interest</Link>
          </InfoCluster>
          <DownloadsLinks>
            <li>Downloads</li>
            <li>
              <a href={process.env.PUBLIC_URL + '/downloads/placeholder.pdf'} target="_blank" rel="noopener noreferrer">Brochure</a>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL + '/downloads/placeholder.pdf'} target="_blank" rel="noopener noreferrer">Hotel Fact Sheet</a>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL + '/downloads/placeholder.pdf'} target="_blank" rel="noopener noreferrer">Tower Fact Sheet</a>
            </li>
          </DownloadsLinks>
        </LinksContainer>
      </MainMenuContainer>
      <MainMenuOpen isExpanded={isExpanded} onClick={() => setIsOpen(true)}>
        Open Main Menu
      </MainMenuOpen>
    </React.Fragment>
  );
};
export default MainMenu;
