import styles from "./Footer.module.css";
import peopleImg from "images/Footer/people.png";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img className={styles.imgPeople} src={peopleImg} />
          <h1 className={styles.title}>
            <span className={`${styles.logo} logo-bridges`}>МОСТЫ</span>
            <br /> Связываем людей, места и идеи
          </h1>
        </div>
      </div>
      <div className={styles.bridge} />
    </footer>
  );
};
