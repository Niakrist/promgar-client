import styles from "./Sidebar.module.css";
import { Button, Htag, Icon } from "@/shared/ui";
import { FilterCheckBox, FilterInputs, FilterRange } from "@/features";

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
      <FilterRange name="Цена, ₽" />
      <FilterRange name="Диаметр внутренний (d), мм" />
      <FilterRange name="Диаметр внешний (D), мм" />
      <FilterRange name="Ширина (В), мм" />
      <FilterCheckBox name="Производитель" items={bearingDdesignList} />
      <FilterCheckBox name="Тело качения" items={bearingDdesignList} />
      <FilterCheckBox name="Количество рядов" items={rowCountIdList} />
      <FilterCheckBox name="Тип подшипника" items={bearingDdesignList} />
      <Button
        className={styles.button}
        padding="md"
        textColor="white"
        variant="primary"
        fw="medium"
        full
      >
        Показать
      </Button>

      <Button
        className={styles.button}
        padding="md"
        textColor="black"
        variant="white"
        fw="medium"
        full
        prefixIcon={<Icon name="iconReset" />}
      >
        Сбросить
      </Button>
    </aside>
  );
};
