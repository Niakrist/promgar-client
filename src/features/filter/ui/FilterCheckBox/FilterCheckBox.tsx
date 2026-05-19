"use client";
import { CheckBoxFilter, Dropdown } from "@/shared/ui";
import { useState } from "react";

import styles from "./FilterCheckBox.module.css";

interface IFilterCheckBoxProps {
  items: Record<string, string>[];
  name: string;
}

export const FilterCheckBox = ({ items, name }: IFilterCheckBoxProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleChange = (id: string) => {
    setSelectedIds(
      (prev) =>
        prev.includes(id)
          ? prev.filter((item) => item !== id) // убираем id если он уже есть
          : [...prev, id], // добавляем id если его нет
    );
  };

  return (
    <Dropdown name={name}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <CheckBoxFilter
              id={item.id}
              selectedIds={selectedIds}
              onToggle={handleChange}
              text={item.name}
            />
          </li>
        ))}
      </ul>
    </Dropdown>
  );
};
