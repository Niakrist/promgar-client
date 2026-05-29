"use client";
import { useState } from "react";

import styles from "./Counter.module.css";
import { Icon } from "@/shared/ui";
import cn from "classnames";

interface ICounterProps {
  size: "s" | "m";
}

export const Counter = ({ size }: ICounterProps) => {
  const [count, setCount] = useState("1");
  return (
    <div className={styles.wrapper}>
      <button
        className={cn(styles.button, {
          [styles.small]: size === "s",
          [styles.medium]: size === "m",
        })}
      >
        <Icon name="iconMinus" />
      </button>
      <input
        type="text"
        className={styles.input}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button
        className={cn(styles.button, {
          [styles.small]: size === "s",
          [styles.medium]: size === "m",
        })}
      >
        <Icon name="iconPlus" />
      </button>
    </div>
  );
};
