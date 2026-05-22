"use client";
import { useState } from "react";

import styles from "./Counter.module.css";
import { Icon } from "@/shared/ui";

export const Counter = () => {
  const [count, setCount] = useState("1");
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>
        <Icon name="iconMinus" />
      </button>
      <input
        type="text"
        className={styles.input}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button className={styles.button}>
        <Icon name="iconPlus" />
      </button>
    </div>
  );
};
