import styles from "./Hero.module.css";
import glow from "images/Hero/glow-orange.png";
import iphone from "images/Hero/iphone.png";
import blackbg from "images/Hero/black-bg.png";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react"

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -500px 0px"});
  const text = "МОСТЫ";

  return (
    <section className={styles.hero}>
      <img draggable={false} className={styles.glowImg} src={glow} alt="glow" />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Единая цифровая платформа «
          <span className={`${styles.logo} logo-bridges`}>МОСТЫ</span>» для
          управления жилыми комплексами
        </h1>

        <div className={styles.iphoneContainer}>
          <img
            draggable={false}
            className={styles.iphoneImg}
            src={iphone}
            alt="iphone"
          ></img>
          <div className={styles.textContainer}>
            <AnimatePresence>
              {text.split("").map((char, i) => (
                <motion.p
                ref={ref}
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  exit="hidden"
                  transition={{ duration: 0.5, delay: i * 0.1, type: "tween" }}
                  className={styles.name}
                >
                  {char === " " ? <span>&nbsp;</span> : char}
                </motion.p>
              ))}
            </AnimatePresence>
          </div>
          <img
            draggable={false}
            className={styles.backgroundImg}
            src={blackbg}
          />
        </div>
      </div>
    </section>
  );
};
