import styles from "./SectionSeventh.module.css";
import img1 from "images/SectionSeventh/popup1.png";
import img2 from "images/SectionSeventh/popup2.png";
import iphone from "images/SectionSeventh/iphone.png";
import map from "images/SectionSeventh/map.png";

export const SectionSeventh = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.containerText}>
          <div className={styles.contentTextLeft}>
            <p className={styles.text}>
              Современная цифровая платформа{" "}
              <span className={styles.bold}>МОСТЫ</span> открывает новые
              горизонты для развития жилых комплексов, превращая каждый проект в
              динамичный центр притяжения для жителей, гостей и партнеров.
            </p>
            <p className={styles.text}>
              Интеграция всех сервисов, эффективное управление,
              персонализированный подход и инновационные инструменты позволяют
              застройщику формировать сильный бренд, обеспечивать безупречный
              клиентский опыт и задавать новый стандарт качества на рынке
              недвижимости.
            </p>
            <p className={styles.text}>
              В зависимости от особенностей и потребностей конкретного жилого
              комплекса, цифровую платформу можно гибко доработать и
              масштабировать — подключать дополнительные сервисы, интегрировать
              новые функции, адаптировать интерфейс под любые задачи управляющей
              компании.
            </p>
          </div>
          <div className={styles.contentTextRight}>
            <img src={img1} className={styles.imageFirst} />
            <img src={img2} className={styles.imageSecond} />
          </div>
        </div>
        <div className={styles.containerPhoto}>
          <div className={styles.contentPhotoLeft}>
            <div className={styles.banner}>
              <h3 className={styles.bannerTitle}>Один комплекс — множество сервисов</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>ЖКХ</li>
                <li className={styles.listItem}>Сервисы</li>
                <li className={styles.listItem}>Оплата</li>
                <li className={styles.listItem}>Бонусы</li>
                <li className={styles.listItem}>Акции</li>
                <li className={styles.listItem}>Управление</li>
              </ul>
            </div>
            <div className={styles.gradient}></div>
            <img src={iphone} className={styles.imgIphone}/>
          </div>
          <div className={styles.contentPhotoRight}>
            <h4 className={styles.titleText}>
              Используйте возможности цифровой экосистемы, чтобы масштабировать
              бизнес, укрепить лояльность клиентов и выстроить долгосрочный
              успех вашей компании!
            </h4>
            <img src={map} className={styles.imageMap} />
          </div>
        </div>
      </div>
      <div className={styles.blackLineFirst}></div>
      <div className={styles.blackLineSecond}></div>
      <div className={styles.blackLineThird}></div>
      <div className={styles.blackLineFourth}></div>
    </section>
  );
};
