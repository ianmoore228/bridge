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
      <section className={styles.sectionSixth}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Цифровая платформа{" "}
            <span className={`${styles.logo} logo-bridges`}>МОСТЫ</span> —
            инструмент роста бизнеса, лидерства и продвижения бренда
          </h1>
          <div className={styles.listWrapper}>
            <div className={styles.redLine}></div>
            <div className={styles.containerLeft}>
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
            <div className={styles.containerRight}>
            <div className={styles.blurContainerFirst}>
              <img className={styles.redStarFirst} src={redStar} />
              <BlurEffect  className={styles.blurFirst} position="left" intensity={100} />
              </div>
              <img className={styles.redStarSecond} src={redStar} />
              <img src={iphone1} className={styles.iphoneImgFirst} />
              <img src={iphone2} className={styles.iphoneImgSecond} />
            </div>
          </div>
        </div>
      </section>

      <img src={light} className={styles.lightImg}/>
    </>
  );
};
