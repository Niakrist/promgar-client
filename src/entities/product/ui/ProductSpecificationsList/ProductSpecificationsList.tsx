import { IProduct } from "@/entities/types/types";
import styles from "./ProductSpecificationsList.module.css";
import cn from "classnames";
type SpecificationsProps = Pick<IProduct, "attributes">;

export const ProductSpecificationsList = ({
  attributes,
}: SpecificationsProps) => {
  if (attributes) {
    Object.entries(attributes);
  }

  const obj = {
    name: { key: "1", value: "1" },
  };

  return (
    attributes && (
      <ul className={styles.list}>
        {/* {attributes.map((item, index) => (
          <li
            className={cn(styles.item, { [styles.grayscale]: index % 2 === 0 })}
            key={item.name}
          >
            <p className={styles.left}>{item.name}</p>
            <p className={styles.right}>{item.value}</p>
          </li>
        ))} */}
      </ul>
    )
  );
};
