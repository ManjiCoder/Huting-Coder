import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// We can do this but not recommended to use this move it to _app.js
// import "../styles/style.css";
import Link from "next/link";

export default function Home() {
  // console.log(styles);
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

        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        /> */}

        {/* We can do this but not recommended */}
        {/* <script src="/sc.js"></script> */}
      </Head>

      {/* To use any external script, nextjs recommended this */}
      {/* <Script src="/sc.js" strategy="lazyOnload"></Script> */}
      {/* <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      ></Script> */}

      {/* Style JSX */}
      <style jsx>{`
        h2 {
          font-size: 38px;
        }
        h3 {
          font-size: 28px;
        }
      `}</style>
      <nav className={styles.mainNav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        {/* <h1 className={`${styles.title} mySpan`}>Hunting Coder</h1> */}
        <h1 className={styles.title}>
          <span className="mySpan">Hunting Coder</span>
        </h1>

        <div className={styles.imgWrap}>
          <Image
            src="/home.jpg"
            width={386}
            height={255}
            alt="Hunting Coder"
            className={styles.myImg}
          />
        </div>

        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>

        {/* <div className="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div> */}

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}

        {/* <div className={`${styles1.con} ${styles2.con}`}> */}
        <div>
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn Javascript in 2023</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn Javascript in 2023</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn Javascript in 2023</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn Javascript in 2023</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
