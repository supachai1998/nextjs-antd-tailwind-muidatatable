import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const response = await fetch(
        `https://fakestoreapi.com/products/`
      ).then((r) => r.json());

      res.status(200).json(response);

      break;

    default:
      res.status(404).json({ error: "Method not allowed" });
      break;
  }
}
