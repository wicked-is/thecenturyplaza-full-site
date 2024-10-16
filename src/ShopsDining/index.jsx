import React, { useEffect, useContext } from "react";
import Context from "../config/Context";
import styled from "styled-components/macro";
import { PageTitle } from "shared/styled-components/Typography.js";
import { Wrapper } from "shared/styled-components/Layouts.js";
import { ContainerStyled } from "Legal/style.js";

const ShopsDiningWrapper = styled.div`
  ${Wrapper};
`;
const ShopsDiningContainer = styled.div`
  ${ContainerStyled};
`;
const ShopsDiningTitle = styled.h1`
  ${PageTitle};
`;

const ShopsDining = (props) => {
  const { setPageColor } = props;
  const context = useContext(Context);
  const { setGlobalConfig, setReturnPath, navActive } = context;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = "white";
    setPageColor("white");
  }, [setPageColor]);

  useEffect(() => {
    setGlobalConfig({
      headerBackground: (props) => "white",
      footerBackground: (props) => "white",
      footerDisplay: false,
      footerFixed: false,
      sidebarBackground: "transparent",
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
        sidebarBackground: "transparent",
      });
    };
  }, [setGlobalConfig]);

  useEffect(() => {
    return () => {
      setReturnPath(null);
    };
  }, [setReturnPath]);

  return (
    <ShopsDiningWrapper navActive={navActive}>
      <ShopsDiningContainer navActive={navActive}>
        <ShopsDiningTitle>
          Acclaimed Culinary Concepts estiatorio Milos, KYU, and Sushi Noz to
          Debut Flagship LA Locations at Century Plaza
        </ShopsDiningTitle>
        <p style={{ textAlign: "center", fontStyle: "italic" }}>
          Global Dining Icons to Make Century Plaza Their West Coast Home in
          2024
        </p>
        <br />
        <br />
        <p>
          <b>Los Angeles</b> -{" "}
          <a href="https://thecenturyplaza.com/" target="_blank">
            Century Plaza
          </a>
          , the Reuben Brothers’ transformative six-acre development located
          along Avenue of the Stars in Century City, is set to redefine the
          culinary landscape in Los Angeles with the highly anticipated arrival
          of acclaimed dining establishments estiatorio Milos, KYU, and Sushi
          Noz. Expected to debut in late 2024, these esteemed restaurants mark a
          significant milestone for the $2.5 Billion project and will complement
          Lumière, the renowned French-inspired American brasserie nestled
          within the iconic Fairmont hotel.
        </p>
        <p>
          The emergence of this remarkable dining lineup is part of Century
          Plaza's broader vision, which includes the newly reimagined Fairmont,
          the recently rebranded Park Elm at Century Plaza residential towers,
          and an impressive 100,000 square feet of premium retail space. Century
          Plaza is poised to become the city's paramount culinary and lifestyle
          destination, offering top-tier living, dining, shopping, and holistic
          well-being experiences—all in a safe, secure, and immersive
          environment.
        </p>
        <p>
          "We have curated an unparalleled collection of internationally
          acclaimed dining concepts to transform Century Plaza into Los Angeles’
          premier culinary destination," shared David Reuben Jr. of Reuben
          Brothers. "With the first California locations of Milos, KYU, and
          Sushi Noz, we are crafting distinctive experiences unique to Century
          Plaza. These restaurants have dedicated global followings, and their
          arrival at Century Plaza sets an extraordinary standard for what's to
          follow. Residents, visitors, and the community can expect
          unforgettable dining experiences amidst Century Plaza’s landscaped
          gardens and alluring open-air plazas.”
        </p>
        <h4 style={{ fontWeight: 600 }}>estiatorio Milos</h4>
        <p>
          Led by legendary chef Costas Spiliadis, the acclaimed Greek seafood
          restaurant will occupy prime real estate along Constellation Avenue at
          Century Plaza's street-level plaza directly across from Westfield
          Century City. Esteemed for its impeccably fresh seafood and refined
          cuisine, this marks Milos' California debut and its tenth restaurant
          worldwide. Other locations include Montreal, Athens, London, Las
          Vegas, New York, Miami, Los Cabos, Dubai, and Milos at Sea.
        </p>
        <p>
          “I am very excited to finally come to Los Angeles and be so close to
          the most beautiful products of California and the West Coast,” said
          Spiliadis. “This alone will bring Milos to another level. The simple,
          healthy, and straightforward Greek Cuisine could not find a better
          home away from the Greek islands. The spectacular space at the Century
          Plaza will be transformed into a true temple for showcasing the best
          gifts of the land and the sea in which Californians and people of the
          world will experience the true food of the Mediterranean”.
        </p>
        <h4 style={{ fontWeight: 600 }}>KYU</h4>
        <p>
          Under the culinary stewardship of Chef Christopher Arellanes,
          celebrity hotspot KYU will introduce its award-winning Asian-inspired,
          wood-fired concept to Century Plaza. Featuring an architecturally
          striking arc-shaped facade overlooking the plaza's central fountain,
          KYU LA is situated at the heart of the development, directly across
          from the Fairmont hotel's open-air lobby. KYU LA will be the brand's
          fifth location, following its recent launch at Fontainebleau Las
          Vegas, with the flagship location in Miami and outposts in New York
          City and Mexico City.
        </p>
        <p>
          "Ever since we first opened KYU in Miami in 2016, Los Angeles has
          always been on our wish list, and it’s a dream come true now that we
          have found our perfect new home in Century Plaza," said Jordan Sayfie,
          co-owner of KYU Restaurants. "Following our successes in Miami and New
          York, as well as our upcoming opening at the new Fontainebleau in Las
          Vegas, we are incredibly excited to be bringing KYU to LA as our
          fourth restaurant in the U.S. At KYU, our community is what makes us
          special, and we are looking forward to bringing that energy to Century
          Plaza.”
        </p>
        <h4 style={{ fontWeight: 600 }}>Sushi Noz</h4>
        <p>
          Recognized for its edomae-style sushi and intimate counter seating,
          2-Michelin-starred Sushi Noz will establish its first location outside
          New York City. Overseen by Chef Nozomu Abe, Sushi Noz will occupy a
          prominent plaza position beneath Park Elm's North Tower, infusing
          Century Plaza's dining collection with Japanese culinary excellence.
        </p>
        <p>
          “Century Plaza is going to become a landmark of fine dining in Los
          Angeles,” said David and Josh Foulquier, Chef Noz’s business partners
          and co-founders of We All Gotta Eat Group. “We are proud to be a part
          of this endeavor and look forward to making our mark on LA’s vibrant
          Japanese dining scene.”
        </p>
        <p>
          Peter Peterson, President and Managing Partner at Cultivate
          Hospitality Group, leads restaurant and beverage leasing, and Andrew
          Turf, Senior Vice President at CBRE, leads retail leasing for Century
          Plaza.
        </p>
        <p>
          "It's been a privilege to collaborate with Reuben Brothers in bringing
          this extraordinary culinary vision to life, positioning Century Plaza
          as an iconic Los Angeles dining destination," stated Peterson. "These
          incoming restaurants are set to captivate and inspire food
          enthusiasts, cementing Century Plaza as a premier culinary hub in Los
          Angeles," added Turf.
        </p>
        <p>
          Taking center stage at the crossroads of LA's cultural, artistic, and
          entertainment pulse, Century Plaza is set within a self-contained
          urban oasis and exudes a distinctive ambiance that evokes a sense of
          wonder while integrating seamlessly with the surrounding neighborhood.
          Lush gardens, enchanting fountains, and illuminated plazas establish a
          sequence of experiences that unfold across multiple levels.
        </p>
        <br />
        <br />
        <p>
          For more information about retail leasing at Century Plaza, please
          contact Andrew Turf with CBRE and Peter Peterson with Cultivate
          Hospitality Group by emailing{" "}
          <a href="mailto:retail@thecenturyplaza.com">
            retail@thecenturyplaza.com
          </a>{" "}
        </p>

        <p>
          For media inquiries about Century Plaza, please contact Brian Cooley
          with Wicked+ at <a href="mailto:brian@wicked.is">brian@wicked.is</a>
        </p>
        <p>
          For media inquiries about estiatorio Milos, please contact Christina
          Clifton at{" "}
          <a href="mailto:cclifton@estiatoriomilos.com">
            cclifton@estiatoriomilos.com
          </a>{" "}
          or Loanna Sourias at{" "}
          <a href="mailto:isourias@estiatoriomilos.com">
            isourias@estiatoriomilos.com
          </a>
          .
        </p>
        <p>
          For media inquiries about KYU LA, please contact bread & Butter at{" "}
          <a href="mailto:kyu@wearebreadandbutter.com">
            kyu@wearebreadandbutter.com
          </a>
        </p>
        <p>
          For media inquiries about Sushi Noz, please contact Steven Hall with
          Hall PR at <a href="mailto:steven@hallpr.com">steven@hallpr.com</a>
        </p>
      </ShopsDiningContainer>
    </ShopsDiningWrapper>
  );
};

export default ShopsDining;
