import styles from "./SectionFifth.module.css";
import bridgeImg from "images/SectionFifth/bridge.png";
import { data } from "./data";

export const SectionFifth = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Личный кабинет для разных категорий пользователей на цифровой
          платформе:{" "}
          <span className={styles.bold}>особенности и преимущества</span>
        </h1>
        <div className={styles.wrapperCards}>
          {data.map((item) => {
            return (
              <div key={item.id} className={styles.card}>
                <img
                  draggable={false}
                  src={item.icon}
                  alt={item.alt}
                  className={styles.icon}
                />
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <p className={styles.cardText}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.bridge}></div>
    </section>
  );
};
