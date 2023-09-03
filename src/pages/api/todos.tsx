// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TTodos } from "../types/todos";

export default function handler(req: NextApiRequest, res: NextApiResponse<TTodos>) {
  const mock = [
    { id: 1, todo: "flutterサイト作成" },
    { id: 2, todo: "next.js SSR" },
    { id: 3, todo: "next.js SPA" },
  ];

  res.status(200).json(mock);
}
