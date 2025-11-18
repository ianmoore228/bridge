import styles from "./SectionThird.module.css";
import adIcon from "images/sectionThird/icon-ad.svg";
import bookingIcon from "images/sectionThird/icon-booking.svg";
import managementIcon from "images/sectionThird/icon-management.svg";
import loyaltyIcon from "images/sectionThird/icon-loyalty.svg";
import iphoneImg from "images/sectionThird/iphone.png";

export const SectionThird = () => {
  return (
    <section className={styles.sectionThird}>
      <div className={styles.wrapper}>
        <div className={styles.containerLeft}>
          <h1 className={styles.title}>
            Ключевые сервисы и функции цифровой платформы <br />
            для эффективного управления жилыми комплексами
          </h1>
          <div className={styles.listsWrapper}>
            <div className={styles.listsContainer}>
              <div className={`${styles.listContent} ${styles.listBooking}`}>
                <img draggable={false} src={bookingIcon} />
                <h4 className={styles.listTitle}>Система бронирования услуг</h4>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Централизованное онлайн-бронирование всех услуг (SPA,
                    фитнес, коворкинг, коммерческие услуги и др.)
                  </li>
                  <li className={styles.listItem}>
                    Интеграция с расписанием, оперативная онлайн-оплата, учет
                    загрузки зон
                  </li>
                </ul>
              </div>

              <div className={`${styles.listContent} ${styles.listAd}`}>
                <img draggable={false} src={adIcon} />
                <h4 className={styles.listTitle}>
                  Рекламная платформа для бизнеса <br />и партнёров
                </h4>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Размещение акций, специальных предложений <br />и рекламы
                    для резидентов и гостей комплекса
                  </li>
                  <li className={styles.listItem}>
                    Персонализированные предложения для разных групп
                    пользователей
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.listsContainer}>
              <div className={`${styles.listContent} ${styles.listLoyalty}`}>
                <img draggable={false} src={loyaltyIcon} />
                <h4 className={styles.listTitle}>Система лояльности</h4>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Бонусы за оплату, бронирование и активность
                  </li>
                  <li className={styles.listItem}>
                    Привилегии, скидки, подарки и акции
                  </li>
                  <li className={styles.listItem}>Разные уровни участника</li>
                  <li className={styles.listItem}>
                    Реферальная программа для увеличения вовлеченности жильцов
                  </li>
                </ul>
              </div>

              <div className={`${styles.listContent} ${styles.listManagement}`}>
                <img draggable={false} src={managementIcon} />
                <h4 className={styles.listTitle}>
                  Управление ЖКХ через цифровую платформу
                </h4>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Онлайн-оплата коммунальных и сервисных услуг
                  </li>
                  <li className={styles.listItem}>
                    Получение и хранение счетов, история платежей
                  </li>
                  <li className={styles.listItem}>
                    Мгновенные уведомления о важных событиях, новостях и
                    объявлениях управляющей компании
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerRight}>
          <img draggable={false} src={iphoneImg} className={styles.iphoneImg} />
        </div>
      </div>
    </section>
  );
};
