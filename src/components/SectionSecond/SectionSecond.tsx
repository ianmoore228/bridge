import styles from "./SectionSecond.module.css";
import { data } from "./data";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export const SectionSecond = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -45% 0px" });
  const [isRendered, setIsRendered] = useState(false);

  setTimeout(() => {
    if (isInView) {
      setIsRendered(true);
    }
  }, 600);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <motion.h1
          ref={ref}
          initial={{ y: -40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
          className={styles.title}
        >
          Уникальные цифровые решения <br className={styles.hyphenation} />
          для девелоперов и застройщиков
        </motion.h1>
        <div className={styles.containerCards}>
          {data.map((item, index) => {
            return (
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: -20,
                  transition: { duration: 0.3, type: "spring", delay: 0 },
                }}
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={
                  isRendered
                    ? { duration: 0.3, delay: 0, type: "spring" }
                    : { duration: 0.6, delay: 0.2 * index, type: "spring" }
                }
                className={styles.contentCard}
                key={item.id}
              >
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
