import { IProduct } from "@/entities/types/types";
import styles from "./ProductTitle.module.css";

import { Htag } from "@/shared/ui";
import Link from "next/link";

type ProductTitleProps = Pick<IProduct, "title" | "brand" | "slug">;

export const ProductTitle = ({ title, brand, slug }: ProductTitleProps) => {
  return (
    <div className={styles.content}>
      <Htag tag="h1" size="normal" color="black" className={styles.title}>
        Подшипник {title} {brand?.name}
      </Htag>
      <div className={styles.article}>
        <p className={styles.text}>
          Артикул <span>{slug}</span>
        </p>
        <Link className={styles.link} href="/">
          {brand?.name}
        </Link>
      </div>
    </div>
  );
};
