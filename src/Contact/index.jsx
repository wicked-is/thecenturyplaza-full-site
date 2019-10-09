import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Select from "react-select";
import { Link } from "@reach/router";

import { states } from "./states";
import { Wrapper } from "shared/styled-components/Layouts.js";
import { ContainerStyled } from "Contact/style.js";
import { mediaMin } from "shared/styled-components/MediaQueries";
import Context from "config/Context";

const ContactWrapper = styled.div`
  ${Wrapper};
`;
const ContactContainer = styled.div`
  ${ContainerStyled};

  margin: 0 !important;
`;

const LeftCol = styled.div`
  display: none;
  ${mediaMin.tabletLandscape`
    display: flex;
  `}
  flex-direction: column;
  width: calc(30vw - 40px);

  section {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    span {
      margin-bottom: 4px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const RightCol = styled.div`
  width: 100%;

  ${mediaMin.tabletLandscape`
    width: 70%;
  `}

  display: flex;
  flex-direction: column;

  h3 {
    color: ${props => props.theme.black};
    margin: 0 0 40px 0;
  }
`;

const ContactForm = styled.form`
  opacity: ${props => (props.formVisible ? "1" : "0")};
  visibility: ${props => (props.formVisible ? "visible" : "hidden")};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  display: flex;
  flex-direction: column;
  ${"" /* width: 70vw;
  margin: 80px 0 0 30vw; */}

  ${mediaMin.tabletLandscape`
    width: 50%;
  `}
`;

const ContactSuccess = styled.form`
  opacity: ${props => (props.confirmationVisible ? "1" : "0")};
  visibility: ${props => (props.confirmationVisible ? "visible" : "hidden")};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mediaMin.tabletLandscape`
    width: 50%;
  `}
  a {
    color: ${props => props.theme.black};
    &:visited {
      color: ${props => props.theme.black};
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
    .react-select__indicator-separator {
      display: none;
    }
    .react-select__control,
    react-select__menu,
    .react-select__menu-list {
      z-index: 100;
      border-radius: 0;
      border: none;
      background-color: #0c1218;
      color: ${props => props.theme.black};
    }
  }
`;

const TextInput = styled.input`
  background-color: ${props => props.theme.gray};
  color: ${props => props.theme.black};
  border: ${props =>
    props.error ? "1px solid red" : "1px solid " + props.theme.black + ""};
  padding: 8px;
  box-sizing: border-box;
  width: ${props => {
    if (props.halfWidth) return "50%";
    if (props.quarterWidth) return "25%";
    return "100%";
  }};
  margin: 0 12px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  :placeholder {
    colors: ${props => props.theme.white};
  }
`;

const RadioInput = styled.label`
  display: flex;
  align-items: center;
  border: 0;
  padding: 8px;
  box-sizing: border-box;
  margin: 0 12px;
  width: 50%;
  color: ${props => props.theme.black};
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  input {
    margin-right: 24px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    position: relative;
    background-color: #0c1218;
    color: #666;
    height: 30px;
    width: 30px;
    border: 0;
    cursor: pointer;
    outline: none;
    &:checked {
      background-color: #0c1218;
      &::before {
        color: ${props => props.theme.black};
        position: absolute;
        font: 13px/1 "Open Sans", sans-serif;
        left: 11px;
        top: 7px;
        content: "\\02143";
        transform: rotate(40deg);
      }
    }
  }
`;

const SubmitButton = styled.button`
  background: none;
  background-color: #0c1218;
  color: ${props => props.theme.blacky};
  border: ${props => `1px solid ${props.theme.gblack}`};
  padding: 10px 14px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-align: center;

  ${mediaMin.tabletLandscape`
    width: 30%;
  `}
`;

const InfoCluster = styled.div`
  p {
    font-family: ${props => props.theme.sansSerifLight};
    line-height: 1.4em;
    margin: 0 0 20px;
    color: ${props => props.theme.black};

    strong {
      display: block;
      font-family: ${props => props.theme.sansSerifRegular};
      font-weight: normal;
    }

    a {
      color: ${props => props.theme.black};
    }
  }
`;

const Contact = ({ setPageColor }) => {
  const context = useContext(Context);
  const { setHasCaptions } = context;
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
    state: "",
    zip: "",
    agencyName: "",
    agencyPhone: "",
    agencyAddress: ""
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    agencyName: false
  });

  const checkForErrors = () => {
    const newErrors = {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      agencyName: false
    };
    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    if (JSON.parse(formData.agent)) {
      if (!formData.agencyName) newErrors.agencyName = true;
    }
    setFormErrors(newErrors);
    return Object.values(newErrors).some(el => el);
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelect = e => {
    const { name, value } = e;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    showSuccess();
    if (!checkForErrors()) {
      console.log("submitted");
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

  useEffect(() => {
    setHasCaptions(false);
    setPageColor(props => props.theme.gray);
  }, [setPageColor, setHasCaptions]);

  return (
    <ContactWrapper>
      <ContactContainer>
        <LeftCol>
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
          </InfoCluster>
        </LeftCol>
        <RightCol>
          {formMounted && (
            <ContactForm onSubmit={handleSubmit} formVisible={formVisible}>
              <h3>Register For More Information</h3>
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
                    <Select
                      name="state"
                      className="react-select-container"
                      classNamePrefix="react-select"
                      placeholder="State"
                      onChange={handleSelect}
                      options={states}
                    />
                    <TextInput
                      quarterWidth
                      placeholder="Zip"
                      name="zip"
                      onChange={handleInput}
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
                    <Select
                      name="state"
                      className="react-select-container"
                      classNamePrefix="react-select"
                      placeholder="State"
                      onChange={handleSelect}
                      options={states}
                    />
                    <TextInput
                      quarterWidth
                      placeholder="Zip"
                      name="zip"
                      onChange={handleInput}
                    />
                  </FormRow>
                </>
              )}
              <SubmitButton type="submit">SUBMIT</SubmitButton>
            </ContactForm>
          )}
          {confirmationMounted && (
            <ContactSuccess confirmationVisible={confirmationVisible}>
              <p>
                Thank you for your interest!
                <br />A representative from our team will reach out to you soon.
              </p>
              <Link to="/">Return Home</Link>
            </ContactSuccess>
          )}
        </RightCol>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
