import { useEffect } from "react";
import Head from "next/head";
import Section from "../components/styles/section";
import MainHeader, { Left } from "../components/styles/mainHeader";
import CheckboxesGroup from "../lib/CheckboxeswithForms";
import LoadingPage from "../components/elementsLayout/loadingPageBlack";
// import PageAnimation from "../components/styles/animatePages";
import SectionContent from "../components/styles/sectionContent"

export default function Home() {
  useEffect(() => {
    const handleScroll = (e) => {
      document.body.style.transform = "skewX(-120deg)";
    };

    document.body.addEventListener("scroll", handleScroll);

    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    document.body.style.cssText =
      "opacity:1; transition: all 500ms ease-in-out";
  }, []);

  return (
    <div>
      <Head>
        <title>Next.js | Matias Facio</title>
        <meta
          name="keywords"
          content="haus, furniture, möbel, aufbauen, möbel für zuhause"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@700&ampdisplay=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&ampdisplay=swap"
          rel="stylesheet"
        />
      </Head>

      <LoadingPage>
        <h2>_STYLE_&_DESIGN_</h2>
      </LoadingPage>
      <MainHeader>
        <Left>
          <h1>
            _Style_
            <br />
            &
            <br/>
            _Design_
          </h1>
        </Left>
        <CheckboxesGroup />
      </MainHeader>

      <Section theme={{ image: 'url(./living-room-brown.jpg)', text: 'Dreaming room'}}>
        <h3>Life is just one</h3>
      </Section>

      <Section theme={{ image: 'url(./room.jpg)', text: 'Designed furniture' }}>
      </Section>

      <Section theme={{ image: 'url(./kitchen.jpg)', text: 'Classy & Elegant'}}>
      </Section>
    </div>
  );
}
