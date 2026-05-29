import { ProductCardLine } from "@/entities";

import styles from "./ProductList.module.css";
import { IProduct } from "@/entities/product/model/types";

interface IProductListProps {
  products: IProduct[];
}

export const ProductList = ({ products }: IProductListProps) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} className={styles.item}>
          <ProductCardLine product={product} />
        </li>
      ))}
    </ul>
  );
};
