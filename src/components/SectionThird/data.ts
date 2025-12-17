import adIcon from "images/sectionThird/icon-ad.svg";
import bookingIcon from "images/sectionThird/icon-booking.svg";
import managementIcon from "images/sectionThird/icon-management.svg";
import loyaltyIcon from "images/sectionThird/icon-loyalty.svg";

export const data = [
  {
    id: 1,
    icon: bookingIcon,
    style: "listBooking",
    title: "Система бронирования услуг",
    listItems: [
      "Централизованное онлайн-бронирование всех услуг (SPA, фитнес, коворкинг, коммерческие услуги и др.",
      "Интеграция с расписанием, оперативная онлайн-оплата, учет загрузки зон",
    ],
  },
  {
    id: 2,
    icon: adIcon,
    style: "listAd",
    title: "Рекламная платформа для бизнеса и партнёров",
    listItems: [
      "Размещение акций, специальных предложений и рекламы для резидентов и гостей комплекса",
      "Персонализированные предложения для разных групп пользователей",
    ],
  },
  {
    id: 3,
    icon: loyaltyIcon,
    style: "listLoyalty",
    title: "Система лояльности",
    listItems: [
      "Бонусы за оплату, бронирование и активность",
      "Привилегии, скидки, подарки и акции",
      "Разные уровни участника",
      "Реферальная программа для увеличения вовлеченности жильцов",
    ],
  },
  {
    id: 4,
    icon: managementIcon,
    style: "listManagement",
    title: "Управление ЖКХ через цифровую платформу",
    listItems: [
      "Онлайн-оплата коммунальных и сервисных услуг",
      "Получение и хранение счетов, история платежей",
      "Мгновенные уведомления о важных событиях, новостях и объявлениях управляющей компании",
    ],
  },
];
