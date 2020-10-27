import React, {useState, useEffect, useContext} from "react";
import CPLogo from 'icons/logo-black-with-sub.svg';
import styled from "styled-components/macro";
import {MediaStyled, PlaceholderStyled, SectionStyled} from "../Gallery/style";
import ResponsiveImage from "../shared/components/ResponsiveImage";
import ReactPlayer from "react-player";
import Select from "react-select";
import {countryMap} from "../Contact/countries";
import {sourceDetail} from "../Contact/sourceDetail";
import {mediaMin} from "../shared/styled-components/MediaQueries";
import $ from "jquery";
import Fade from "react-reveal/Fade";
import {Link} from "@reach/router";
import Context from "../config/Context";
import playBtnSVG from "icons/play-btn.svg";


const LandingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px auto 20px;
  padding: 0 20px 156px;
  max-width: 1400px;
 /* ${mediaMin.tablet` 
    margin: 0 0 20px;
  `}

  ${mediaMin.desktop`
    margin: 0 0 60px; 
  `}*/
`;

const Logo = styled.img`
  max-width: 320px;
  margin-bottom: 40px;
`;

const LandingHeader = styled.h2`
  font-family:  ${(props) => props.theme.serifMedium}, sans-serif;
  color: #101830;
  letter-spacing: 1.28px;
  font-size: 34px;
  line-height: 40px;
  margin: 0 0 24px;
  text-align: center;
`;
const LandingSubhead = styled.p`
  font-family:  ${(props) => props.theme.sansSerifLight}, sans-serif;
  color: #101830;
  letter-spacing: 1.28px;
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 32px;
  text-align: center;
`;
const LandingText = styled.p`
  font-family:  ${(props) => props.theme.sansSerifLight}, sans-serif;
  color: #101830;
  letter-spacing: 0.02px;
  font-size: 22px;
  line-height: 30px ;
  margin: 0 0 32px;
  text-align: center;
  max-width: 800px;
`;
const LandingStrongText = styled.strong`
  font-family:  ${(props) => props.theme.sansSerifMedium}, sans-serif;
  color: #101830;
  letter-spacing: 0.96px;
  font-size: 12px;
  line-height: 24px;
  margin: 0 0 64px;
  text-transform: uppercase;
  text-align: center;
`;

const ContactScrollButton = styled.button`
  display: inline-flex;
  font-family:  ${(props) => props.theme.sansSerifRegular}, sans-serif;
  color: #101830;
  letter-spacing: 0.14px;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 14px;
  margin: 0 0 32px;
  padding: 12px 14px;
  border: 1px solid #101820;
  background: none;
  outline: none;
`;

const Placeholder = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;

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

const videoElement = () => ({
  width: "100%",
  height: "100%",
  display: "none"
});

const ContactForm = styled.form`
  opacity: ${(props) => (props.formVisible ? "1" : "0")};
  visibility: ${(props) => (props.formVisible ? "visible" : "hidden")};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin-bottom: 64px;

  ${mediaMin.tabletLandscape`
    width: 50%;
  `}

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

const ContactSuccess = styled.form`
  opacity: ${(props) => (props.confirmationVisible ? "1" : "0")};
  visibility: ${(props) => (props.confirmationVisible ? "visible" : "hidden")};
  transition: opacity 0.25s ease, visibility 0.25s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mediaMin.tabletLandscape`
    width: 50%;
  `}

  p {
    font-family: ${(props) => props.theme.sansSerifLight};
    line-height: 1.4em;
    letter-spacing: 0.05em;
    font-weight: 300;
    margin: 0 0 20px;
    color: ${(props) => props.theme.black};
  }

  a {
    color: ${(props) => props.theme.black};

    &:hover {
      opacity: 0.5;
    }
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 24px;

  .react-select-container {
    width: 25%;
    &.half-width {
      width: 50%;
    }
    .react-select__placeholder {
      font-family: ${(props) => props.theme.sansSerifRegular};
      font-weight: 300;
      color: ${(props) => props.theme.black};
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
  padding: 8px;
  box-sizing: border-box;
  letter-spacing: 0.1em;
  font-family: ${(props) => props.theme.sansSerifRegular};

  ::placeholder {
    color: ${(props) => props.theme.black};
    font-weight: 300;
    font-family: ${(props) => props.theme.sansSerifRegular};
  }

  width: ${(props) => {
  if (props.halfWidth) return "calc(50% - 6px)";
  if (props.quarterWidth) return "25%";
  return "100%";
}};

  margin: 0 12px;
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
    border: ${(props) => (props.error ? "1px solid red" : "1px solid white")};
    background-color: transparent;
  }
`;

const RadioInput = styled.label`
  display: flex;
  align-items: center;
  border: 0;
  box-sizing: border-box;
  margin: 0 10px;
  width: 50%;
  color: ${(props) => props.theme.black};
  letter-spacing: 0.1em;
  cursor: pointer;
  font-weight: 300;
  font-family: ${(props) => props.theme.sansSerifRegular};

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
    height: 24px;
    width: 24px;
    border: 0;
    cursor: pointer;
    outline: none;
    border: 1px solid ${(props) => props.theme.black};

    ::placeholder {
      color: ${(props) => props.theme.black};
      font-weight: 300;
      font-family: ${(props) => props.theme.sansSerifRegular};
    }

    &:checked {
      background-color: transparent;
      &::before {
        color: ${(props) => props.theme.black};
        ${"" /* border: 1px solid ${props => props.theme.black}; */}
        position: absolute;
        font: 13px/1 "Open Sans", sans-serif;
        left: 7px;
        top: 3px;
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
  padding: 10px 8px 8px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-align: center;
  font-family: ${(props) => props.theme.sansSerifLight};
  line-height: 1.2em;
  letter-spacing: 0.2em;
  font-weight: 300;
  margin: 0 auto;

  ${mediaMin.tabletLandscape`
    width: 37%;
  `}
`;

const InfoCluster = styled.div`
  p {
    font-family: ${(props) => props.theme.sansSerifLight};
    line-height: 1.4em;
    letter-spacing: 0.05em;
    font-weight: 300;
    margin: 0 0 20px;
    text-align: center;
    margin: 0 0 72px;
    color: ${(props) => props.theme.black};

    strong {
      display: block;
      font-family: ${(props) => props.theme.sansSerifMedium};
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

const LandingFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 6px 10px 8px;
  background: #101820 0% 0% no-repeat padding-box;
  a {
    font-family:  ${(props) => props.theme.sansSerifLight}, sans-serif;
    color: #FFFFFF;
    letter-spacing: 0px;
    font-size: 22px;
    line-height: 30px;
    
    &:nth-child(1) {
      margin-right: 40px;
    }
  }
`;
const MainPageLink = styled(Link)`
  font-family:  ${(props) => props.theme.sansSerifRegular}, sans-serif;
  color: #101830;
  letter-spacing: 0.14px;
  font-size: 14px;
  line-height: 14px;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid black;
`;

const GalleryMedia = styled.div`
  margin: 0 0 40px;
  width: 100%;
  padding-bottom: 56.27%;
  position: relative;
/*

  ${mediaMin.phoneXL`
    margin: 0 10px 20px 10px;
    width: ${props =>
  props.type === "video" ? "calc(66.666% - 20px)" : "calc(33.333% - 20px)"};
    height: ${props =>
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

const Landing = ({landingData}) => {

  const context = useContext(Context);
  const {globalConfig, setGlobalConfig} = context;
  const [formVisible, setFormVisible] = useState(true);
  const [formMounted, setFormMounted] = useState(true);

  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [confirmationMounted, setConfirmationMounted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agent: false,
    address: "",
    city: "",
    country: "",
    state: "",
    zip: "",
    agencyName: "",
    agencyPhone: "",
    agencyAddress: "",
    sourceDetail: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    agencyName: false,
    sourceDetail: false,
  });
  const checkForErrors = () => {
    const newErrors = {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      agencyName: false,
      sourceDetail: false,
    };
    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    if (!formData.sourceDetail) newErrors.sourceDetail = true;
    if (JSON.parse(formData.agent)) {
      if (!formData.agencyName) newErrors.agencyName = true;
    }
    setFormErrors(newErrors);
    return Object.values(newErrors).some((el) => el);
  };

  const handleInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSelect = (e) => {
    const {name, value} = e;
    setFormData({...formData, [name]: value});
  };

  const parseFormData = () => {
    return {
      projectname: "thecenturyplaza",
      data: {
        FollowupCode: "E",
        Source: "Website",
        sourceDetail: formData.sourceDetail,
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Email: formData.email,
        Phone: formData.phone,
        StreetAddress: formData.address,
        City: formData.city,
        Country: formData.country,
        State: formData.state,
        Zip: formData.zip,
        WorkStreetAddress: formData.agencyAddress,
        WorkCity: formData.agencyCity,
        WorkState: formData.agencyState,
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


  const declareReturnPath = () => {
    setGlobalConfig({
      ...globalConfig,
      headerBackground: "transparent",
      returnPath: "/gallery"
    });
  };
  return (
    <LandingSection>
      <Logo
        src={CPLogo}
        alt="century plaza logo"
      />
      <LandingHeader>The Premier Destination for Luxury Living, Shopping and Dining</LandingHeader>
      <LandingSubhead>
        Fairmont Century Plaza Hotel and Residences Opening Winter 2020
        <br/>
        Tower Residences Anticipated Opening Mid-2021
      </LandingSubhead>
      <ContactScrollButton>Schedule a Private Appointment</ContactScrollButton>
      <GalleryMedia type={landingData.media.type}>
        <Fade>
          <Link
            onClick={declareReturnPath}
            to={"/landing/" + landingData.media.slug + "/" + landingData.media.slug}
          >
            <React.Fragment>
              <Placeholder>
                <ResponsiveImage srcPath={landingData.media.placeholder}/>
              </Placeholder>
              <ReactPlayer
                url={landingData.media.source}
                width="100%"
                height="100%"
                style={videoElement()}
              />
            </React.Fragment>
          </Link>
        </Fade>
      </GalleryMedia>
      <LandingText>
        Ascending 44 stories into the sky above Century City in Los Angeles, are two glass residential condominium
        towers masterfully designed by world-renowned architects, Pei Cobb Freed & Partners, and the newly re-envisioned
        Fairmont Century Plaza Hotel and Residences—all anchored by over six acres of landscaped gardens, premier
        shopping, and world-class dining.
      </LandingText>
      <LandingStrongText>
        Fairmont Century Plaza Hotel Residences starting at $2.2m
        <br/>
        The Tower Residences at Century Plaza starting at $1.7m
      </LandingStrongText>

      <ContactForm onSubmit={handleSubmit} formVisible={formVisible}>
        <LandingHeader>Register For More Information</LandingHeader>
        <FormRow>
          <TextInput
            halfWidth
            placeholder="First Name*"
            name="firstName"
            onChange={handleInput}
            error={formErrors.firstName}
          />
          <TextInput
            halfWidth
            placeholder="Last Name*"
            name="lastName"
            onChange={handleInput}
            error={formErrors.lastName}
          />
        </FormRow>
        <FormRow>
          <TextInput
            placeholder="Email*"
            name="email"
            onChange={handleInput}
            error={formErrors.email}
          />
        </FormRow>
        <FormRow>
          <TextInput
            placeholder="Phone*"
            name="phone"
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
            href="https://www.google.com/maps/place/10250+Constellation+Blvd,+Century+City,+CA+90067/@34.0570794,-118.4196399,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2bb8d3cafffff:0x7165eaa7048208a8!8m2!3d34.0570794!4d-118.4174512"
            target="_blank"
            rel="noopener noreferrer"
          >
            10250 Constellation Boulevard
            <br/>
            Suite 3050
            <br/>
            Los Angeles, California 90067
          </a>
        </p>
      </InfoCluster>
      <LandingFooter>
        <a href="#">310 246 4777</a>
        <a href="#">info@thecenturyplaza.com</a>
      </LandingFooter>
      <MainPageLink  to="/">CONTINUE TO MAIN SITE</MainPageLink>
    </LandingSection>
  );
};

export default Landing;
