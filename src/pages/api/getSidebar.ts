// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../public/data/sidebar.json";
import { MyNewsSidebar } from "@/types/sidebar.types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MyNewsSidebar>
) {
  res.status(200).json(data);
}
