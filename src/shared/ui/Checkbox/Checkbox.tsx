"use client";
import styles from "./Checkbox.module.css";
import cn from "classnames";
import { Icon } from "../Icon/Icon";
import { ComponentProps } from "react";

interface ICheckboxProps extends ComponentProps<"div"> {
  text: string;
  id?: string;
  checked: boolean;
  onChange: () => void;
  className?: string;
}

export const Checkbox = ({
  text,
  id,
  checked,
  onChange,
  className,
}: ICheckboxProps) => {
  return (
    <div className={className}>
      <input
        checked={checked}
        onChange={onChange}
        id={id}
        type="checkbox"
        className={styles.input}
      />
      <label className={styles.label} htmlFor={id || "checkbox"}>
        <span
          className={cn(styles.checkbox, { [styles.checkboxActive]: checked })}
        >
          {checked && <Icon name="iconCheck" />}
        </span>
        {text}
      </label>
    </div>
  );
};
