import * as cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";

export type Results = {
  quantity: number;
  products: [];
};

const domain = "https://soysuper.com";

const handler: (
  req: NextApiRequest,
  res: NextApiResponse<Results>
) => void = async (req, res) => {
  const { name } = req.query;
  const results: Results = { quantity: 0, products: [] };
  const url = `${domain}/search?q=${name}&page=1`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  const matches: string = $(".totalresults .alignleft", html).text();

  if (matches) {
    results.quantity = parseInt(matches.trim());
  }

  res.status(200).json(results);
};

export default handler;
