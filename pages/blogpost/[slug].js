/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/BlogPost.module.css";

// STEP 1: Find the file corresponding to the slug
// STEP 2: Populate them inside the page

const Slug = (props) => {
  // console.log(props.blog);
  const [blog, setBlog] = useState(props.blog);
  const [isReadMore, setIsReadMore] = useState(false);
  // const router = useRouter();
  // console.log({ "router.isReady": router.isReady });
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((res) => res.json())
  //     .then((data) => setBlog(data));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [router.isReady]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog?.title}</h1>
        <hr />
        <p>
          {isReadMore ? blog?.content : blog?.content.substr(0, 500) + "..."}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "Show Less" : "Show More"}
          </button>
        </p>
      </main>
    </div>
  );
};

// SSR
export const getServerSideProps = async (context) => {
  // console.log(context.query);
  const { slug } = context.query;
  const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  const blog = await res.json();
  return { props: { blog } };
};
export default Slug;
