import styles from "./ProductTitle.module.css";
import { IProduct } from "@/entities/product/model/types";
import { Htag } from "@/shared/ui";
import Link from "next/link";

type ProductTitleProps = Pick<IProduct, "name" | "brand" | "article">;

export const ProductTitle = ({ name, brand, article }: ProductTitleProps) => {
  return (
    <div className={styles.content}>
      <Htag tag="h1" size="normal" color="black" className={styles.title}>
        Подшипник {name} {brand}
      </Htag>
      <div className={styles.article}>
        <p className={styles.text}>
          Артикул <span>{article}</span>
        </p>
        <Link className={styles.link} href="/">
          {brand}
        </Link>
      </div>
    </div>
  );
};
