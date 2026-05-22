"use client";
import { Icon } from "@/shared/ui";
import styles from "./Pagination.module.css";
import { useState } from "react";
import cn from "classnames";

const PAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const Pagination = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    console.log("currentIndex: ", currentIndex);
    console.log("index: ", index);
    setCurrentIndex(index);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Icon name="iconPaginationLeft" />
        </li>
        {PAGES.map((page) => (
          <li
            onClick={() => handleClick(page)}
            className={cn(styles.item, {
              [styles.active]: currentIndex === page,
            })}
            key={page}
          >
            {page}
          </li>
        ))}
        <li className={styles.item}>
          <Icon name="iconPaginationRight" />
        </li>
      </ul>
    </nav>
  );
};
