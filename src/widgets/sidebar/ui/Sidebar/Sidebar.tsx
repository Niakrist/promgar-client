import styles from "./Sidebar.module.css";
import { Htag } from "@/shared/ui";
import { FilterCheckBox } from "@/features";

const rowCountIdList = [
  { id: "rowCountIdList1", name: "Однорядные" },
  { id: "rowCountIdList2", name: "Двухрядные" },
  { id: "rowCountIdList3", name: "Трехрядные" },
  { id: "rowCountIdList4", name: "Четырехрядные" },
  { id: "rowCountIdList5", name: "Шестирядные" },
  { id: "rowCountIdList6", name: "Многорядные" },
];

const bearingDdesignList = [
  { id: "1", name: "Миниатюрные" },
  { id: "2", name: "Самоустанавливающиеся" },
  { id: "3", name: "Сферические" },
  { id: "4", name: "Комбинированные" },
  { id: "5", name: "Конические" },
  { id: "6", name: "Корпусные" },
  { id: "7", name: "Шарнирные" },
];

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Htag color="black" size="small" tag="h2">
        Фильтры
      </Htag>
      <div className={styles.wrapper}>
        <FilterCheckBox name="Количество рядов" items={rowCountIdList} />
      </div>
      <div className={styles.wrapper}>
        <FilterCheckBox name="Тип подшипника" items={bearingDdesignList} />
      </div>
    </aside>
  );
};
