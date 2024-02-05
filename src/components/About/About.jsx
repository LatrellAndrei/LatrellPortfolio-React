import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/AboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>IT Graduate</h3>
              <p>
                I graduated with a Bachelor of Science in Information
                Technology, majoring in Web Technologies, from the University of
                the Cordilleras.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I am a front-end Web Developer with experience in creating
                responsive and optimized sites. Additionally, I have a
                background in PHP, utilizing MySQL with Laravel.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI  icon" />
            <div className={styles.aboutItemText}>
              <h3>Tech-Guy</h3>
              <p>
                I enjoy learning about technologies, particularly in the realm
                of Web Technologies and staying updated with new trends in the
                IT industry.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
