import styles from "./SectionFirst.module.css";
import comfort from "images/SectionFirst/comfort.svg";
import loyalty from "images/SectionFirst/loyalty.svg";
import activity from "images/SectionFirst/activity.svg";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export const SectionFirst = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -45% 0px" });
  const [isRendered, setIsRendered] = useState(false);

  setTimeout(() => {
    if (isInView) {
      setIsRendered(true);
    }
  }, 600);

  return (
    <section className={styles.sectionFirst}>
      <div className={styles.wrapper}>
        <div className={styles.containerLeft}>
          <motion.h1
            ref={ref}
            initial={{ y: -40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
            className={styles.title}
          >
            Добро пожаловать <br className={styles.hyphenation} />в{" "}
            <span className={styles.bold}>единую</span> цифровую платформу{" "}
            <span className={`${styles.logo} logo-bridges`}>МОСТЫ</span>{" "}
            <br className={styles.hyphenation} />
            для жилых комплексов!
          </motion.h1>
          <div className={styles.contentText}>
            <motion.p
              initial={{ y: -40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
              className={styles.text}
            >
              Ценность бренда и высокий уровень сервиса сегодня определяют успех
              застройщика на рынке.
            </motion.p>
            <motion.p
              initial={{ y: -40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              className={styles.text}
            >
              Создайте уникальное преимущество — объедините жилые комплексы,
              апартаменты, коммерческие пространства и всю инфраструктуру в
              единую цифровую экосистему, где каждый контакт с вашей компанией
              усиливает имидж и лояльность, а качество жизни резидентов
              поднимается на новый уровень.
            </motion.p>
          </div>
        </div>
        <div className={styles.containerRight}>
          <div className={styles.contentLeft}>

            <motion.img
              whileHover={{
                scale: 1.07,
                transition: { duration: 0.3, type: "spring", delay: 0 },
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0, type: "spring" }}
              draggable={false}
              src={loyalty}
              className={`${styles.loyalty} ${styles.contentImage}`}
            />
            <motion.img
              whileHover={{
                scale: 1.07,
                transition: { duration: 0.3, type: "spring", delay: 0 },
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={
                isRendered
                  ? { duration: 0.3, delay: 0, type: "spring" }
                  : { duration: 0.6, delay: 0.3, type: "spring" }
              }
              draggable={false}
              src={activity}
              className={`${styles.activity} ${styles.contentImage}`}
            />
          </div>
          <div className={styles.contentRight}>
            <motion.img
              whileHover={{
                scale: 1.07,
                transition: { duration: 0.3, type: "spring", delay: 0 },
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={
                isRendered
                  ? { duration: 0.3, delay: 0, type: "spring" }
                  : { duration: 0.6, delay: 0.6, type: "spring" }
              }
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
