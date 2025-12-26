import styles from "./Hero.module.css";
import glow from "images/Hero/glow-orange.png";
import iphone from "images/Hero/iphone.png";
import blackbg from "images/Hero/black-bg.png";
import {
  AnimatePresence,
  motion,
  useInView,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { SplittingText } from "@/components/animation/SplittingText";
import { data } from "./data";
import { useMediaQuery } from "react-responsive";

export const Hero = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  const ref = useRef(null);
  const lightRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -45% 0px" });
  const lightIsInView = useInView(lightRef, { once: true });
  const text = "МОСТЫ";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  const { scrollY } = useScroll({
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
    [0.1, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  let y;

  if (isMobile) {
    y = useTransform(smoothVelocity, [0.5, 0.7], [0.05, -0.05], {
      clamp: false,
    });
  } else {
    y = useTransform(smoothVelocity, [0, 1], [0.2, -0.1], {
      clamp: false,
    });
  }

  return (
    <section className={styles.hero}>
      <motion.img
        ref={lightRef}
        initial={{ opacity: 0 }}
        animate={lightIsInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, type: "tween" }}
        draggable={false}
        className={styles.glowImg}
        src={glow}
        alt="glow"
      />
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          {data.map((item, index) => (
            <SplittingText
              key={item.id}
              className={styles[item.style]}
              delay={250 * index}
              text={item.text}
            />
          ))}
        </div>

        <div className={styles.iphoneContainer}>
          <motion.img
            draggable={false}
            className={styles.iphoneImg}
            src={iphone}
            style={{ y, opacity }}
            alt="iphone"
          />

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
