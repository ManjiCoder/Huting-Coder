import * as fs from "node:fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    // console.log(req.body);
    let data = await fs.promises.readdir("contactdata");
    // console.log(data.length);
    let result = await fs.promises.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body),
      "utf-8"
    );
    // console.log(result); // return undefined
    res.status(200).json(req.body);
  } else {
    // Handle any other HTTP method
    res.json("allBlogs");
  }
}
