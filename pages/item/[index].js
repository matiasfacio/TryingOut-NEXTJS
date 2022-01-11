import React from "react";
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
  return (
    <ItemStyle>
      <div>
        <h3>Details</h3>
        <pre>Id: {item.id}</pre>
        <pre style={{ color: "blue" }}>Tags: {item.tags}</pre>
      </div>
      <img src={item.userImageURL} alt="imagen" />
    </ItemStyle>
  );
}
