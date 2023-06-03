import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";

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
        {/* We can do this but not recommended */}
        {/* <script src="/sc.js"></script> */}
      </Head>

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

      {/* To use any external script, nextjs recommended this */}
      {/* <Script src="/sc.js" strategy="lazyOnload"></Script> */}

      <main className={styles.main}>
        <h1 className={styles.title}>Hunting Coder</h1>

        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>

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

        <div className="blogs">
          <h1>Popular Blogs</h1>
          <div className="blogItem">
            <h2>How to learn Javascript in 2023</h2>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h2>How to learn Javascript in 2023</h2>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h2>How to learn Javascript in 2023</h2>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h2>How to learn Javascript in 2023</h2>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
