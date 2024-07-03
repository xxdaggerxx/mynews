// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../public/data/header.json";
import { MyNewsHeader } from "@/types/header.types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MyNewsHeader[]>
) {
  res.status(200).json(data);
}
