import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { FooterWrapper } from 'shared/styled-components/Navigation.js';

const FooterContainer = styled.div`${FooterWrapper};`;

const Footer = props => {
  // const [isGray, setIsGray] = useState(false);
  // const { pageColor } = props;

  // useEffect(() => {
  //   console.log(pageColor);
  //   console.log(isGray);
  // }, []);

  return (
    <FooterContainer>
      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="#">Instagam</Link>
        </li>
        <li>
          <Link to="#">Broker Portal</Link>
        </li>
        <li>
          <Link to="/legal">Legal</Link>
        </li>
        <li>
          <Link to="/accessibility">Accessibility</Link>
        </li>
      </ul>
    </FooterContainer>
  );
};
export default Footer;
