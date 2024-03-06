import React from "react";
import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I am Drei</h1>
        <p className={styles.description}>
          "I'm Latrell Andrei, an IT graduate skilled in crafting front-end
          websites. Feel free to reach out for more details!"
        </p>
        <a href="mailto:lacc1612@gmail.com" className={styles.contactBtn}>
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
