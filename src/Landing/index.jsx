import React, { useState } from "react";
import { Link } from "@reach/router";
import ReactPlayer from "react-player";
import Select from "react-select";
import Fade from "react-reveal/Fade";
import { scroller } from "react-scroll";
import $ from "jquery";
import styled from "styled-components/macro";
import ResponsiveImage from "../shared/components/ResponsiveImage";
import { countryMap } from "../Contact/countries";
import { mediaMin } from "../shared/styled-components/MediaQueries";
import CPLogo from "icons/logo-black-with-sub.svg";
import playBtnSVG from "icons/play-btn.svg";

import iconFB from 'icons/social/icon-fb.svg';
import iconIG from 'icons/social/icon-ig.svg';
import iconTW from 'icons/social/icon-tw.svg';

const LandingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px auto 20px;
  padding: 0 16px 80px;
  max-width: 1400px;

  ${mediaMin.tablet`
    padding: 0 20px 156px;
  `}
`;

const LogoLink = styled(Link)`
  max-width: 264px;
  width: 100%;
  margin-bottom: 40px;
  cursor: pointer;
  ${mediaMin.tablet`
    max-width: 320px;
  `}
`;

const Logo = styled.img`
  width: 100%;
`;

const LandingHeader = styled.h2`
  font-family: ${(props) => props.theme.serifRoman}, sans-serif;
  color: #101830;
  letter-spacing: 0;
  font-size: 20px;
  line-height: 26px;
  margin: 0 0 24px;
  text-align: center;
  white-space: nowrap;

  ${mediaMin.tablet`
    font-size: 34px;
    line-height: 40px;
    letter-spacing: 1.28px;
  `}
  ${mediaMin.phoneLarge`
    font-size: 24px;
    line-height: 30px;
  `}
`;

const LandingSubhead = styled.p`
  font-family: ${(props) => props.theme.sansSerifLight}, sans-serif;
  color: #101830;
  letter-spacing: 1px;
  font-size: 14px;
  line-height: 22px;
  margin: 0 0 32px;
  text-align: center;
  text-transform: uppercase;

  ${mediaMin.phone`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1.28px;
  `}
`;

const ContactScrollButton = styled.div`
  display: inline-flex;
  font-family: ${(props) => props.theme.sansSerifRegular}, sans-serif;
  color: #101830;
  letter-spacing: 0.14px;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 14px;
  margin: 0 0 16px;
  padding: 12px 14px;
  border: 1px solid #101820;
  background: none;
  outline: none;
  cursor: pointer;
`;

const ContactCallButton = styled.div`
  margin: 0 0 32px;
  color: #ffffff;

  a {
    font-family: ${(props) => props.theme.sansSerifLight}, sans-serif;
    color: #101830;
    letter-spacing: 0.02px;
    font-size: 14px;
    line-height: 18px;

    ${mediaMin.tablet`
      font-size: 22px;
      line-height: 30px;
    `}
    ${mediaMin.phoneLarge`
      font-size: 16px;
      line-height: 18px;
    `}
  }
`;

const LandingText = styled.p`
  font-family: ${(props) => props.theme.sansSerifLight}, sans-serif;
  color: #101830;
  letter-spacing: 0.02px;
  font-size: 22px;
  line-height: 30px;
  margin: 0 0 32px;
  text-align: center;
  max-width: 800px;
`;

const LandingStrongText = styled.strong`
  font-family: ${(props) => props.theme.sansSerifRegular}, sans-serif;
  color: #101830;
  letter-spacing: 0.96px;
  font-size: 12px;
  line-height: 24px;
  margin: 0 0 64px;
  text-transform: uppercase;
  text-align: center;
`;

const Placeholder = styled.div`
  display: "inline-block";
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12vw;
    height: 12vw;
    margin: -6.05vw 0 0 -6vw;
    background: url(${playBtnSVG}) no-repeat center center;
    background-size: contain;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContactForm = styled.form`
  opacity: ${(props) => (props.formVisible ? "1" : "0")};
  visibility: ${(props) => (props.formVisible ? "visible" : "hidden")};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin-bottom: 64px;
  width: 100%;

  font-family: ${(props) => props.theme.sansSerifThin};
  line-height: 1.4em;
  letter-spacing: 0.1em;
  font-weight: 300;

  h3 {
    font-family: ${(props) => props.theme.sansSerifRegular};
    font-weight: 400;
    margin: 0 0 20px;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 38px;

  .react-select-container {
    width: 25%;
    &.half-width {
      width: 50%;
    }
    .react-select__placeholder {
      font-family: ${(props) => props.theme.sansSerifRegular};
      font-size: 14px;
      line-height: 14px;
      font-weight: 300;
      color: ${(props) => props.theme.black};

      ${mediaMin.tablet`
        font-size: 18px;
        line-height: 18px;
      `}
    }
    .react-select__indicator-separator {
      display: none;
    }
    .react-select__control,
    .react-select__menu,
    .react-select__menu-list {
      border-radius: 0;
      border: none;
      background-color: white;
      color: ${(props) => props.theme.black};
      border: 1px solid ${(props) => props.theme.black};
      box-shadow: 0 0 0 transparent;
      font-family: ${(props) => props.theme.sansSerifRegular};
      font-weight: 300;
      font-size: 16px;
      line-height: 14px;

      ${mediaMin.tablet`
        font-size: 18px;
        line-height: 18px;
      `}
    }

    .react-select__control {
      height: 100%;
    }

    .react-select__menu-list {
      border: 0;
      display: block;
    }

    .react-select__menu {
      position: initial;
      z-index: 20000;
      display: block;
      margin-bottom: 81px;
      ${mediaMin.tabletLandscape`
        position: absolute;
      `}
    }

    .react-select__indicator {
      svg {
        fill: ${(props) => props.theme.black};
        stroke: ${(props) => props.theme.black};
      }
    }
  }
  .select-full {
    width: 100%;
    .react-select__control,
    .react-select__menu,
    .react-select__menu-list {
      border: none;
      border: 1px solid ${(props) => (props.error ? "red" : props.theme.black)};
    }
    .react-select__menu-list {
      border: 0;
    }
  }
`;

const TextInput = styled.input`
  background-color: transparent;
  color: ${(props) => props.theme.black};
  border: ${(props) =>
    props.error ? "1px solid red" : "1px solid " + props.theme.black + ""};
  padding: 14px 16px;
  box-sizing: border-box;
  letter-spacing: 0px;
  font-family: ${(props) => props.theme.sansSerifRegular};
  font-size: 14px;
  line-height: 14px;
  width: ${(props) => {
    if (props.halfWidth) return "calc(50% - 6px)";
    if (props.quarterWidth) return "25%";
    return "100%";
  }};
  margin: 0 12px;
  border-radius: 0;

  ${mediaMin.tablet`
    font-size: 18px;
    line-height: 18px;
  `}

  ::placeholder {
    color: ${(props) => props.theme.black};
    font-weight: 300;
    font-family: ${(props) => props.theme.sansSerifRegular};
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
    margin-left: 0;
  }

  &:focus {
    outline: none;
    colors: white;
    border: ${(props) => (props.error ? "1px solid red" : "1px solid black")};
    background-color: transparent;
  }
`;

const TextInputPot = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
`;

const RadioInput = styled.label`
  display: flex;
  align-items: center;
  border: 0;
  box-sizing: border-box;
  margin: 0 10px;
  width: 50%;
  color: ${(props) => props.theme.black};
  letter-spacing: 0px;
  cursor: pointer;
  font-weight: 300;
  font-family: ${(props) => props.theme.sansSerifRegular};
  font-size: 14px;
  line-height: 14px;

  ${mediaMin.tablet`
    font-size: 18px;
    line-height: 18px;
  `}
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  input {
    margin-right: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    position: relative;
    background-color: transparent;
    color: ${(props) => props.theme.black};
    height: 36px;
    width: 36px;
    border: 0;
    cursor: pointer;
    outline: none;
    border: 1px solid ${(props) => props.theme.black};
    border-radius: 0;
    ::placeholder {
      color: ${(props) => props.theme.black};
      font-weight: 300;
      font-family: ${(props) => props.theme.sansSerifRegular};
    }

    &:checked {
      background-color: transparent;
      border-radius: 0;
      &::before {
        color: ${(props) => props.theme.black};
        position: absolute;
        font: 22px / 1 "Open Sans", sans-serif;
        font-weight: 600;
        left: 10px;
        top: 5px;
        content: "\\02143";
        transform: rotate(40deg);
      }
    }
  }
`;

const SubmitButton = styled.button`
  background: none;
  background-color: transparent;
  color: ${(props) => props.theme.black};
  border: ${(props) => `1px solid ${props.theme.black}`};
  padding: 12px 8px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-align: center;
  font-family: ${(props) => props.theme.sansSerifRegular};
  line-height: 14px;
  letter-spacing: 0.14px;
  font-weight: 300;
  margin: 0 auto;
  width: 100%;
  ${mediaMin.tabletLandscape`
    max-width: 360px;
  `}
`;

const InfoCluster = styled.div`
  p {
    font-family: ${(props) => props.theme.sansSerifLight};
    line-height: 30px;
    font-size: 22px;
    letter-spacing: 0.05em;
    font-weight: 300;
    margin: 0 0 20px;
    text-align: center;
    margin: 0 0 36px;
    color: ${(props) => props.theme.black};

    strong {
      display: block;
      font-family: ${(props) => props.theme.sansSerifMedium};
      line-height: 24px;
      font-size: 12px;
      font-weight: 400;
      font-weight: normal;
      letter-spacing: 0.96px;
      text-transform: uppercase;
      font-size: 12px;
      margin: 0 0 16px;
    }

    a {
      font-size: 22px;
      color: ${(props) => props.theme.black};
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

const ContactSuccess = styled.form`
  opacity: ${(props) => (props.confirmationVisible ? "1" : "0")};
  visibility: ${(props) => (props.confirmationVisible ? "visible" : "hidden")};
  transition: opacity 0.25s ease, visibility 0.25s ease;
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    font-family: ${(props) => props.theme.sansSerifLight};
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.02px;
    font-weight: 300;
    margin: 0 0 40px;
    color: ${(props) => props.theme.black};
    text-align: center;
  }

  a {
    color: ${(props) => props.theme.black};

    &:hover {
      opacity: 0.5;
    }
  }
`;

const FormConfirmationWrapper = styled.div`
  height: ${(props) => (props.confirmationMounted && "650px") || "auto"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const LandingFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 32px);
  height: 40px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0 16px;
  background: #101820 0% 0% no-repeat padding-box;

  ${mediaMin.tablet`
    padding: 0 20px;
    width: calc(100% - 40px);
  `}
  a {
    font-family: ${(props) => props.theme.sansSerifLight}, sans-serif;
    color: #ffffff;
    letter-spacing: 0.02px;
    font-size: 14px;
    line-height: 18px;

    ${mediaMin.tablet`
      font-size: 22px;
      line-height: 30px;
    `}
    ${mediaMin.phoneLarge`
      font-size: 16px;
      line-height: 18px;
    `}
    &:nth-child(1) {
      margin-right: 10px;

      ${mediaMin.phoneLarge`
        margin-right: 40px;
      `}
    }
  }
`;

const MainPageLink = styled(Link)`
  font-family: ${(props) => props.theme.sansSerifRegular}, sans-serif;
  color: #101830;
  letter-spacing: 0.14px;
  font-size: 14px;
  line-height: 14px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid black;
`;

const LandingMedia = styled.div`
  margin: 0 0 40px;
  width: 100%;
  padding-bottom: 56.27%;
  position: relative;
  /*

  ${mediaMin.phoneXL`
    margin: 0 10px 20px 10px;
    width: ${(props) =>
      props.type === "video" ? "calc(66.666% - 20px)" : "calc(33.333% - 20px)"};
    height: ${(props) =>
      props.type === "video" ? "calc(36vw - 20px)" : "calc(18vw - 20px)"};
  `}

  ${mediaMin.tabletLandscape`
    margin: 0 0 20px 20px;
  `}
*/

  .react-reveal {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;

    @supports (object-fit: cover) {
      display: inline-block;
      background: transparent;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    @supports (object-fit: cover) {
      object-fit: cover;
    }
  }

  &[type="video"]
    + [type="image"]
    + [type="image"]
    + [type="image"]
    + [type="image"]
    + [type="image"] {
    ${mediaMin.phoneXL`
      transform: translateX(200%) translateX(40px);
      margin-top: -36vw;
    `}
  }
`;

const SocialIconsSection = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: row;
`;

const SocialIcon = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 8px;
  a:hover {
    opacity: 0.5;
  }
  img {
    filter: invert(100%);
    width: 20px;
  }
`;

const Landing = ({ landingData }) => {
  const [formVisible, setFormVisible] = useState(true);
  const [formMounted, setFormMounted] = useState(true);
  const [videoState, setVideoState] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [confirmationMounted, setConfirmationMounted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    firstNamexggltw: "",
    lastNamexggltw: "",
    emailxggltw: "",
    phonexggltw: "",
    agent: false,
    address: "",
    city: "",
    country: "",
    state: "",
    zip: "",
    agencyName: "",
    agencyPhone: "",
    agencyAddress: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    agencyName: false,
  });

  const checkForErrors = () => {
    const newErrors = {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      agencyName: false,
    };
    if (!formData.firstName && !formData.firstNamexggltw) newErrors.firstName = true;
    if (!formData.lastName && !formData.lastNamexggltw) newErrors.lastName = true;
    if (!formData.email && !formData.emailxggltw) newErrors.email = true;
    if (!formData.phone && !formData.phonexggltw) newErrors.phone = true;
    if (JSON.parse(formData.agent)) {
      if (!formData.agencyName) newErrors.agencyName = true;
    }
    setFormErrors(newErrors);
    return Object.values(newErrors).some((el) => el);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelect = (e) => {
    const { name, value } = e;
    setFormData({ ...formData, [name]: value });
  };

  const parseFormData = () => {
    return {
      projectname: "thecenturyplaza",
      data: {
        FollowupCode: "E",
        Source: "Website",
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Email: formData.email,
        Phone: formData.phone,
        FirstNamexggltw: formData.firstNamexggltw,
        LastNamexggltw: formData.lastNamexggltw,
        Emailxggltw: formData.emailxggltw,
        Phonexggltw: formData.phonexggltw,
        StreetAddress: formData.address,
        City: formData.city,
        Country: formData.country,
        State: formData.state,
        Zip: formData.zip,
        WorkStreetAddress: formData.agencyAddress,
        WorkName: formData.agencyName,
        WorkPhone: formData.agencyPhone,
        WorkZip: formData.zip,
      },
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkForErrors()) {
      $.ajax({
        url: "https://form.api.dbxd.com/post-buildercms-form/",
        type: "POST",
        dataType: "json",
        data: parseFormData(),
        crossDomain: true,
        success: (/* res  textStatus, jqXHR */) => {
          console.log("success - form submitted");
          showSuccess();
        },
        error: (jqXHR, textStatus, errorThrown) => {
          console.log("http request failed", errorThrown);
        },
      });
    }
  };

  const showSuccess = () => {
    setFormVisible(false);
    setTimeout(() => {
      setFormMounted(false);
      setConfirmationMounted(true);
    }, 500);
    setTimeout(() => {
      setConfirmationVisible(true);
    }, 1000);
  };

  const showVideo = () => {
    setVideoState(true);
  };

  const executeScroll = () => {
    scroller.scrollTo("contact-form", {
      duration: 700,
      delay: 0,
      smooth: "easeInOutQuad",
    });
  };
  return (
    <LandingSection>
      <LogoLink to="/">
        <Logo src={CPLogo} alt="century plaza logo" />
      </LogoLink>
      <LandingHeader>
        The Premier Destination <br /> for Luxury Living, Shopping and Dining
      </LandingHeader>
      <LandingSubhead>
        Fairmont Century Plaza Residences Move In Ready
        <br />
        Tower Estate Residences Move In Ready
      </LandingSubhead>
      <ContactScrollButton onClick={executeScroll}>
        Schedule a Private Appointment
      </ContactScrollButton>
      <ContactCallButton>
        <span class="InfinityNumber clickable">3102464777</span>
      </ContactCallButton>
      <LandingMedia type={landingData.media[0].type}>
        <Fade>
          <React.Fragment>
            <ResponsiveImage srcPath={landingData.media[0].placeholder} />
            {/* {!videoState && (
              <Placeholder onClick={showVideo}>
                <ResponsiveImage srcPath={landingData.media[0].placeholder} />
              </Placeholder>
            )}
            {videoState && (
              <ReactPlayer
                url={landingData.media[0].source}
                preload="true"
                controls
                playsinline
                width="100%"
                height="100%"
                playing={videoState}
                style={{ display: videoState ? "inline-flex" : "none" }}
                config={{
                  vimeo: {
                    playerVars: { transparent: true },
                  },
                }}
              />
            )} */}
          </React.Fragment>
        </Fade>
      </LandingMedia>
      <LandingText>
        Ascending 44 stories into the sky above Century City in Los Angeles, are
        two glass residential condominium towers masterfully designed by
        world-renowned architects, Pei Cobb Freed & Partners, and the newly
        re-envisioned Fairmont Century Plaza Hotel and Residences—all anchored
        by over six acres of landscaped gardens, premier shopping, and
        world-class dining.
      </LandingText>
      <LandingStrongText>
        Fairmont Century Plaza Hotel Residences starting at $2.2m
        <br />
        The Tower Residences at Century Plaza starting at $1.7m
      </LandingStrongText>
      <ContactContainer className={"contact-form"}>
        {formMounted && (
          <>
            <ContactForm onSubmit={handleSubmit} formVisible={formVisible}>
              <LandingHeader>Schedule a Private Appointment</LandingHeader>
              {/* H o n e y p o t */}
              <TextInputPot
                halfWidth
                placeholder="First Name*"
                name="firstName"
                onChange={handleInput}
              />
              <TextInputPot
                halfWidth
                placeholder="Last Name*"
                name="lastName"
                onChange={handleInput}
              />
              <TextInputPot
                placeholder="Email*"
                name="email"
                onChange={handleInput}
              />
              <TextInputPot
                placeholder="Phone*"
                name="phone"
                onChange={handleInput}
              />
              {/* Real form */}
              <FormRow>
                <TextInput
                  halfWidth
                  placeholder="First Name*"
                  name="firstNamexggltw"
                  onChange={handleInput}
                  error={formErrors.firstName}
                />
                <TextInput
                  halfWidth
                  placeholder="Last Name*"
                  name="lastNamexggltw"
                  onChange={handleInput}
                  error={formErrors.lastName}
                />
              </FormRow>
              <FormRow>
                <TextInput
                  placeholder="Email*"
                  name="emailxggltw"
                  onChange={handleInput}
                  error={formErrors.email}
                />
              </FormRow>
              <FormRow>
                <TextInput
                  placeholder="Phone*"
                  name="phonexggltw"
                  onChange={handleInput}
                  error={formErrors.phone}
                />
              </FormRow>
              <FormRow>
                <RadioInput htmlFor="radio-1">
                  <input
                    defaultChecked
                    id="radio-1"
                    type="radio"
                    name="agent"
                    value={false}
                    onChange={handleInput}
                  />
                  Future Resident
                </RadioInput>
                <RadioInput htmlFor="radio-2">
                  <input
                    id="radio-2"
                    type="radio"
                    name="agent"
                    value={true}
                    onChange={handleInput}
                  />
                  Sales Agent
                </RadioInput>
              </FormRow>
              {!JSON.parse(formData.agent) && (
                <>
                  <FormRow>
                    <TextInput
                      placeholder="Address"
                      name="address"
                      onChange={handleInput}
                    />
                  </FormRow>
                  <FormRow>
                    <TextInput
                      halfWidth
                      placeholder="City"
                      name="city"
                      onChange={handleInput}
                    />
                    <TextInput
                      halfWidth
                      placeholder="State/Province"
                      name="state"
                      onChange={handleInput}
                    />
                  </FormRow>
                  <FormRow>
                    <TextInput
                      halfWidth
                      placeholder="Zip"
                      name="zip"
                      onChange={handleInput}
                    />
                    <Select
                      halfWidth
                      name="country"
                      className="react-select-container half-width"
                      classNamePrefix="react-select"
                      placeholder="Country"
                      onChange={handleSelect}
                      options={countryMap}
                    />
                  </FormRow>
                </>
              )}
              {JSON.parse(formData.agent) && (
                <>
                  <FormRow>
                    <TextInput
                      placeholder="Agency Name*"
                      name="agencyName"
                      onChange={handleInput}
                      error={formErrors.agencyName}
                    />
                  </FormRow>
                  <FormRow>
                    <TextInput
                      placeholder="Agency Phone"
                      name="agencyPhone"
                      onChange={handleInput}
                    />
                  </FormRow>
                  <FormRow>
                    <TextInput
                      placeholder="Agency Address"
                      name="agencyAddress"
                      onChange={handleInput}
                    />
                  </FormRow>
                  <FormRow>
                    <TextInput
                      halfWidth
                      placeholder="City"
                      name="city"
                      onChange={handleInput}
                    />
                    <TextInput
                      halfWidth
                      placeholder="State/Province"
                      name="state"
                      onChange={handleInput}
                    />
                  </FormRow>
                  <FormRow>
                    <TextInput
                      halfWidth
                      placeholder="Zip"
                      name="zip"
                      onChange={handleInput}
                    />
                    <Select
                      halfWidth
                      name="country"
                      className="react-select-container half-width"
                      classNamePrefix="react-select"
                      placeholder="Country"
                      onChange={handleSelect}
                      options={countryMap}
                    />
                  </FormRow>
                </>
              )}
              <SubmitButton type="submit">SUBMIT</SubmitButton>
            </ContactForm>
            <InfoCluster>
              <p>
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
            </InfoCluster>
          </>
        )}
        <SocialIconsSection>
          <SocialIcon>
            <a href="https://www.instagram.com/thecenturyplaza/" target="_blank" title="Instagram" rel="noopener noreferrer">
              <img src={iconIG} alt="Instagram" />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="https://www.facebook.com/thecenturyplaza/" target="_blank" title="Facbook" rel="noopener noreferrer">
              <img src={iconFB} alt="Facebook" />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="https://twitter.com/thecenturyplaza" target="_blank" title="Twitter" rel="noopener noreferrer">
              <img src={iconTW} alt="Twitter" />
            </a>
          </SocialIcon>
        </SocialIconsSection>
        <FormConfirmationWrapper confirmationMounted={confirmationMounted}>
          {confirmationMounted && (
            <ContactSuccess confirmationVisible={confirmationVisible}>
              <p>
                Thank you for your interest!
                <br />A representative from our team will reach out to you soon.
              </p>
            </ContactSuccess>
          )}
          <MainPageLink to="/">CONTINUE TO MAIN SITE</MainPageLink>
        </FormConfirmationWrapper>
      </ContactContainer>
      <LandingFooter>
        <span class="InfinityNumber clickable">3102464777</span>
        {/* <a href="tel:310 246 4777">310 246 4777</a> */}
        <a href="mailto:info@thecenturyplaza.com">info@thecenturyplaza.com</a>
      </LandingFooter>
    </LandingSection>
  );
};

export default Landing;
