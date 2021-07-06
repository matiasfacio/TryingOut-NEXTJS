import React, { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";


export const ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {
  const { data } = useFetch({url:"https://jsonplaceholder.typicode.com/photos?_limit=10"});
  const [Products, setProducts] = useState(data);

 
  useEffect(() => {
    setProducts(data);
  }, [data]);

  function returnItemById(id) {
    const findItem = Products.filter((t) => t.id === parseInt(id));
    return findItem[0];
  }

  return (
    <ProductsContext.Provider value={{ Products, returnItemById }}>
      {children}
    </ProductsContext.Provider>
  );
}
