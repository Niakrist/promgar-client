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
  { href: "/catalog/1", label: "Акции", name: "iconDiscont" },
  { href: "/catalog/sharikovye", label: "Шариковые" },
  { href: "/catalog/rolikovye", label: "Роликовые" },
  { href: "/catalog/igolchatye", label: "Игольчатые" },
  { href: "/catalog/sfericheskie", label: "Сферические" },
  { href: "/catalog/konicheskie", label: "Конические" },
  { href: "/catalog/2", label: "Однорядные" },
  { href: "/catalog/3", label: "Двухрядные" },
  { href: "/catalog/sharnirnye", label: "Шаринирные" },
  { href: "/catalog/10", label: "Линейного перемещения" },
  { href: "/catalog/11", label: "Автомобильные" },
];
