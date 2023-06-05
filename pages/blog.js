import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// STEP 1: Collect all the data from blogdata directory
// STEP 2: Iterate through the & Display them

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("useEffect is running");
    fetch("http://localhost:3000/api/blogs")
      .then((data) => {
        return data.json();
      })
      .then((parseData) => setBlogs(parseData));
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((item) => {
          return (
            <div className="blogItem" key={item.title}>
              <h3>
                <Link href={`blogpost/${item.slug}`}>{item.title}</Link>
              </h3>
              <p className={styles.blogItemp}>{item.content.substr(0, 140)}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;
