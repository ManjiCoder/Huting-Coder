// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/blogpost/how-to-learn-flask

import * as fs from "node:fs";

export default async function handler(req, res) {
  try {
    const data = await fs.promises.readFile(
      `blogdata/${req.query.slug}.json`,
      "utf-8"
    );
    res.status(200).json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: "No such blog found" });
  }
}
