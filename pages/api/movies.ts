import { NextApiRequest, NextApiResponse } from "next";

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    query: { page = 0 },
  } = req;

  try {
    switch (method) {
      case "GET":
        if (page > 5) {
          return res.status(422).json({ message: "Page must be under 5" });
        }
        // await sleep(1000);
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${
          process.env.TMDB_API_KEY
        }&language=en-US&page=${page ? page : 1}`;

        const results = await fetch(url);
        const data = await results.json();
        return res.status(200).json(data.results);

      default:
        res.setHeader("Allow", ["GET"]);
        return res.status(405).end();
    }
  } catch (error) {
    // console.error(error.message);
    res.status(500).end();
  }
};
