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
  { href: "/products/1", label: "Акции", name: "iconDiscont" },
  { href: "/products/2", label: "Шариковые" },
  { href: "/products/3", label: "Роликовые" },
  { href: "/products/4", label: "Игольчатые" },
  { href: "/products/5", label: "Сферические" },
  { href: "/products/6", label: "Конические" },
  { href: "/products/7", label: "Однорядные" },
  { href: "/products/8", label: "Двухрядные" },
  { href: "/products/9", label: "Шаринирные" },
  { href: "/products/10", label: "Линейного перемещения" },
  { href: "/products/11", label: "Автомобильные" },
];
