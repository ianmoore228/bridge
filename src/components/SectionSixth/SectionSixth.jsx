import styles from "./SectionSixth.module.css";

export const SectionSixth = () => {
  return (
    <section className={styles.sectionSixth}>
      <div className={styles.wrapper}>
        <h1>
          Цифровая платформа{" "}
          <span className={`${styles.logo} logo-bridges`}>МОСТЫ</span> —
          инструмент роста бизнеса, лидерства и продвижения бренда
        </h1>
      </div>
    </section>
  );
};
