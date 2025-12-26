import styles from "./Footer.module.css";
import peopleImg from "images/Footer/people.png";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { ScrollVelocity } from "../animation/ScrollVelocity/ScrollVelocity";
import { useMediaQuery } from "react-responsive";

export const Footer = () => {
  const ref = useRef(null);
  const isMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });
  const text = "МОСТЫ";

  const isInView = useInView(ref, { once: true, margin: "0px 0px -40% 0px" });

  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {isMobile ? (
            <motion.img
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              className={styles.imgPeople}
              src={peopleImg}
            />
          ) : (
            <motion.img
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              className={styles.imgPeople}
              src={peopleImg}
            />
          )}

          <motion.div
            ref={ref}
            initial={{ y: -40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", delay: 0 }}
            className={styles.titleContainer}
          >
            <div className={styles.textContainer}>
              <AnimatePresence>
                {text.split("").map((char, i) => (
                  <motion.p
                    ref={ref}
                    key={i}
                    initial={{ opacity: 0, x: -20, filter: "blur(50px)" }}
                    animate={
                      isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}
                    }
                    exit="hidden"
                    transition={{ duration: 1, delay: i * 0.1, type: "tween" }}
                    className={`${styles.logo} logo-bridges`}
                  >
                    {char === " " ? <span>&nbsp;</span> : char}
                  </motion.p>
                ))}
              </AnimatePresence>
            </div>
            <motion.h1
              className={styles.title}
              initial={{ y: -60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, type: "spring", delay: 0 }}
            >
              Связываем людей, места и идеи
            </motion.h1>
          </motion.div>
        </div>
      </div>
      <ScrollVelocity texts={["0"]} velocity={100} className={styles.bridge} />
    </footer>
  );
};
