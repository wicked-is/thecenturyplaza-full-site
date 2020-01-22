import React, { useState, useEffect, useContext } from 'react';
import Context from '../config/Context';
import styled from 'styled-components/macro';
import Select from 'react-select';
import { Link } from '@reach/router';
import $ from 'jquery';

import { states } from './states';
import { sourceDetail } from './sourceDetail';
import { Wrapper } from '../shared/styled-components/Layouts.js';
import { ContainerStyled } from 'Contact/style.js';
import { mediaMin } from '../shared/styled-components/MediaQueries';

const ContactWrapper = styled.div`
  ${Wrapper};
`;
const ContactContainer = styled.div`
  ${ContainerStyled};
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 30px;

  ${mediaMin.tablet`
  margin: 0 0 40px;
  `}

  ${mediaMin.tabletLandscape`
    width: calc(30vw - 40px);
  `}

  div {
    display: flex;
    flex-wrap: wrap;

    ${mediaMin.phoneXL`
      flex-wrap: nowrap;
    `}

    ${mediaMin.tabletLandscape`
      flex-wrap: wrap;
    `}

    p {
      margin: 20px 0 0;
      width: 100%;

      ${mediaMin.phoneXL`
        margin: 0 0 0 48px;
        width: auto;
      `}

      ${mediaMin.tabletLandscape`
        margin: 20px 0 0;
        width: 100%;
      `}

      &:first-child {
        margin: 0;
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
  opacity: ${props => (props.formVisible ? '1' : '0')};
  visibility: ${props => (props.formVisible ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  display: flex;
  flex-direction: column;
  max-width: 445px;

  ${mediaMin.tabletLandscape`
    width: 50%;
  `}

  font-family: ${props => props.theme.sansSerifThin};
  line-height: 1.4em;
  letter-spacing: 0.1em;
  font-weight: 300;

  h3 {
    font-family: ${props => props.theme.sansSerifRegular};
    font-weight: 400;
    margin: 0 0 20px;
  }

`;

const ContactSuccess = styled.form`
  opacity: ${props => (props.confirmationVisible ? '1' : '0')};
  visibility: ${props => (props.confirmationVisible ? 'visible' : 'hidden')};
  transition: opacity 0.25s ease, visibility 0.25s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mediaMin.tabletLandscape`
    width: 50%;
  `}

  p {
    font-family: ${props => props.theme.sansSerifLight};
    line-height: 1.4em;
    letter-spacing: 0.05em;
    font-weight: 300;
    margin: 0 0 20px;
    color: ${props => props.theme.black};
  }

  a {
    color: ${props => props.theme.black};

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
    .react-select__placeholder {
      font-family: ${props => props.theme.sansSerifRegular};
      font-weight: 300;
      color: ${props => props.theme.black};
    }
    .react-select__indicator-separator {
      display: none;
    }
    .react-select__control,
    .react-select__menu,
    .react-select__menu-list {
      border-radius: 0;
      border: none;
      background-color: ${props => props.theme.grayLight};
      color: ${props => props.theme.black};
      border: 1px solid ${props => props.theme.black};
      box-shadow: 0 0 0 transparent;
      font-family: ${props => props.theme.sansSerifRegular};
      font-weight: 300;
    }

    .react-select__menu-list {
      border: 0;
      display: block;
    }

    .react-select__menu {
      z-index: 20000;
      display: block;
      margin-bottom: 81px;
    }

    .react-select__indicator {
      svg {
        fill: ${props => props.theme.black};
        stroke: ${props => props.theme.black};
      }
    }
  }
  .select-full {
    width: 100%;
    .react-select__control,
    .react-select__menu,
    .react-select__menu-list {
      border: none;
      border: 1px solid ${props => (props.error ? 'red' : props.theme.black)};
    }
    .react-select__menu-list {
      border: 0;
    }
  }
`;

const TextInput = styled.input`
  background-color: transparent;
  color: ${props => props.theme.black};
  border: ${props =>
    props.error ? '1px solid red' : '1px solid ' + props.theme.black + ''};
  padding: 8px;
  box-sizing: border-box;
  letter-spacing: 0.1em;
  font-family: ${props => props.theme.sansSerifRegular};

  ::placeholder {
    color: ${props => props.theme.black};
    font-weight: 300;
    font-family: ${props => props.theme.sansSerifRegular};
  }

  width: ${props => {
    if (props.halfWidth) return '50%';
    if (props.quarterWidth) return '25%';
    return '100%';
  }};

  margin: 0 12px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  &:focus {
    outline: none;
    colors: white;
    border: ${props => (props.error ? '1px solid red' : '1px solid white')};
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
  color: ${props => props.theme.black};
  letter-spacing: 0.1em;
  cursor: pointer;
  font-weight: bold;
  font-family: ${props => props.theme.sansSerifRegular};

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
    color: ${props => props.theme.black};
    height: 24px;
    width: 24px;
    border: 0;
    cursor: pointer;
    outline: none;
    border: 1px solid ${props => props.theme.black};

    ::placeholder {
      color: ${props => props.theme.black};
      font-weight: bold;
      font-family: ${props => props.theme.sansSerifRegular};
    }

    :-ms-input-placeholder {
      color: ${props => props.theme.black};
      font-weight: bold;
      font-family: ${props => props.theme.sansSerifRegular};
    }

    ::-ms-input-placeholder {
      color: ${props => props.theme.black};
      font-weight: bold;
      font-family: ${props => props.theme.sansSerifRegular};
    }

    &:checked {
      background-color: transparent;
      &::before {
        color: ${props => props.theme.black};
        ${'' /* border: 1px solid ${props => props.theme.black}; */}
        position: absolute;
        font: 13px/1 'Open Sans', sans-serif;
        left: 7px;
        top: 3px;
        content: '\\02143';
        transform: rotate(40deg);
      }
    }
  }
`;

const SubmitButton = styled.button`
  background: none;
  background-color: transparent;
  color: ${props => props.theme.black};
  border: ${props => `1px solid ${props.theme.black}`};
  padding: 10px 8px 8px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-align: center;
  font-family: ${props => props.theme.sansSerifLight};
  line-height: 1.2em;
  letter-spacing: 0.2em;
  font-weight: 300;

  ${mediaMin.tabletLandscape`
    width: 30%;
  `}
`;

const InfoCluster = styled.div`
  p {
    font-family: ${props => props.theme.sansSerifLight};
    line-height: 1.4em;
    letter-spacing: 0.05em;
    font-weight: 300;
    margin: 0 0 20px;
    color: ${props => props.theme.black};

    strong {
      display: block;
      font-family: ${props => props.theme.sansSerifRegular};
      font-weight: 400;
      font-weight: normal;
    }

    a {
      color: ${props => props.theme.black};
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

const Contact = props => {
  const { setPageColor } = props;
  const context = useContext(Context);
  const { setGlobalConfig, setReturnPath, navActive } = context;
  const [formVisible, setFormVisible] = useState(true);
  const [formMounted, setFormMounted] = useState(true);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [confirmationMounted, setConfirmationMounted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    agent: false,
    address: '',
    city: '',
    state: '',
    zip: '',
    agencyName: '',
    agencyPhone: '',
    agencyAddress: '',
    sourceDetail: ''
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    agencyName: false,
    sourceDetail: false
  });

  const checkForErrors = () => {
    const newErrors = {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      agencyName: false,
      sourceDetail: false
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

  const parseFormData = () => {
    return {
      projectname: 'thecenturyplaza',
      data: {
        FollowupCode: 'E',
        Source: 'Website',
        sourceDetail: formData.sourceDetail,
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Email: formData.email,
        Phone: formData.phone,
        StreetAddress: formData.address,
        City: formData.city,
        State: formData.state,
        Zip: formData.zip,
        WorkStreetAddress: formData.agencyAddress,
        WorkCity: formData.agencyCity,
        WorkState: formData.agencyState,
        WorkZip: formData.zip
      }
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!checkForErrors()) {
      $.ajax({
        url: 'https://form.api.dbxd.com/post-buildercms-form/',
        type: 'POST',
        dataType: 'json',
        data: parseFormData(),
        crossDomain: true,
        success: (/* res  textStatus, jqXHR */) => {
          console.log('success - form submitted');
          showSuccess();
        },
        error: (jqXHR, textStatus, errorThrown) => {
          console.log('http request failed', errorThrown);
        }
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

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = '#E7E7E7';
    setPageColor('#E7E7E7');
  }, [setPageColor]);

  useEffect(() => {
    setGlobalConfig({
      headerBackground: props => props.theme.grayLightGradient,
      footerBackground: props => props.theme.grayLight,
      footerDisplay: false,
      footerFixed: false,
      sidebarBackground: 'transparent'
    });
  }, [setGlobalConfig]);

  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = '#FFFFFF';
      setGlobalConfig({
        headerBackground: 'transparent',
        footerBackground: 'transparent',
        footerDisplay: false,
        footerFixed: true,
        sidebarBackground: 'transparent'
      });
    };
  }, [setGlobalConfig]);

  useEffect(() => {
    return () => {
      setReturnPath(null);
    };
  }, [setReturnPath]);

  return (
    <ContactWrapper navActive={navActive}>
      <ContactContainer navActive={navActive}>
        <LeftCol>
          <InfoCluster>
            <p>
              <strong>Sales Gallery</strong>
              <a
                href="https://www.google.com/maps/place/10250+Constellation+Blvd,+Century+City,+CA+90067/@34.0570794,-118.4196399,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2bb8d3cafffff:0x7165eaa7048208a8!8m2!3d34.0570794!4d-118.4174512"
                target="_blank"
                rel="noopener noreferrer"
              >
                10250 Constellation Boulevard
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
              <FormRow error={formErrors.sourceDetail}>
                <Select
                  name="sourceDetail"
                  className="react-select-container select-full"
                  classNamePrefix="react-select"
                  placeholder="How did you hear about us?*"
                  onChange={handleSelect}
                  options={sourceDetail}
                />
              </FormRow>
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
