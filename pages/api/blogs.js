// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "node:fs";

export default function handler(req, res) {
  fs.readdir("blogdata", "utf8", (err, data) => {
    if (err) {
      // console.error(err.message);
      res.status(500).json({ error: err.message });
    }
    // console.log(data);
    res.status(200).json(data);
  });
}
