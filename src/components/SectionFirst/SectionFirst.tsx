import styles from "./SectionFirst.module.css";
import loyalty from "images/SectionFirst/loyalty.svg";
import activity from "images/SectionFirst/activity.svg";
import comfort from "images/SectionFirst/comfort.svg";

export const SectionFirst = () => {
  return (
    <section className={styles.sectionFirst}>
      <div className={styles.wrapper}>
        <div className={styles.containerLeft}>
          <h1 className={styles.title}>
            Добро пожаловать <br />в <span className={styles.bold}>единую</span>{" "}
            цифровую платформу{" "}
            <span className={`${styles.logo} logo-bridges`}>МОСТЫ</span> <br />
            для жилых комплексов!
          </h1>
          <div className={styles.contentText}>
            <p className={styles.text}>
              Ценность бренда и высокий уровень сервиса сегодня определяют успех
              застройщика на рынке.
            </p>
            <p className={styles.text}>
              Создайте уникальное преимущество — объедините жилые комплексы,
              апартаменты, коммерческие пространства и всю инфраструктуру в
              единую цифровую экосистему, где каждый контакт с вашей компанией
              усиливает имидж и лояльность, а качество жизни резидентов
              поднимается на новый уровень.
            </p>
          </div>
        </div>
        <div className={styles.containerRight}>
          <div className={styles.contentLeft}>
            <img
              draggable={false}
              src={loyalty}
              className={`${styles.loyalty} ${styles.contentImage}`}
            />
            <img
              draggable={false}
              src={activity}
              className={`${styles.activity} ${styles.contentImage}`}
            />
          </div>
          <div className={styles.contentRight}>
            <img
              draggable={false}
              src={comfort}
              className={`${styles.comfort} ${styles.contentImage}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
