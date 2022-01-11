import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ItemStyle from "./style.js";

export async function getServerSideProps(context) {
  const {
    params: { index },
    res,
  } = context;

  try {
    const result = await fetch(
      `https://pixabay.com/api/?key=17184044-02a710095e858c208b6742168&=plaincolors&image_type=photo&id=${index}`
    );

    if (!result.ok) {
      throw new Error("picture was not found");
    }

    const data = await result.json();
    return {
      props: {
        item: data.hits[0],
      },
    };
  } catch (error) {
    res.writeHead(302, { Location: "/" });
    res.end();
    return {
      notFound: true,
    };
  }
}

export default function Item({ item }) {
  console.log(item);
  return (
    <ItemStyle>
      {item && (
        <div>
          <h2>
            <span>Title:</span>
            {item.tags}
          </h2>
          <img src={item.userImageURL} alt="imagen" />
        </div>
      )}
    </ItemStyle>
  );
}
