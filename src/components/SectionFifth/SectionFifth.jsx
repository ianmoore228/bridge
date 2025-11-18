import styles from "./SectionFifth.module.css";
import homeownerIcon from "images/SectionFifth/icon-homeowner.svg";
import visitorIcon from "images/SectionFifth/icon-visitor.svg";
import adIcon from "images/SectionFifth/icon-ad.svg";
import managementIcon from "images/SectionFifth/icon-management.svg";
import tenantIcon from "images/SectionFifth/icon-tenant.svg";
import bridgeImg from "images/SectionFifth/bridge.png";

export const SectionFifth = () => {
  return (
    <section className={styles.sectionFifth}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Личный кабинет для разных категорий пользователей на цифровой
          платформе:{" "}
          <span className={styles.bold}>особенности и преимущества</span>
        </h1>
        <div className={styles.wrapperCards}>
          <div className={styles.card}>
            <img
              draggable={false}
              src={homeownerIcon}
              alt="homeownerIcon"
              className={styles.icon}
            />
            <h4 className={styles.cardTitle}>Для жильцов</h4>
            <p className={styles.cardText}>
              Управление счетами, бронирование сервисов, история платежей,
              поддержка, коммуникация с управляющей компанией
            </p>
          </div>
          <div className={styles.card}>
            <img draggable={false} src={visitorIcon} alt="visitorIcon" />
            <h4 className={styles.cardTitle}>Для посетителей комплекса</h4>
            <p className={styles.cardTexte}>
              Кабинет для внешних пользователей — бронирование услуг,
              онлайн-оплата, история заказов, программа лояльности,
              спецпредложения
            </p>
          </div>
          <div className={styles.card}>
            <img draggable={false} src={adIcon} alt="adIcon" />
            <h4 className={styles.cardTitle}>Для рекламодателей</h4>
            <p className={styles.cardText}>
              Кабинет для запуска и управления рекламными кампаниями, настройки
              аудитории, отслеживания эффективности и анализа статистики
            </p>
          </div>
          <div className={styles.card}>
            <img draggable={false} src={managementIcon} alt="managementIcon" />
            <h4 className={styles.cardTitle}>Для управляющей компании</h4>
            <p className={styles.cardText}>
              Администрирование сервисов и объектов, рассылка уведомлений,
              аналитика использования услуг, коммуникация с резидентами
            </p>
          </div>
          <div className={styles.card}>
            <img draggable={false} src={tenantIcon} alt="tenantIcon" />
            <h4 className={styles.cardTitle}>Для коммерческих арендаторов</h4>
            <p className={styles.cardText}>
              Кабинет для владельцев сервисных и коммерческих площадок —
              управление расписанием и заказами, статистика по посещениям,
              акции, связь с клиентами и УК
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bridge}></div>
    </section>
  );
};
