// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/blogpost/how-to-learn-flask

import * as fs from "node:fs";

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      // console.error(err.message);
      res.status(500).json({ error: "No such blog found" });
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
}
