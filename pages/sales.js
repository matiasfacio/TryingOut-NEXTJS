import React from "react";
import LoadingPage from "../components/elementsLayout/loadingPageBlack";
import PageAnimation from "../components/styles/animatePages";

export default function Back() {
  return (
    <>
      <LoadingPage>
        <h2>myHome.de</h2>
      </LoadingPage>
      <PageAnimation>
        <div>
          <h2>this is sales</h2>
        </div>
      </PageAnimation>
    </>
  );
}
