"use client";
import styles from "./Checkbox.module.css";
import cn from "classnames";
import { Icon } from "../Icon/Icon";
import { ComponentProps } from "react";

interface ICheckboxProps extends ComponentProps<"div"> {
  text: string;
  id: string;
  isActive: boolean;
  handleChange: () => void;
  className?: string;
}

export const Checkbox = ({
  text,
  isActive,
  handleChange,
  className,
}: ICheckboxProps) => {
  return (
    <div className={className}>
      <input
        checked={isActive}
        onChange={handleChange}
        id={"test"}
        type="checkbox"
        className={styles.input}
      />
      <label className={styles.label} htmlFor="test">
        <span
          className={cn(styles.checkbox, { [styles.checkboxActive]: isActive })}
        >
          {!!isActive && <Icon name="iconCheck" />}
        </span>
        {text}
      </label>
    </div>
  );
};
