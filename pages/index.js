import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Huting Coder</title>
        <meta
          name="description"
          content="A blog for hunting coders by a hunting coder"
        />

        <meta
          name="keywords"
          content="nextjs, huntingcoder blog, huntingcoder"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.imgWrap}>
          {/* <Image
            src="/home.jpg"
            width={386}
            height={255}
            alt="Hunting Coder"
            className={styles.myImg}
            priority
          /> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/home.jpg"
            width={237}
            height={158}
            alt="Hunting Coder"
            className={styles.myImg}
          />
        </div>
        <h1 className={styles.title}>
          <span className="mySpan">&lt;Hunting Coder /&gt;</span>
        </h1>
        <div>
          <h2 className={styles.h2}>Latest Blogs</h2>
          <div className="blogItem">
            <h3 className={styles.h3}>How to learn Javascript in 2023</h3>
            <p className={styles.p}>
              Javascript is the language used to design logic for the web
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className="blogItem">
            <h3 className={styles.h3}>How to learn Javascript in 2023</h3>
            <p className={styles.p}>
              Javascript is the language used to design logic for the web
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className="blogItem">
            <h3 className={styles.h3}>How to learn Javascript in 2023</h3>
            <p className={styles.p}>
              Javascript is the language used to design logic for the web
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
