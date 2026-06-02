import { IProduct } from "../../model/types";
import styles from "./ProductSpecificationsList.module.css";
import cn from "classnames";
type SpecificationsProps = Pick<IProduct, "specifications">;

export const ProductSpecificationsList = ({
  specifications,
}: SpecificationsProps) => {
  return (
    <ul className={styles.list}>
      {specifications.map((item, index) => (
        <li
          className={cn(styles.item, { [styles.grayscale]: index % 2 === 0 })}
          key={item.name}
        >
          <p className={styles.left}>{item.name}</p>
          <p className={styles.right}>{item.value}</p>
        </li>
      ))}
    </ul>
  );
};
