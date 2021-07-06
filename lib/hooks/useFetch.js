import { useState, useEffect } from "react";

export const useFetch = (props) => {
  const [data, setData] = useState();

  useEffect(async () => {
    try {
      const response = await fetch(
        props.url
      );
      if (response) {
        const dataParsed = await response.json();
        setData(dataParsed);
      } else {
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { data };
};
