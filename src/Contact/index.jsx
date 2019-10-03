import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import { states } from './states';
import { Wrapper } from 'shared/styled-components/Layouts.js';
import { ContainerStyled } from 'Contact/style.js';

const LegalWrapper = styled.div`
  ${Wrapper};
`;
const LegalContainer = styled.div`
  ${ContainerStyled};
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
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
  display: flex;
  flex-direction: column;
  width: 70%;
  h3 {
    margin: 0 0 40px 0;
  }
  form {
    width: 50%;
    display: flex;
    flex-direction: column;
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
      border-radius: 0;
      border: none;
      background-color: #0c1218;
      color: ${props => props.theme.gray};
    }
  }
`;

const TextInput = styled.input`
  background-color: #0c1218;
  color: ${props => props.theme.gray};
  border: ${props => (props.error ? '1px solid red' : '1px solid transparent')};
  padding: 8px;
  box-sizing: border-box;
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
`;

const RadioInput = styled.label`
  display: flex;
  align-items: center;
  border: 0;
  padding: 8px;
  box-sizing: border-box;
  margin: 0 12px;
  width: 50%;
  color: ${props => props.theme.gray};
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
        color: ${props => props.theme.gray};
        position: absolute;
        font: 13px/1 'Open Sans', sans-serif;
        left: 11px;
        top: 7px;
        content: '\\02143';
        transform: rotate(40deg);
      }
    }
  }
`;

const SubmitButton = styled.button`
  background: none;
  background-color: #0c1218;
  color: ${props => props.theme.gray};
  border: ${props => `1px solid ${props.theme.gray}`};
  padding: 16px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 20%;
`;

const Contact = ({ setPageColor }) => {
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
    agencyAddress: ''
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
    if (!checkForErrors()) {
      console.log('submitted');
    }
  };

  useEffect(() => {
    setPageColor('#101820');
  }, []);

  return (
    <LegalWrapper>
      <LegalContainer>
        <LeftCol>
          <section>
            <span>
              <strong>Sales Gallery</strong>
            </span>
            <span>10250 Constellation Boulsevard</span>
            <span>Los Angeles, California 90067</span>
          </section>
          <section>
            <span>
              <strong>Schedule an Appointment</strong>
            </span>
            <span>+1 310 246 4777</span>
            <span>info@thecenturyplaza.com</span>
          </section>
        </LeftCol>
        <RightCol>
          <form onSubmit={handleSubmit}>
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
          </form>
        </RightCol>
      </LegalContainer>
    </LegalWrapper>
  );
};

export default Contact;
