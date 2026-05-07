import { TIcons } from "@/shared/ui/Icon/Icon";

type NavLink = {
  href: string;
  label: string;
  name?: TIcons;
};

export const topHeaderLinks: NavLink[] = [
  { href: "/delivery", label: "Доставка и оплата" },
  { href: "/return", label: "Возврат" },
  { href: "/about", label: "О компании" },
  { href: "/contacts", label: "Контакты" },
];

export const bearingHeaderLinks: NavLink[] = [
  { href: "/1", label: "Акции", name: "iconDiscont" },
  { href: "/2", label: "Шариковые" },
  { href: "/3", label: "Роликовые" },
  { href: "/4", label: "Игольчатые" },
  { href: "/5", label: "Сферические" },
  { href: "/6", label: "Конические" },
  { href: "/7", label: "Однорядные" },
  { href: "/8", label: "Двухрядные" },
  { href: "/9", label: "Шаринирные" },
  { href: "/10", label: "Линейного перемещения" },
  { href: "/11", label: "Автомобильные" },
];
