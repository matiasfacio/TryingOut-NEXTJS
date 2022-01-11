import { useEffect, useState } from "react";
import DisplayOneSale from "../components/styles/displayOneSale";
import Router from "next/router";

export default function SaleItem({ pictureData }) {
  return (
    <DisplayOneSale>
      <div className="title"> - {pictureData.tags}</div>
      <img
        src={pictureData.userImageURL}
        alt="pictureData.id"
        onClick={() => Router.push(`/item/${pictureData.id}`)}
      />
    </DisplayOneSale>
  );
}
