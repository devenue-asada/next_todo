import type { NextApiRequest, NextApiResponse } from "next";
import { TBooks, TResBook } from "../types/books";

export async function getData(keyword: string): Promise<TBooks> {
  const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=" + encodeURIComponent(keyword));
  const { items } = await res.json();
  return items.map((item: TResBook) => {
    return {
      id: item.id,
      title: item.volumeInfo.title,
      pageCount: item.pageCount || null,
    };
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<TBooks>) {
  const data = await getData("ドラえもん");
  res.status(200).json(data);
}
