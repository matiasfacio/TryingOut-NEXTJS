import React, { useEffect, useState } from "react";
import LoadingPage from "../components/elementsLayout/loadingPageBlack";
import PageAnimation from "../components/styles/animatePages";
import Picture from '../lib/Picture';
import DisplaySales from '../components/styles/displaySales'

export default function Back() {

  const [data,setData] = useState()

  useEffect(()=> {
    fetch('api/hello')
    .then(response => response.json())
    .then(result => setData(result))
    .catch(err => alert(err))
  }, [])

  return (
    <>
      <LoadingPage>
        <h2>_STYLE_&_DESIGN_</h2>
      </LoadingPage>
      <PageAnimation>
        <div>
          <h2>this is sales</h2>
        </div>
        <DisplaySales>
          <h1>Items on <span>sale</span></h1>
        {data && data.map(pic => <Picture key = {pic.id} pictureData = {pic}/>)}
        </DisplaySales>
      </PageAnimation>
    </>
  );
}
