import styles from "./Hero.module.css";
import glow from "images/Hero/glow-orange.png";
import iphone from "images/Hero/iphone.png";
import blackbg from "images/Hero/black-bg.png";

export const Hero = () => {
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
          <h1 className={styles.name}>МОСТЫ</h1>
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
