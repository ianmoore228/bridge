import styles from "./SectionThird.module.css";
import iphoneImg from "images/sectionThird/iphone.png";
import { data } from "./data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const SectionThird = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "0px 0px -45% 0px" });

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.containerLeft}>
          <motion.h1
            ref={ref}
            initial={{ y: -40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
            className={styles.title}
          >
            Ключевые сервисы и функции цифровой платформы <br />
            для эффективного управления жилыми комплексами
          </motion.h1>
          <div className={styles.listsWrapper}>
            {data.map((item, index) => {
              return (
                <motion.div
                  initial={{ y: -40, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    delay: 0.2 * index,
                  }}
                  key={item.id}
                  className={`${styles.listContent} ${styles[item.style]}`}
                >
                  <motion.img
                    src={item.icon}
                    whileHover={{
                      scale: 1.1,
                      rotate: -20,
                      transition: { duration: 0.3, type: "spring", delay: 0 },
                    }}
                  />
                  <h4 className={styles.listTitle}>{item.title}</h4>
                  <ul className={styles.list}>
                    {item.listItems.map((item, index) => {
                      return (
                        <motion.li
                          initial={{ y: -40, opacity: 0 }}
                          animate={isInView ? { y: 0, opacity: 1 } : {}}
                          transition={{
                            duration: 0.6,
                            type: "spring",
                            delay: 0.2 * index,
                          }}
                          key={index}
                          className={styles.listItem}
                        >
                          {item}
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className={styles.containerRight}>
          <motion.img
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            initial={{ x: 80, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
            src={iphoneImg}
            className={styles.iphoneImg}
          />
        </div>
      </div>
    </section>
  );
};
