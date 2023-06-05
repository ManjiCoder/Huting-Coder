import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="blogItem">
          <h3>
            <Link href={"/blogpost/learn-Javascript"}>
              How to learn Javascript in 2023
            </Link>
          </h3>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h3>
            <Link href={"/blogpost/learn-Python"}>
              How to learn Python in 2023
            </Link>
          </h3>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h3>
            <Link href={"/blogpost/learn-Android"}>
              How to learn Android in 2023
            </Link>
          </h3>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
