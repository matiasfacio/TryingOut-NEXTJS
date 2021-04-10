import React, { useEffect } from "react";
import LoadingPage from "../components/elementsLayout/loadingPageBlack";
import PageAnimation from "../components/styles/animatePages";

export default function Back() {

  return (
    <>
      <LoadingPage>
        <h2>_STYLE_&_DESIGN</h2>
      </LoadingPage>
      <PageAnimation>
        <div>
          <h2>this is sales</h2>
        </div>
      </PageAnimation>
    </>
  );
}
