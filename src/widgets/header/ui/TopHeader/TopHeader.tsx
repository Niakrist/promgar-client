import React from "react";
import styles from "./TopHeader.module.css";
import { Container, Icon } from "@/shared/ui";
import { topHeaderLinks } from "@/shared/config";
import Link from "next/link";

export const TopHeader = () => {
  return (
    <div className={styles.wrapper}>
      <Container flex>
        <ul className={styles.services}>
          <li className={styles.item}>
            <Icon name="iconPhone" /> <span>8 800 550-97-40</span>
          </li>
          <li className={styles.item}>
            <Icon name="iconEmail" /> <span>sales@promgar.ru</span>
          </li>
        </ul>
        <ul className={styles.services}>
          {topHeaderLinks.map((link) => (
            <Link className={styles.link} key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </ul>
      </Container>
    </div>
  );
};
