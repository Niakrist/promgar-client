import React from "react";
import styles from "./AddProductToCart.module.css";

import { Button, Icon } from "@/shared/ui";
import { Counter } from "@/entities";
import { IProduct } from "@/entities/types/types";

type AddProductToCartProps = Pick<IProduct, "price">;

export const AddProductToCart = ({ price }: AddProductToCartProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.price}>{price} ₽</p>
      <p className={styles.status}>
        <Icon name="iconInStock" /> В наличие
      </p>
      <div className={styles.cartGroup}>
        <Button
          padding="lg"
          fw="medium"
          textColor="white"
          variant="primary"
          sufixIcon={<Icon name="iconCart" />}
        >
          {" "}
          В корзину
        </Button>
        <Counter size="m" />
      </div>
      <Button padding="md" textColor="black" variant="white" full fw="medium">
        Купить в 1 клик
      </Button>
    </div>
  );
};
