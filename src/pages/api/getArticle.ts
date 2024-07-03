// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../public/data/article-2403311.json";
import { NewsArticleType } from "@/types/article.types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsArticleType[]>
) {
  res.status(200).json(data);
}
