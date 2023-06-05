/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/BlogPost.module.css";

// STEP 1: Find the file corresponding to the slug
// STEP 2: Populate them inside the page

const slug = () => {
  const router = useRouter();
  console.log(router.query.slug);
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          provident nulla vero exercitationem dolor numquam unde officiis
          maiores totam vel iure neque laborum, harum reiciendis tempore saepe,
          aliquam odit libero voluptas corporis amet rerum.
        </p>
      </main>
    </div>
  );
};

export default slug;
