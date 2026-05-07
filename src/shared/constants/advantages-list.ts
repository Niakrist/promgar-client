import { TIcons } from "../ui/Icon/Icon";

export type AdvantagesList = {
  id: number;
  title: string;
  description: string;
  iconName: TIcons;
};

export const advantagesList: AdvantagesList[] = [
  {
    id: 1,
    title: "Свой склад",
    description:
      "Более 50 000 позиций в наличии. Отгрузка день в день при заказе до 15:00.",
    iconName: "iconWarehouse",
  },
  {
    id: 2,
    title: "Оригинал и сертификаты",
    description:
      "Работаем напрямую с SKF, FAG, NSK, ГПЗ. Предоставляем паспорта качества.",
    iconName: "iconCertificates",
  },
  {
    id: 3,
    title: "Помощь с аналогами",
    description: "Подберём замену по чертежу, фото или размерам",
    iconName: "iconAnalogues",
  },
  {
    id: 4,
    title: "Отсрочка платежа",
    description:
      "Индивидуальные условия для постоянных клиентов и крупных оптовиков.",
    iconName: "iconDeferred",
  },
  {
    id: 5,
    title: "Доставка по РФ и СНГ",
    description:
      "Любые объёмы: от коробки до фуры. ТК «Деловые линии», ПЭК, СДЭК.",
    iconName: "iconDelivery",
  },
  {
    id: 6,
    title: "Резервирование под план",
    description:
      "Зафиксируем цену и количество под ваш годовой контракт. Отгружаем партиями по графику.",
    iconName: "iconReservation",
  },
  {
    id: 7,
    title: "Входной контроль качества",
    description:
      "Каждая партия проверяется на соответствие заявленным допускам и классу точности.",
    iconName: "iconControl",
  },
  {
    id: 8,
    title: "Экспортные поставки",
    description:
      "Оформление документов для стран Таможенного союза и дальнего зарубежья.",
    iconName: "iconExport",
  },
];
