import React from "react";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <section className={styles.navSection}>
        <a class="navbar-heading" href="/" className={styles.header}>
          <img src={"/assets/logo.png"} alt="Logo" />
        </a>
        <div className={styles.links}>
          <a href="/resume">Resume</a>
          <a href="/projects">Projects</a>
          <a href="https://medium.com/@mishraanant" target="_blank">
            Blogs
          </a>
          <a href="/">Playground</a>
          <a href="/contact">Contact</a>
        </div>
        <div className={styles.footer}>
          <a href="mailto: mishraanant1526@gmail.com">
            <img src={"/assets/mailIcon.png"} width="25" alt="" />
          </a>
          <a href="">
            <img
              src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/anant-mishra-639707172/"
            target="_blank"
          >
            <img
              src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/_anantmishra/" target="_blank">
            <img
              src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png"
              alt=""
            />
          </a>
        </div>
      </section>
      <div className={styles.child}>{children}</div>
    </div>
  );
};

export default Layout;
