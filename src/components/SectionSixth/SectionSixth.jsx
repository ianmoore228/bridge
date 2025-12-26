import styles from "./SectionSixth.module.css";
import { data } from "./data";
import iphone1 from "images/SectionSixth/iphone_1.png";
import iphone2 from "images/SectionSixth/iphone_2.png";
import redStar from "images/SectionSixth/red_star.png";
import light from "images/SectionSixth/light.png";
import React from "react";
import BlurEffect from "react-progressive-blur";
import {
  motion,
  useInView,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const SectionSixth = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });
  const [isRendered, setIsRendered] = useState(false);
  const ref = useRef(null);
  let isInView;
  if (isMobile) {
    isInView = useInView(ref, { once: true, margin: "0px 0px -9% 0px" });
  } else {
    isInView = useInView(ref, { once: true, margin: "0px 0px -40% 0px" });
  }
 
  setTimeout(() => {
    if (isInView) {
      setIsRendered(true);
    }
  }, 1000);

  const { scrollY } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  const scrollVelocity = useVelocity(scrollY);

let smoothVelocity;


if (isMobile) {
  smoothVelocity = useSpring(scrollVelocity, {
    damping: 15,
    stiffness: 4,
  });
} else {
  smoothVelocity = useSpring(scrollVelocity, {
    damping: 8,
    stiffness: 4,
  });
}


  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.9, 1],
    [0.8, 1, 1, 0.8]
  );
  let y1, y2;

  if (isMobile) {
    y1 = useTransform(
      smoothVelocity,
      [0.3, 0.8],
      [
        0.02 * (Math.random() * (0.02 - 0.02 + 1)) - 0.02,
        -0.02 * (Math.random() * (0.02 - 0.02 + 1)) - 0.02,
      ],
      {
        clamp: false,
      }
    );
    y2 = useTransform(
      smoothVelocity,
      [0.3, 0.8],
      [
        0.02 * (Math.random() * (0.02 - 0.02 + 1)) - 0.02,
        -0.02 * (Math.random() * (0.02 - 0.02 + 1)) - 0.02,
      ],
      {
        clamp: false,
      }
    );
  } else {
    y1 = useTransform(
      smoothVelocity,
      [0, 1],
      [
        0.1 * (Math.random() * (2 - 0.1 + 1)) + 0.1,
        -0.1 * (Math.random() * (2 - 0.1 + 1)) + 0.1,
      ],
      {
        clamp: false,
      }
    );
  
    y2 = useTransform(
      smoothVelocity,
      [0, 1],
      [
        0.1 * (Math.random() * (2 - 0.1 + 1)) + 0.1,
        -0.1 * (Math.random() * (2 - 0.1 + 1)) + 0.1,
      ],
      {
        clamp: false,
      }
    );
  
  }

 
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
            className={styles.title}
          >
            Цифровая платформа{" "}
            <span className={`${styles.logo} logo-bridges`}>МОСТЫ</span> —
            инструмент роста бизнеса, лидерства и продвижения бренда
          </motion.h1>
          <div ref={ref} className={styles.listWrapper}>
            <div className={styles.containerLeft}>
              <div className={styles.redLine}></div>
              <div className={styles.listContainer}>
                {data.map((item, index) => {
                  return (
                    <motion.div
                      initial={{ y: -40, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : {}}
                      transition={
                        isRendered
                          ? { duration: 0.3, delay: 0, type: "spring" }
                          : {
                              duration: 0.6,
                              delay: 0.2 * index,
                              type: "spring",
                            }
                      }
                      whileHover={{ scale: 1.1 }}
                      key={item.id}
                      className={styles.listItem}
                    >
                      <div className={styles.listItemCircle}></div>
                      <div className={styles.listItemTextContainer}>
                        <h3 className={styles.listItemTitle}>{item.title}</h3>
                        <p className={styles.listItemText}>{item.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className={styles.containerRight}>
              <div
                className={`${styles.blurContainer} ${styles.blurContainerFirst}`}
              >
                <motion.img
                  style={{ opacity }}
                  className={`${styles.redStar} ${styles.redStarFirst}`}
                  src={redStar}
                />
                <BlurEffect
                  className={`${styles.blur} ${styles.blurFirst}`}
                  position="left"
                  intensity={100}
                />
              </div>
              <div
                className={`${styles.blurContainer} ${styles.blurContainerSecond}`}
              >
                <motion.img
                  style={{ opacity }}
                  className={`${styles.redStar} ${styles.redStarSecond}`}
                  src={redStar}
                />
                <BlurEffect
                  className={`${styles.blur} ${styles.blurSecond}`}
                  position="right"
                  intensity={100}
                />
              </div>
              <motion.img
                initial={{ opacity: 0 }}
                animate={isRendered ? { opacity: 1 } : {}}
                style={{ y: y1 }}
                src={iphone1}
                className={`${styles.iphoneImgFirst} ${styles.iphoneImg}`}
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={isRendered ? { opacity: 1 } : {}}
                style={{ y: y2 }}
                src={iphone2}
                className={`${styles.iphoneImgSecond} ${styles.iphoneImg}`}
              />
            </div>
          </div>
        </div>
      </section>

      <img src={light} className={styles.lightImg} />
    </>
  );
};
