import React from "react";
import Image from "next/image";
import LoadingPage from "../components/elementsLayout/loadingPageBlack";
import PageAnimation from "../components/styles/animatePages";

export default function Nasa(props) {
  return (
    <>
      <LoadingPage>
        <h2>_STYLE_&_DESIGN_</h2>
      </LoadingPage>
      <PageAnimation>
        <div>
          {props.result ? (
            <Image
              src={props.result.url}
              width={400}
              height={400}
              alt="props.result."
            />
          ) : (
            "nothing to show"
          )}
        </div>
      </PageAnimation>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const data = await fetch("http://localhost:3001/api/nasa");
    if (!data.ok) {
      throw new Error("sorry mate");
    }
    const result = await data.json();

    return {
      props: {
        result,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
