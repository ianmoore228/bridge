import styles from "./SectionThird.module.css";
import iphoneImg from "images/sectionThird/iphone.png";
import { data } from "./data";

export const SectionThird = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.containerLeft}>
          <h1 className={styles.title}>
            Ключевые сервисы и функции цифровой платформы <br />
            для эффективного управления жилыми комплексами
          </h1>
          <div className={styles.listsWrapper}>
            {data.map((item) => {
              return (
                <div key={item.id} className={`${styles.listContent} ${styles[item.style]}`}>
                  <img src={item.icon} />
                  <h4 className={styles.listTitle}>{item.title}</h4>
                  <ul className={styles.list}>
                    {item.listItems.map((listItem, index) => {
                      return <li key={index} className={styles.listItem}>{listItem}</li>;
                    })}
                  </ul>
                </div>
              );
            })}

          </div>
        </div>
        <div className={styles.containerRight}>
          <img src={iphoneImg} className={styles.iphoneImg} />
        </div>
      </div>
    </section>
  );
};
