import { Button, Icon } from "@/shared/ui";
import styles from "./ProductCardLine.module.css";
import Link from "next/link";
import { IProduct } from "../../model/types";
import { Counter } from "@/entities";

interface IProductCardLineProps {
  product: IProduct;
}

export const ProductCardLine = ({ product }: IProductCardLineProps) => {
  return (
    <article className={styles.cardLine}>
      <div className={styles.info}>
        <img
          className={styles.img}
          src={`/${product.img}`}
          alt={`Подшипник ${product.name}`}
        />
        <hgroup className={styles.group}>
          <Link className={styles.link} href="/">
            Подшипник {product.name}
          </Link>
          <p className={styles.text}>
            {product.brand} • {product.inD}x{product.wD}x{product.h}
          </p>
        </hgroup>
      </div>
      <p className={styles.price}>
        {product.price === "по запросу"
          ? "по запросу"
          : product.price + " руб"}{" "}
      </p>

      <Counter />
      <div className={styles.buttonGroup}>
        <Button
          textColor="blue"
          variant="blue"
          padding="xs"
          fw="medium"
          fs="small"
        >
          Купить в 1 клик
        </Button>
        <Button variant="primary" padding="xxs" textColor="white">
          <Icon name="iconCart" className={styles.icon} />
        </Button>
      </div>
    </article>
  );
};
