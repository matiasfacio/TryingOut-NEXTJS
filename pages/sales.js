import React, { useEffect, useState } from "react";
import LoadingPage from "../components/elementsLayout/loadingPageBlack";
import PageAnimation from "../components/styles/animatePages";
import Picture from "../lib/Picture";
import DisplaySales from "../components/styles/displaySales";

export const getStaticProps = async () => {
  let jsondata;
  try {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
    );
    if (data) {
      jsondata = await data.json();
    }
  } catch {
    (err) => (jsondata = err);
  }

  if (jsondata)
    return {
      revalidate: 20,
      props: {
        data: jsondata,
      },
    };
  return {
    props: {
      revalidate: 20,
      data: null,
    },
  };
};

export default function Back(props) {
  const [data, setData] = useState();

  useEffect(() => {
    props.data && setData(props.data);
  }, []);

  console.log(props.data);

  return (
    <>
      <LoadingPage>
        <h2>_STYLE_&_DESIGN_</h2>
      </LoadingPage>
      <PageAnimation>
        <DisplaySales>
          <h1>
            Items on <span>sale</span>
          </h1>
          {data &&
            data.map((pic) => <Picture key={pic.id} pictureData={pic} />)}
        </DisplaySales>
      </PageAnimation>
    </>
  );
}
