/* eslint-disable react-hooks/rules-of-hooks */
import * as fs from "node:fs";
import React, { useState } from "react";
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

// SSG
export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "how-to-learn-flask" } }, // See the "paths" section below
      { params: { slug: "how-to-learn-javascript" } }, // See the "paths" section below
      { params: { slug: "how-to-learn-nextjs" } }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps = async (context) => {
  // Add API Logic Here
  const { slug } = context.params;
  const blog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  return { props: { blog: JSON.parse(blog) } };
};

// SSR
// export const getServerSideProps = async (context) => {
//   // console.log(context.query);
//   // console.log(context.params);
//   const { slug } = context.query;
//   // const { slug } = context.params;
//   const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   const blog = await res.json();
//   return { props: { blog } };
// };
export default Slug;
