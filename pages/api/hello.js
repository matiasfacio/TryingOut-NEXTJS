// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function (req, res) {
  try {
    await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((t) => t.json())
      .then((d) => res.send(d))
      .catch((error) => console.log(error));
  } catch {
    (error) => console.log(error);
  }
}
