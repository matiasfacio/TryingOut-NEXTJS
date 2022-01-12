import { useEffect } from "react";
import Head from "next/head";
import Section from "../components/styles/section";
import MainHeader, { Left } from "../components/styles/mainHeader";
import CheckboxesGroup from "../lib/CheckboxeswithForms";
import LoadingPage from "../components/elementsLayout/loadingPageBlack";
import { Logo } from "../components/elementsLayout/Logo";

export default function Home() {
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
          <Logo />
        </Left>
        <CheckboxesGroup />
      </MainHeader>

      <Section
        image={"url(./living-room-brown.jpg)"}
        text={"Dreaming room"}
        key="firstsection"
      >
        <h3>Life is just one</h3>
      </Section>

      <Section
        image={"url(./room.jpg)"}
        text={"Designed furniture"}
        key="secondsection"
      ></Section>

      <Section
        image={"url(./kitchen.jpg)"}
        text={"Classy & Elegant"}
        key="thirdsection"
      ></Section>
    </div>
  );
}
