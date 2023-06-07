// import * as fs from "node:fs";

import React, { useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

// STEP 1: Collect all the data from blogdata directory
// STEP 2: Iterate through the & Display them

const Blog = (props) => {
  // console.log(props);
  const { allBlogs, totalResults } = props.data;
  const [blogs, setBlogs] = useState(allBlogs);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setPage(page + 1);
    // API Call
    let res = await fetch(`http://localhost:3000/api/blogs/?page=${page + 1}`);
    let data = await res.json();
    setBlogs(blogs.concat(data.allBlogs));
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={blogs.length !== totalResults}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((item) => {
            return (
              <div className={styles.blogItem} key={item.title}>
                <h3 className={styles.heading}>
                  <Link href={`blogpost/${item.slug}`}>{item.title}</Link>
                </h3>
                <p className={styles.blogItemp}>
                  {item.metadesc.substr(0, 140)}
                </p>
                <Link href={`blogpost/${item.slug}`}>
                  <button className={styles.btn}>Read More</button>
                </Link>
              </div>
            );
          })}
        </InfiniteScroll>
      </main>
    </div>
  );
};

// SSG
// export const getStaticProps = async (context) => {
//   console.log(context);
//   let data = await fs.promises.readdir("blogdata", "utf8");
//   return { props: { allBlogs } };
// };

// SSR
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/blogs");
  const data = await res.json();
  return { props: { data } };
};

export default Blog;
