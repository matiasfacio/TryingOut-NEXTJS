// fetching data fetching from an api endpoint.

import { createApi } from "unsplash-js";

const serverApi = createApi({
  accessKey: process.env.UNPLASH_API_CLIENT_KEY,
});

export default async function (req, res) {
  const result = await serverApi.search.getPhotos({
    query: "sea",
    color: "blue",
    page: 1,
    perPage: 10,
    orderBy: "latest",
  });

  if (result.type === "success") {
    res.status(200).send(result.response.results);
  } else {
    res.status(404).json({ message: "nothing here" });
  }
}
