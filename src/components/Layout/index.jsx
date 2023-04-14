import React from "react";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <section className={styles.navSection}>
        <a class="navbar-heading" href="/" className={styles.header}>
          <img src={"/public/logo.png"} />
        </a>
        <div className={styles.links}>
          <a href="./resume/">Resume</a>
          <a href="./projects/">Projects</a>
          <a href="https://medium.com/@mishraanant" target="_blank">
            Blogs
          </a>
          <a href="./">Playground</a>
          <a href="./contact/">Contact</a>
        </div>
        <div className={styles.footer}>
          <h1>Anant Mishra</h1>
        </div>
      </section>
      <div className={styles.child}>{children}</div>
    </div>
  );
};

export default Layout;
