import React, { useEffect, useContext } from "react";
import Context from "../config/Context";
import styled from "styled-components/macro";
import { PageTitle } from "shared/styled-components/Typography.js";
import { Wrapper } from "shared/styled-components/Layouts.js";
import { ContainerStyled } from "Legal/style.js";

const LegalWrapper = styled.div`
  ${Wrapper};
`;
const LegalContainer = styled.div`
  ${ContainerStyled};
`;
const LegalTitle = styled.h1`
  ${PageTitle};
`;

const Legal = props => {
  const { setPageColor } = props;
  const context = useContext(Context);
  const { setGlobalConfig, setReturnPath, navActive } = context;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = "#E7E7E7";
    setPageColor("#E7E7E7");
  }, [setPageColor]);

  useEffect(() => {
    setGlobalConfig({
      headerBackground: props => props.theme.grayLightGradient,
      footerBackground: props => props.theme.grayLight,
      footerDisplay: false,
      footerFixed: false,
      sidebarBackground: "transparent"
    });
  }, [setGlobalConfig]);

  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = "#FFFFFF";
      setGlobalConfig({
        headerBackground: "transparent",
        footerBackground: "transparent",
        footerDisplay: false,
        footerFixed: true,
        sidebarBackground: "transparent"
      });
    };
  }, [setGlobalConfig]);

  useEffect(() => {
    return () => {
      setReturnPath(null);
    };
  }, [setReturnPath]);

  return (
    <LegalWrapper navActive={navActive}>
      <LegalContainer navActive={navActive}>
        <LegalTitle>Disclosures</LegalTitle>
        <p>
          Fairmont Century Plaza Residences (the “Residences”) is not owned,
          developed, or sold by Fairmont, AccorHotels or their affiliates. Next
          Century Partners, LLC, a Delaware limited liability company (the
          “Developer”), is independently owned and operated and is solely
          responsible for the ownership, development, marketing, sale and
          operation of the Residences. The Developer uses the Fairmont brand
          name and certain Fairmont trademarks pursuant to a limited,
          non-exclusive, non-transferable and non-sublicensable license from
          Accor Management US Inc., a Delaware corporation. Under certain
          circumstances, the license may be terminated or revoked according to
          its terms in which case the Residences will not be identified as a
          Fairmont branded project or have any rights to use the Fairmont
          trademarks. Fairmont does not make any representations or guarantees
          with respect to the Residences and is not responsible for the
          Developer’s marketing practices, advertising, and sales
          representations.
        </p>
        <p>
          All images are artist renderings for illustration purposes only and
          are not indicative of the actual and/or final finishes which will be
          contained within the project and the Residences. All dimensions and
          square footages are approximate. No federal agency has judged the
          merits or value, if any, of this property. Nothing contained herein
          shall be construed as an offer to sell or a solicitation to buy in any
          state where prior registration is required. Prices, plans, products
          and availability are subject to change without notice. Availability of
          certain amenities is not assured, and may require a separate agreement
          and payment of additional fees. The Developer reserves the right to
          make modifications in materials, specifications, plans, pricing,
          various fees, designs, scheduling and delivery of the Residences
          without prior notice. Exclusive sales and marketing on behalf of the
          Developer: Next Century Realty, Inc., BRE #02028123. Equal Housing
          Opportunity.
        </p>
        <LegalTitle>Privacy/Security</LegalTitle>
        <p>
          Next Century Partners, LLC (the “Company,” “we,” or “us”) created this
          Privacy Policy for the Web site www.thecenturyplaza.com (the “Site”),
          to demonstrate our commitment to respecting the privacy of visitors to
          our Site and to providing an appropriate level of protection and management
          of their personally identifiable information in our possession. Our current
          operations are intended for users located solely in the United States of
          America (“USA”). So, this policy applies only if you are using our Site
          in the USA. If we expand operations in the future outside the USA, we will
          develop a privacy policy at that time to apply to those operations.
        </p>
        <p>This Privacy Policy will inform you of the categories of personally identifiable information we collect, categories of third parties with whom the information may be shared, and the choices you have to review and request changes to your personally identifiable information. The phrases “personally identifiable information” and “personal information” mean any information that permits you to be contacted physically or online, such as your first and last name, physical address, email address, telephone number, or other identifying information maintained in combination with any of the foregoing.</p>
        <h4>COLLECTING INFORMATION ABOUT YOU AND USE OF COOKIES.</h4>
        <p>You may visit our Site without revealing any of your personal information. If you enter into a transaction or request information, then you will be requested to provide personal information. When you visit the Site or communicate with us via the Site or email, we may collect the following types of information:</p>
        <p>We may automatically track and collect the internet domain address, domain server, type of computer and type of web browser used to visit our Site. That type of information (often referred to as traffic data) will remain anonymous and is not considered personal information unless you voluntarily tell us personally identifiable information and it is combined with the traffic data. Traffic data helps us analyze how the Site is used and is helpful for analyzing usage of the Site and improving your experience on the Site.</p>
        <p>Like many Web sites, we use computer “cookies,” which are small amounts of data that we transfer to your computer’s hard drive through your web browser. We collect the information in the cookie when you visit the Site. The cookies enable our systems to recognize you, provide features to you, track your visits, process your requests and/or analyze your use of the Site. You may be able to set your browser to reject cookies or to ask you whether to accept a particular cookie. There are also third party utilities designed to help you visit Web sites anonymously. If, as a result of your settings, we cannot recognize you, we will not be able to provide you with a personalized experience at our Site. For example, you will be required to re-enter personal information each time you place a request through the site.</p>
        <p>We may collect personal information from you when you voluntarily provide it to us when you fill out an online form (such as when you request property sales or other information on the Site). At such times, you may provide us with information about you, such as your name, physical address, telephone number, fax number, e-mail address, age, income, birth date, gender, occupation, etc. It is completely your choice whether to provide this information. We may also maintain a record of your transactions with the Site.</p>
        <p>We may maintain all or portions of e-mails that you send to our staff or company e-mail accounts, and may combine that information with other information.</p>
        <h4>USING INFORMATION ABOUT YOU.</h4>
        <p>We use your personal information to conduct our business. In conducting our business we may also analyze personal information on an individual or aggregate basis, such as to conduct statistical analysis of demographics of users, assess use of various portions of the Site, our products and services, and to amend existing and develop new content, services and products.</p>
        <h4>SHARING INFORMATION ABOUT YOU.</h4>
        <p>We may share personal information with companies and individuals that perform functions on our behalf, or they may collect the personal information on our behalf and provide it to us. They have access to the personal information needed to perform their functions, but are not authorized to use it for other purposes.</p>
        <p>We may share with other third parties, such as marketing companies, property management companies and website developers, anonymous traffic data and results of analysis of various types of personal information that do not include the personal information itself.</p>
        <p>In the unlikely event that the Company, or substantially all of its assets, is acquired, personal information will, of course, be one of the transferred assets.</p>
        <p>We do not rent, sell or share personal identifiable information collected about you with third parties without your permission, except as previously noted. We will release your personal information when we believe such disclosure is appropriate to: (i) comply with law or a court order or other legal process; (ii) protect the rights, property or safety of the Company, the Site, our users, or others; or (iii) enforce our terms of service.</p>
        <h4>SECURITY.</h4>
        <p>We include security measures in the Site intended to protect access to, and prevent loss, misuse or alteration of, your personal information on our Site. Unfortunately, no data transmission over the Internet or on a computer can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, we are not able to guarantee the security of your personal information in our possession. It is also important for you to protect against unauthorized access to, or use of, your computer.</p>
        <h4>LINKS TO OTHER SITES.</h4>
        <p>The Site may contain links to other Internet websites. If you use these links, you will leave this Site. We are not responsible for the privacy, practices or content of such websites. We do not endorse, warrant or make any representations about any such website, or any information, software or other products or materials found there, or any results that may be obtained from using such websites. If you decide to access any of the third party sites linked to this Site, your access, use of, or interaction with such other websites is entirely at you own risk.</p>
        <h4>YOUR CALIFORNIA PRIVACY RIGHTS.</h4>
        <p>California Civil Code Section 1798.83 permits customers of the Company who are California residents to request certain information regarding its disclosure of personal information to third parties for their direct marketing purposes.  To make such a request, please send an email to CaliforniaPrivacy@thecenturyplaza.com.  </p>
        <h4>AGE RESTRICTION.</h4>
        <p>The Company does not intend to collect personally identifiable information from anyone under the age of eighteen (18). Do not submit any personal information or details if you are under the age of eighteen (18).</p>
        <h4>QUESTIONS AND COMMENTS.</h4>
        <p>If you have any concern about privacy at the Site, please send us a thorough description at info@thecenturyplaza.com and we will try to consider and resolve it in a manner that is respectful of your concerns while permitting us to conduct our business.</p>
        <h4>UPDATES AND CHANGES TO PRIVACY POLICY; EFFECTIVE DATE.</h4>
        <p>We reserve the right, at any time and without notice, to add to, change, update or modify this Privacy Policy, simply by posting such change, update or modification on the Site. Any such change, update or modification will be effective immediately upon posting on the Site. Information we gather is subject to the Privacy Policy in effect at the time of use. We may e-mail periodic reminders of our notices and conditions, unless you have instructed us not to, but you should check our Site frequently to see recent changes. The effective date of this policy is January 2, 2019.</p>


        <h4>CREDITS</h4>
        <p>Renderings, Animations, Photography, and Web Design by DBOX.</p>
        <h4>© CENTURY PLAZA 2019</h4>
      </LegalContainer>
    </LegalWrapper>
  );
};

export default Legal;
