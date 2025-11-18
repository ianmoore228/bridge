import styles from "./SectionFourth.module.css";
import sphereImg1 from "images/SectionFourth/sphere-1.png";
import sphereImg2 from "images/SectionFourth/sphere-2.png";
import sphereImg3 from "images/SectionFourth/sphere-3.png";
import sphereImg4 from "images/SectionFourth/sphere-4.png";
import peopleImg1 from "images/SectionFourth/people-1.png";
import peopleImg2 from "images/SectionFourth/people-2.png";

export const SectionFourth = () => {
  return (
    <section className={styles.SectionFourth}>
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
          <div className={styles.listContainer}>
            <div className={styles.listContent}>
              <h4 className={styles.listTitle}>Резиденты жилых комплексов</h4>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  Доступ к сервисам по управлению личным жильём и счетами ЖКХ
                </li>
                <li className={styles.listItem}>
                  Онлайн-оплата коммунальных и прочих услуг
                </li>
                <li className={styles.listItem}>
                  Бронирование и оплата всех сервисов, размещённых на территории
                  жилого комплекса (SPA, фитнес, коворкинг, коммерческие услуги
                  и др.)
                </li>
                <li className={styles.listItem}>
                  Персонализированная система лояльности с индивидуальными
                  предложениями и привилегиями для жильцов
                </li>
                <li className={styles.listItem}>
                  Оперативные уведомления о важных событиях, акциях и новостях
                  комплекса
                </li>
              </ul>
            </div>
            <img
              draggable={false}
              src={peopleImg1}
              alt="people"
              className={styles.listImage}
            />
          </div>

          <div className={styles.listContainer}>
            <div className={styles.listContent}>
              <h4 className={styles.listTitle}>Внешние пользователи</h4>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  Доступ к бронированию коммерческих услуг, расположенных на
                  территории жилого комплекса (SPA, рестораны, магазины и другие
                  сервисы)
                </li>
                <li className={styles.listItem}>
                  Удобное онлайн-бронирование, оплата, участие в акциях
                </li>
                <li className={styles.listItem}>
                  Участие в программе лояльности и получение уведомлений
                </li>
              </ul>
            </div>
            <img
              draggable={false}
              src={peopleImg2}
              alt="people"
              className={styles.listImage}
            />
          </div>

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
