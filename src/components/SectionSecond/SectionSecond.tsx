import styles from "./SectionSecond.module.css";
import { data } from "./data";

export const SectionSecond = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Уникальные цифровые решения <br />
          для девелоперов и застройщиков
        </h1>
        <div className={styles.containerCards}>

          {data.map((item) => {
            return (
              <div className={styles.contentCard} key={item.id}>
                <p className={styles.textCard}>{item.text}</p>
                <img
                  draggable={false}
                  className={`${styles.imgCard} ${styles[item.style]}`}
                  src={item.img}
                  alt={item.alt}
                />
                <img
                  draggable={false}
                  className={styles.bgCard}
                  src={item.bg}
                  alt="bg"
                />
              </div>
            )
          })}

        </div>
      </div>
    </section>
  );
};
