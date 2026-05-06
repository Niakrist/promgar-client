import React from "react";
import { Icon } from "../Icon/Icon";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Icon name="iconLogo" />
      <div>
        <p className={styles.top}>Промышленная</p>
        <p className={styles.bottom}>гарантия</p>
      </div>
    </div>
  );
};
