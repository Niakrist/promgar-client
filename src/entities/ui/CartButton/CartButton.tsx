import { Icon } from "@/shared/ui";
import styles from "./CartButton.module.css";

export const CartButton = () => {
  return (
    <button className={styles.button}>
      <Icon name="iconCart" />
      <p className={styles.text}>Корзина</p>
      <span className={styles.inCart}>5</span>
    </button>
  );
};
