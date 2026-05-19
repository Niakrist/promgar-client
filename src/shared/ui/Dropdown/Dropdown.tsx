"use client";
import React, { ComponentProps, useState } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./Dropdown.module.css";
import cn from "classnames";

interface IDropdownProps extends ComponentProps<"div"> {
  name: string;
  children: React.ReactNode;
}

export const Dropdown = ({ name, children }: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={handleOpen}>
        {name}
        <Icon
          name="iconChevron"
          className={cn(styles.icon, { [styles.isOpen]: isOpen })}
        />
      </button>
      {!!isOpen && children}
    </div>
  );
};
