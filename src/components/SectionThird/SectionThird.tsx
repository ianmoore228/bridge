import styles from "./SectionThird.module.css";
import iphoneImg from "images/sectionThird/iphone.png";
import { data } from "./data";

export const SectionThird = () => {
  return (
    <section className={styles.sectionThird}>
      <div className={styles.wrapper}>
        <div className={styles.containerLeft}>
          <h1 className={styles.title}>
            Ключевые сервисы и функции цифровой платформы <br />
            для эффективного управления жилыми комплексами
          </h1>
          <div className={styles.listsWrapper}>
            {data.map((item) => {
              return (
                <div className={`${styles.listContent} ${styles[item.style]}`}>
                  <img draggable={false} src={item.icon} />
                  <h4 className={styles.listTitle}>{item.title}</h4>
                  <ul className={styles.list}>
                    {item.listItems.map((listItem) => {
                      return <li className={styles.listItem}>{listItem}</li>;
                    })}
                  </ul>
                </div>
              );
            })}

          </div>
        </div>
        <div className={styles.containerRight}>
          <img draggable={false} src={iphoneImg} className={styles.iphoneImg} />
        </div>
      </div>
    </section>
  );
};
