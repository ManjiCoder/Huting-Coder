// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/blogs

import * as fs from "node:fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogdata", "utf8");
  let allBlogs = [];
  for (let item of data) {
    let result = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
    allBlogs.push(JSON.parse(result));
  }
  res.status(200).json(allBlogs);
}

// export default function handler(req, res) {
//   fs.readdir("blogdata", "utf8", (err, data) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     }
//     // console.log(data);
//     let allBlogs = [];
//     data.forEach((item) => {
//       // console.log(item);
//       fs.readFile(`blogdata/${item}`, "utf-8", (err, result) => {
//         if (err) {
//           res.status(500).json({ error: err.message });
//         }
//         console.log(allBlogs);
//         allBlogs.push(JSON.parse(result));
//       });
//     });
//     res.status(200).json({ allBlogs });
//   });
// }
