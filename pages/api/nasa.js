export default async function (req, res) {
  try {
    const data = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
    );
    if (!data) {
      throw new Error("Error fetching data again...");
    }
    const jsondata = await data.json();
    res.status(200).send(jsondata);
  } catch (error) {
    res.status(503).json({ message: "sorry mate" });
  }
}
