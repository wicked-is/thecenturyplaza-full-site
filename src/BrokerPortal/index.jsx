/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import Context from '../config/Context';
import styled from 'styled-components/macro';
import { Wrapper } from '../shared/styled-components/Layouts.js';
import { PageTitle } from '../shared/styled-components/Typography.js';
import { ContainerStyled } from 'BrokerPortal/style.js';
import { mediaMin } from '../shared/styled-components/MediaQueries';

const PortalWrapper = styled.div`
  ${Wrapper};
`;
const PortalContainer = styled.div`
  ${ContainerStyled};
  display: ${props => (props.navActive ? 'none' : 'flex')};
  justify-content: center;
`;

const BrokerTitle = styled.h1`
  ${PageTitle};
`;

const PortalForm = styled.form`
  display: flex;
  flex-direction: column;

  ${mediaMin.tabletLandscape`
    width: 25%;
  `}

  font-family: ${props => props.theme.sansSerifThin};
  line-height: 1.4em;
  letter-spacing: 0.1em;
  font-weight: 300;

  h3 {
  width: 100%;
  font-family: ${props => props.theme.serifRoman}, serif;
  font-weight: 300;
  font-size: 24px;
  line-height: 1.1em;
  letter-spacing: 0.3em;
  margin: 0 0 1em;
  text-align: center;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  }

`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 24px;
`;

const TextInput = styled.input`
  background-color: transparent;
  color: ${props => props.theme.black};
  border: ${props =>
    props.error ? '1px solid red' : '1px solid ' + props.theme.black + ''};
  padding: 8px;
  box-sizing: border-box;
  letter-spacing: 0.1em;

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

  &:placeholder {
    colors: ${props => props.theme.black};
  }

  &:focus {
    outline: none;
    colors: white;
    border: ${props => (props.error ? '1px solid red' : '1px solid white')};
    background-color: transparent;
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
  width: 100%;
`;

const Error = styled.p`
  text-align: center;
  color: red;
  opacity: ${props => (!props.active ? '1' : '0')};
  visibility: ${props => (!props.active ? 'visible' : 'hidden')};
  transition: opacity 0.25s ease, visibility 0.25s ease;
`;

const BrokerPortal = props => {
  const { setPageColor } = props;
  const context = useContext(Context);
  const { setGlobalConfig, setReturnPath, navActive } = context;

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    username: false,
    password: false
  });

  const [authenticationStatus, setAuthenticationStatus] = useState(true);

  const clearForm = () => {
    setFormData({
      username: '',
      password: ''
    });
    setFormErrors({
      username: false,
      password: false
    });
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const responseHandler = response => {
    var trimResponse = response.replace(/['"]+/g, '');
    if (trimResponse === 'Authentication Failed') {
      clearForm();
      setAuthenticationStatus(false);
    } else {
      window.location.href = trimResponse;
    }
  };

  const handleErrors = () => {
    const newErrors = {
      username: false,
      password: false
    };
    if (!formData.username) newErrors.username = true;
    if (!formData.password) newErrors.password = true;
    setFormErrors(newErrors);
    return Object.values(newErrors).some(el => el);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setAuthenticationStatus(true);
    if (!handleErrors()) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          responseHandler(this.response);
        }
      };
      xhttp.open(
        'POST',
        'https://85k7ayvqz1.execute-api.us-east-1.amazonaws.com/prod/',
        true
      );
      xhttp.setRequestHeader('Content-type', 'application/json');
      const data = JSON.stringify(formData);
      xhttp.send(data);
    }
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
    <PortalWrapper navActive={navActive}>
      <PortalContainer navActive={navActive}>
        <PortalForm onSubmit={handleSubmit}>
          <BrokerTitle>BROKER PORTAL</BrokerTitle>
          <FormRow>
            <TextInput
              placeholder="USERNAME"
              name="username"
              value={formData.username}
              onChange={handleInput}
              error={formErrors.username}
            />
          </FormRow>
          <FormRow>
            <TextInput
              placeholder="PASSWORD"
              name="password"
              value={formData.password}
              onChange={handleInput}
              error={formErrors.password}
              type="password"
            />
          </FormRow>
          <SubmitButton type="submit">ACCESS MATERIALS</SubmitButton>
          <Error active={authenticationStatus}>Authentication Failed</Error>
        </PortalForm>
      </PortalContainer>
    </PortalWrapper>
  );
};

export default BrokerPortal;
