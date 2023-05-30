import crypto from "crypto";
import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import { RequestData } from "@/types/globals";
import { generateFilename } from "@/helpers";
import { redis } from "@/lib";

export interface PostApiReuqest extends NextApiRequest {
  body: RequestData;
}
const saveAsPdf = async (data: RequestData) => {
  const browser = await puppeteer.launch({
    headless: true,
    devtools: false,
  });
  const page = await browser.newPage();
  const id = crypto.randomBytes(8).toString("hex");
  await redis.set(id, JSON.stringify(data));

  await page.goto(`http://localhost:3000?id=${id}`, {
    waitUntil: "networkidle0",
  });

  const result = await page.pdf({
    printBackground: true,
    width: 595, // default 72 ppi pdf width and height for a4 size
    height: 842,
    preferCSSPageSize: false,
  });

  await browser.close();

  await redis.del(id); // delete all user data by id

  return result;
};

export default async function POST(req: PostApiReuqest, res: NextApiResponse) {
  const data = req.body;
  const filename = generateFilename();

  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
  res.setHeader("Content-Type", "application/pdf");

  const pdf = await saveAsPdf(data);

  return res.send(pdf);
}
