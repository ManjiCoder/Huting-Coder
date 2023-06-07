// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/blogs?page=1

import * as fs from "node:fs";

export default async function handler(req, res) {
  let { count, page } = req.query;
  count = count || 3;
  page = page || 1;
  // console.log(count, page);
  let totalFiles = (await fs.promises.readdir("blogdata", "utf-8")).length;
  let data = await fs.promises.readdir("blogdata", "utf8");
  // console.log(data);
  // console.log(totalFiles);
  /**
   * Pagination
   * 1 -> 3  => (0,3) 1*3=3 0,3
   * 2 -> 6  => (3,6) 2*3=6 3,6
   * 3 -> 9  => (6,9)
   * 4 -> 12 => (9,12)
   */
  data = data.slice(page * count - count, page * count);
  // console.log(data);
  let allBlogs = [];
  for (let item of data) {
    let result = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
    allBlogs.push(JSON.parse(result));
  }
  res.status(200).json({ allBlogs, totalResults: totalFiles });
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
