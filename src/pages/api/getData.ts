import { redis } from "@/lib/redis";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    if (id) {
      const data = await redis.get(id.toString());
      res.status(200).json({ data: JSON.parse(data!) });
    } else {
      res.status(400).json({ message: "No id specify" });
    }
  } catch (error) {
    res.status(400).json({ message: "Not found" });
  }
}
