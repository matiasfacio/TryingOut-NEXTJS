import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../lib/contexts/ProductsContext";
import ItemStyle from "./style.js";

export default function Item() {
  const { returnItemById } = useContext(ProductsContext);
  const [item, setItem] = useState();
  const router = useRouter();

  useEffect(() => {
    const findItem = returnItemById(router.query.index);
    setItem(findItem);
  });

  return (
    <ItemStyle>
      {item && (
        <div>
          <h2>
            <span>Title:</span>
            {item.title}
          </h2>
          <h3>Index: {router.query.index}</h3>
          <img src={item.thumbnailUrl} alt="imagen" />
        </div>
      )}
    </ItemStyle>
  );
}
