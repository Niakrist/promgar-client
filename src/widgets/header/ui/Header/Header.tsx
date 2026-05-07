import React from "react";
import { TopHeader } from "../TopHeader/TopHeader";
import { MainHeader } from "../MainHeader/MainHeader";

import styles from "./Header.module.css";
import { BottomHeader } from "../BottomHeader/BottomHeader";

export const Header = () => {
  return (
    <header className={styles.header}>
      <TopHeader />
      <MainHeader />
      <BottomHeader />
    </header>
  );
};
