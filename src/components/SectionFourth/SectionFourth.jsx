import styles from "./SectionFourth.module.css";
import sphereImg1 from "images/SectionFourth/sphere-1.png";
import sphereImg2 from "images/SectionFourth/sphere-2.png";
import sphereImg3 from "images/SectionFourth/sphere-3.png";
import sphereImg4 from "images/SectionFourth/sphere-4.png";
import peopleImg1 from "images/SectionFourth/people-1.png";
import peopleImg2 from "images/SectionFourth/people-2.png";
import { data } from "./data";
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

export const SectionFourth = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });
  const ref = useRef(null);
  const [isRendered, setIsRendered] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -45% 0px" });
  const sphereIsInView = useInView(ref, { once: true });

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
      damping: 10,
      stiffness: 4,
    });
  }

  const dragConstraints = {
    left: -50,
    right: 50,
  };

  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.7, 1],
    [0.5, 1, 1, 0.5]
  );

  let y1, y2, y3, y4;

  if (isMobile) {
    y1 = useTransform(smoothVelocity, [0.3, 0.8], [0.04, -0.04], {
      clamp: false,
    });
    y2 = useTransform(
      smoothVelocity,
      [0.3, 0.8],
      [
        0.04 * (Math.random() * (0.04 + 0.04 + 1)) - 0.04,
        -0.04 * (Math.random() * (0.04 + 0.04 + 1)) - 0.04,
      ],
      {
        clamp: false,
      }
    );
    y3 = useTransform(
      smoothVelocity,
      [0.3, 0.8],
      [
        0.04 * (Math.random() * (1 - 0.04 + 1)) + 0.1,
        -0.04 * (Math.random() * (1 - 0.04 + 1)) + 0.1,
      ],
      {
        clamp: false,
      }
    );
    y4 = useTransform(
      smoothVelocity,
      [0.3, 0.8],
      [
        0.04 * (Math.random() * (1 - 0.04 + 1)) + 0.1,
        -0.04 * (Math.random() * (1 - 0.04 + 1)) + 0.1,
      ],
      {
        clamp: false,
      }
    );
  } else {
    y1 = useTransform(smoothVelocity, [0.3, 0.8], [0.1, -0.1], {
      clamp: false,
    });
    y2 = useTransform(
      smoothVelocity,
      [0.3, 0.8],
      [
        0.1 * (Math.random() * (1 - 0.1 + 1)) + 0.1,
        -0.1 * (Math.random() * (1 - 0.1 + 1)) + 0.1,
      ],
      {
        clamp: false,
      }
    );
    y3 = useTransform(
      smoothVelocity,
      [0.3, 0.8],
      [
        0.1 * (Math.random() * (1 - 0.1 + 1)) + 0.1,
        -0.1 * (Math.random() * (1 - 0.1 + 1)) + 0.1,
      ],
      {
        clamp: false,
      }
    );
    y4 = useTransform(
      smoothVelocity,
      [0.3, 0.8],
      [
        0.1 * (Math.random() * (1 - 0.1 + 1)) + 0.1,
        -0.1 * (Math.random() * (1 - 0.1 + 1)) + 0.1,
      ],
      {
        clamp: false,
      }
    );
  }

  setTimeout(() => {
    if (isInView) {
      setIsRendered(true);
    }
  }, 300);

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
          Сегментация и целевые группы пользователей цифровой платформы{" "}
          <span className={`${styles.logo} logo-bridges`}>МОСТЫ</span>
        </motion.h1>
        <div className={styles.listWrapper}>
          <motion.img
            initial={{ opacity: 0 }}
            animate={isRendered ? { opacity: 1 } : {}}
            drag
            dragConstraints={dragConstraints}
            style={{ y: y1 }}
            draggable={false}
            src={sphereImg1}
            className={`${styles.sphere} ${styles.sphereFirst}`}
            alt="sphere"
          />

          {data.map((item, index) => {
            return (
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, type: "spring", delay: 0 },
                }}
                initial={{ y: -40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={
                  isRendered
                    ? { duration: 0.3, delay: 0, type: "spring" }
                    : { duration: 0.6, delay: 0.6, type: "spring" }
                }
                key={item.id}
                className={styles.listContainer}
              >
                <div className={styles.listContent}>
                  <h4 className={styles.listTitle}>{item.title}</h4>
                  <ul className={styles.list}>
                    {item.listItems.map((listItem, index) => {
                      return (
                        <li key={index} className={styles.listItem}>
                          {listItem}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <img
                  draggable={false}
                  src={item.img}
                  alt="people"
                  className={styles.listImage}
                />
              </motion.div>
            );
          })}
          {isMobile ? (
            <>
              <motion.img
                initial={{ opacity: 0 }}
                animate={isRendered ? { opacity: 1 } : {}}
                style={{ y: y2 }}
                draggable={false}
                src={sphereImg2}
                className={`${styles.sphere} ${styles.sphereSecond}`}
                alt="sphere"
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={isRendered ? { opacity: 1 } : {}}
                style={{ y: y3 }}
                draggable={false}
                src={sphereImg3}
                className={`${styles.sphere} ${styles.sphereThird}`}
                alt="sphere"
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={isRendered ? { opacity: 1 } : {}}
                style={{ y: y4 }}
                draggable={false}
                src={sphereImg4}
                className={`${styles.sphere} ${styles.sphereFourth}`}
                alt="sphere"
              />
            </>
          ) : (
            <>
              <motion.img
                initial={{ opacity: 0 }}
                animate={isRendered ? { opacity: 1 } : {}}
                drag
                dragConstraints={dragConstraints}
                style={{ y: y2 }}
                draggable={false}
                src={sphereImg2}
                className={`${styles.sphere} ${styles.sphereSecond}`}
                alt="sphere"
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={isRendered ? { opacity: 1 } : {}}
                drag
                dragConstraints={dragConstraints}
                style={{ y: y3 }}
                draggable={false}
                src={sphereImg3}
                className={`${styles.sphere} ${styles.sphereThird}`}
                alt="sphere"
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={isRendered ? { opacity: 1 } : {}}
                drag
                dragConstraints={dragConstraints}
                style={{ y: y4 }}
                draggable={false}
                src={sphereImg4}
                className={`${styles.sphere} ${styles.sphereFourth}`}
                alt="sphere"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
