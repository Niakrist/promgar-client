import { Icon } from "@/shared/ui";
import styles from "./CartButton.module.css";
import Link from "next/link";

export const CartButton = () => {
  return (
    <Link href={"/cart"} className={styles.link}>
      <Icon name="iconCart" />
      <p className={styles.text}>Корзина</p>
      <span className={styles.inCart}>5</span>
    </Link>
  );
};
