import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// STEP 1: Collect all the data from blogdata directory
// STEP 2: Iterate through the & Display them

const Blog = (props) => {
  // console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {
  //   console.log("useEffect is running");
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((parseData) => setBlogs(parseData));
  // }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((item) => {
          return (
            <div className="blogItem" key={item.title}>
              <h3 className={styles.heading}>
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

// SSR
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/blogs");
  const allBlogs = await res.json();
  return { props: { allBlogs } };
};

export default Blog;
