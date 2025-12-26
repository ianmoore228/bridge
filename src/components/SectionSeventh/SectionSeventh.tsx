import styles from "./SectionSeventh.module.css";
import img1 from "images/SectionSeventh/popup1.png";
import img2 from "images/SectionSeventh/popup2.png";
import iphone from "images/SectionSeventh/iphone.png";
import map from "images/SectionSeventh/map.png";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const SectionSeventh = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });
  const [ isTopRendered, setIsTopRendered ] = useState(false)
  const [ isBottomRendered, setIsBottomRendered ] = useState(false)

  const ref = useRef(null);

  const phoneRef = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "0px 0px -40% 0px" });
  
  let isInViewPhone;

  if (isMobile) {
    isInViewPhone = useInView(phoneRef, {
      once: true,
      margin: "0px 0px -8% 0px",
    });
  } else {

    isInViewPhone = useInView(phoneRef, {
      once: true,
      margin: "0px 0px -70% 0px",
    });
  
  }


  setTimeout(() => {
    if (isInView) {
      setIsTopRendered(true);
    }
  }, 600);

  setTimeout(() => {
    if (isInViewPhone) {
      setIsBottomRendered(true);
    }
  }, 1200);
  

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.containerText}>
          <div className={styles.contentTextLeft}>
            <motion.p
              ref={ref}
              initial={{ y: -40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, type: "spring", delay: 0 }}
              className={styles.text}
            >
              Современная цифровая платформа{" "}
              <span className={styles.bold}>МОСТЫ</span> открывает новые
              горизонты для развития жилых комплексов, превращая каждый проект в
              динамичный центр притяжения для жителей, гостей и партнеров.
            </motion.p>
            <motion.p
              initial={{ y: -40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, type: "spring", delay: 0.3 }}
              className={styles.text}
            >
              Интеграция всех сервисов, эффективное управление,
              персонализированный подход и инновационные инструменты позволяют
              застройщику формировать сильный бренд, обеспечивать безупречный
              клиентский опыт и задавать новый стандарт качества на рынке
              недвижимости.
            </motion.p>
            <motion.p
              initial={{ y: -40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, type: "spring", delay: 0.6 }}
              className={styles.text}
            >
              В зависимости от особенностей и потребностей конкретного жилого
              комплекса, цифровую платформу можно гибко доработать и
              масштабировать — подключать дополнительные сервисы, интегрировать
              новые функции, адаптировать интерфейс под любые задачи управляющей
              компании.
            </motion.p>
          </div>
          <div className={styles.contentTextRight}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              initial={{ y: -40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={isTopRendered ? { duration: 0.3, type: "spring", delay: 0 } : { duration: 0.6, type: "spring", delay: 0}}
              src={img1}
              className={styles.imageFirst}
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              initial={{ y: -40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={isTopRendered ? { duration: 0.3, type: "spring", delay: 0 } : { duration: 0.6, type: "spring", delay: 0.3}}
              src={img2}
              className={styles.imageSecond}
            />
          </div>
        </div>
        <div className={styles.containerPhoto} ref={phoneRef}>
          <div className={styles.contentPhotoLeft}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              initial={{ y: -50, opacity: 0 }}
              animate={isInViewPhone ? { y: 0, opacity: 1 } : {}}
              transition={isBottomRendered ? { duration: 0.3, type: "spring", delay: 0 } : { duration: 0.6, type: "spring", delay: 0.6}}
              className={styles.banner}
            >
              <h3 className={styles.bannerTitle}>
                Один комплекс — множество сервисов
              </h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>ЖКХ</li>
                <li className={styles.listItem}>Сервисы</li>
                <li className={styles.listItem}>Оплата</li>
                <li className={styles.listItem}>Бонусы</li>
                <li className={styles.listItem}>Акции</li>
                <li className={styles.listItem}>Управление</li>
              </ul>
            </motion.div>
            <div className={styles.gradient}></div>
            <motion.img
              initial={{ y: 50, opacity: 0 }}
              animate={isInViewPhone ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, type: "spring", delay: 0 }}
              src={iphone}
              className={styles.imgIphone}
            />
          </div>
          <div className={styles.contentPhotoRight}>
            <div className={styles.blackLineThird}></div>
            <div className={styles.blackLineFirst}></div>
            <motion.h4
              initial={{ y: -50, opacity: 0 }}
              animate={isInViewPhone ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, type: "spring", delay: 0.9 }}
              className={styles.titleText}
            >
              Используйте возможности цифровой экосистемы, чтобы масштабировать
              бизнес, укрепить лояльность клиентов и выстроить долгосрочный
              успех вашей компании!
            </motion.h4>
            <motion.img
              whileHover={{ scale: 1.1 }}
              initial={{ y: -50, opacity: 0 }}
              animate={isInViewPhone ? { y: 0, opacity: 1 } : {}}
              transition={isBottomRendered ? { duration: 0.3, type: "spring", delay: 0 } : { duration: 0.6, type: "spring", delay: 1.2}}
              src={map}
              className={styles.imageMap}
            />
          </div>
        </div>
      </div>

      <div className={styles.blackLineSecond}></div>

      <div className={styles.blackLineFourth}></div>
    </section>
  );
};
