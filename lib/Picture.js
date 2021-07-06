import { useEffect, useState } from "react";
import DisplayOneSale from "../components/styles/displayOneSale";
import Router from 'next/router'

export default function Picture({ pictureData }) {
  const [photo, setPhoto] = useState();

  useEffect(async () => {
    await fetch(
      "https://pixabay.com/api/?key=17184044-02a710095e858c208b6742168&=plaincolors&image_type=photo"
    )
      .then((result) => result.json())
      .then((data) => setPhoto(data.hits[pictureData.id - 1].userImageURL))
      .catch((err) => alert(err));
  }, []);

  return (
    <DisplayOneSale>
      <div className="title"> - {pictureData.title}</div>
      {photo && <img src={photo} alt="pictureData.id" onClick = {()=> Router.push(`/item/${pictureData.id}`)}/>}
    </DisplayOneSale>
  );
}
