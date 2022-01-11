import React from "react";
import LoadingPage from "../components/elementsLayout/loadingPageBlack";
import PageAnimation from "../components/styles/animatePages";

export default function forward() {
  React.useEffect(() => {
    throw new Error(
      "error on foward component! (this is a made up error to test react-error-boundary)"
    );
  }, []);
  return (
    <>
      <LoadingPage>
        <h2>_STYLE_&_DESIGN_</h2>
      </LoadingPage>
      <PageAnimation>
        <div>
          <h2>this is forward</h2>
        </div>
      </PageAnimation>
    </>
  );
}
