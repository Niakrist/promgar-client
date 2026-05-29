import Link from "next/link";
import { IProduct } from "../../model/types";
import styles from "./ProductSpecifications.module.css";

type ProductSpecificationsProps = Pick<IProduct, "inD" | "wD" | "h" | "m">;

export const ProductSpecifications = ({
  inD,
  wD,
  h,
  m,
}: ProductSpecificationsProps) => {
  return (
    <div>
      <p className={styles.title}>Характеристики:</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.name}>Внутренний диаметр (d)</p>
          <span className={styles.separator} />
          <p className={styles.value}>{inD} мм</p>
        </li>
        <li className={styles.item}>
          <p className={styles.name}>Наружный диаметр (D)</p>
          <span className={styles.separator} />
          <p className={styles.value}>{wD} мм</p>
        </li>
        <li className={styles.item}>
          <p className={styles.name}>Ширина (B)</p>
          <span className={styles.separator} />
          <p className={styles.value}>{h} мм</p>
        </li>
        <li className={styles.item}>
          <p className={styles.name}>Масса</p>
          <span className={styles.separator} />
          <p className={styles.value}>{m} кг</p>
        </li>
      </ul>
      <Link className={styles.link} href={"#"}>
        Все характеристики
      </Link>
    </div>
  );
};
