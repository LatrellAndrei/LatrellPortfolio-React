import React from "react";
import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Drei</h1>
        <p className={styles.description}>
          I am Latrell Andrei an IT graduate with experience in creating
          front-end websites. Feel free to reach out if you'd like to learn
          more!{" "}
        </p>
        <a href="lacc1612@gmail.com" className={styles.contactBtn}>
          Contact Me!
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
