import styles from "./SectionFourth.module.css";
import sphereImg1 from "images/SectionFourth/sphere-1.png";
import sphereImg2 from "images/SectionFourth/sphere-2.png";
import sphereImg3 from "images/SectionFourth/sphere-3.png";
import sphereImg4 from "images/SectionFourth/sphere-4.png";
import peopleImg1 from "images/SectionFourth/people-1.png";
import peopleImg2 from "images/SectionFourth/people-2.png";
import { data } from "./data";

export const SectionFourth = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Сегментация и целевые группы пользователей цифровой платформы{" "}
          <span className={`${styles.logo} logo-bridges`}>МОСТЫ</span>
        </h1>
        <div className={styles.listWrapper}>
          <img
            draggable={false}
            src={sphereImg1}
            className={`${styles.sphere} ${styles.sphereFirst}`}
            alt="sphere"
          />

          {data.map((item) => {
            return (
              <div className={styles.listContainer}>
                <div className={styles.listContent}>
                  <h4 className={styles.listTitle}>{item.title}</h4>
                  <ul className={styles.list}>
                    {item.listItems.map((listItem) => {
                      return <li className={styles.listItem}>{listItem}</li>;
                    })}
                  </ul>
                </div>
                <img
                  draggable={false}
                  src={item.img}
                  alt="people"
                  className={styles.listImage}
                />
              </div>
            );
          })}

          <img
            draggable={false}
            src={sphereImg2}
            className={`${styles.sphere} ${styles.sphereSecond}`}
            alt="sphere"
          />
          <img
            draggable={false}
            src={sphereImg3}
            className={`${styles.sphere} ${styles.sphereThird}`}
            alt="sphere"
          />
          <img
            draggable={false}
            src={sphereImg4}
            className={`${styles.sphere} ${styles.sphereFourth}`}
            alt="sphere"
          />
        </div>
      </div>
    </section>
  );
};
