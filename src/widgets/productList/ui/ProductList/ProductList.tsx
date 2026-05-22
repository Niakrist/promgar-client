import { ProductCardLine } from "@/entities";

import styles from "./ProductList.module.css";
import { productList } from "@/entities";

export const ProductList = () => {
  return (
    <ul>
      {productList.map((product) => (
        <li key={product.id} className={styles.item}>
          <ProductCardLine product={product} />
        </li>
      ))}
    </ul>
  );
};
