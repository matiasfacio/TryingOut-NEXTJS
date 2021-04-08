import {useEffect} from 'react';
import Head from "next/head";
import Section from "../components/styles/section";
import MainHeader, { Left } from "../components/styles/mainHeader";
import CheckboxesGroup from "../lib/CheckboxeswithForms";

export default function Home() {

  useEffect(() => {
    const handleScroll = e => {
      document.body.style.transform = "skewX(-120deg)";
    }

    document.body.addEventListener('scroll', handleScroll)

    return () => {
      document.body.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div>
      <Head>
        <title>Next.js | Matias Facio</title>
        <meta
          name="keywords"
          content="haus, furniture, möbel, aufbauen, möbel für zuhause"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&ampdisplay=swap" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&ampdisplay=swap" rel="stylesheet"/> 
      </Head>

      <MainHeader>
        <Left>
          <h1>
            WIE SCHÖN,
            <br />
            HOME!
          </h1>
        </Left>
        <CheckboxesGroup />
      </MainHeader>

      <Section theme={{ bg: "lightblue", color: "white" }}>
        <h2>Welcome back</h2>
      </Section>

      <Section theme={{ bg: "chocolate", color: "white" }}>
        <h2>Welcome back</h2>
      </Section>
      <Section theme={{ bg: "white", color: "black" }}>
        <h2>Welcome back</h2>
      </Section>
    </div>
  );
}
