import styles from "./SectionFifth.module.css";
import bridgeImg from "images/SectionFifth/bridge.png";
import { data } from "./data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollVelocity } from "../animation/ScrollVelocity/ScrollVelocity";

export const SectionFifth = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "0px 0px -45% 0px" });

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
          Личный кабинет для разных категорий пользователей на цифровой
          платформе:{" "}
          <span className={styles.bold}>особенности и преимущества</span>
        </motion.h1>
        <div className={styles.wrapperCards}>
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
                className={styles.card}
              >
                <img
                  draggable={false}
                  src={item.icon}
                  alt={item.alt}
                  className={styles.icon}
                />
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <p className={styles.cardText}>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <ScrollVelocity texts={["0"]} velocity={100} className={styles.bridge} />
      <div className={styles.bridge}></div>
    </section>
  );
};
