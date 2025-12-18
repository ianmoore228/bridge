import styles from "./SectionSixth.module.css";
import { data } from "./data";
import iphone1 from "images/SectionSixth/iphone_1.png";
import iphone2 from "images/SectionSixth/iphone_2.png";
import redStar from "images/SectionSixth/red_star.png";
import light from "images/SectionSixth/light.png";
import React from "react";
import BlurEffect from "react-progressive-blur";

export const SectionSixth = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Цифровая платформа{" "}
            <span className={`${styles.logo} logo-bridges`}>МОСТЫ</span> —
            инструмент роста бизнеса, лидерства и продвижения бренда
          </h1>
          <div className={styles.listWrapper}>
            <div className={styles.containerLeft}>
              <div className={styles.redLine}></div>
              <div className={styles.listContainer}>
                {data.map((item) => {
                  return (
                    <div className={styles.listItem}>
                      <div className={styles.listItemCircle}></div>
                      <div className={styles.listItemTextContainer}>
                        <h3 className={styles.listItemTitle}>{item.title}</h3>
                        <p className={styles.listItemText}>{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.containerRight}>
              <div
                className={`${styles.blurContainer} ${styles.blurContainerFirst}`}
              >
                <img
                  className={`${styles.redStar} ${styles.redStarFirst}`}
                  src={redStar}
                />
                <BlurEffect
                  className={`${styles.blur} ${styles.blurFirst}`}
                  position="left"
                  intensity={100}
                />
              </div>
              <div
                className={`${styles.blurContainer} ${styles.blurContainerSecond}`}
              >
                <img
                  className={`${styles.redStar} ${styles.redStarSecond}`}
                  src={redStar}
                />
                <BlurEffect
                  className={`${styles.blur} ${styles.blurFirst}`}
                  position="right"
                  intensity={100}
                />
              </div>
              <img
                src={iphone1}
                className={`${styles.iphoneImgFirst} ${styles.iphoneImg}`}
              />
              <img
                src={iphone2}
                className={`${styles.iphoneImgSecond} ${styles.iphoneImg}`}
              />
            </div>
          </div>
        </div>
      </section>

      <img src={light} className={styles.lightImg} />
    </>
  );
};
