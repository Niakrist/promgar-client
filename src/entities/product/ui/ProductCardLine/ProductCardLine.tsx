import { Button, Icon } from "@/shared/ui";
import styles from "./ProductCardLine.module.css";
import Link from "next/link";

import { Counter } from "@/entities";
import { IProduct } from "@/entities/types/types";

interface IProductCardLineProps {
  product: IProduct;
  isCart?: boolean;
}

export const ProductCardLine = ({
  product,
  isCart = false,
}: IProductCardLineProps) => {
  return (
    <article className={styles.cardLine}>
      <div className={styles.info}>
        <img
          className={styles.img}
          src={`/${product.images[0]}`}
          alt={`Подшипник ${product.title}`}
        />
        <hgroup className={styles.group}>
          <Link className={styles.link} href={`/catalog/${product.slug}`}>
            Подшипник {product.title}
          </Link>
          <p className={styles.text}>
            {product.brand?.name} • {product.innerDiameterMm}x
            {product.outerDiameterMm}x{product.widthMm}
          </p>
        </hgroup>
      </div>
      <p className={styles.price}>
        {product.price === "по запросу" ? "по запросу" : product.price + " ₽"}
      </p>

      <Counter size="s" />
      {isCart ? (
        <div className={styles.cart}>
          <p className={styles.sum}>10 500 000 ₽</p>
          <button className={styles.button}>
            <Icon name="iconTrash" />
          </button>
        </div>
      ) : (
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
      )}
    </article>
  );
};
