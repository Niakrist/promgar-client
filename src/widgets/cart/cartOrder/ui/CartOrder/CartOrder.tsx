"use client";
import { Button, Checkbox, Htag, Icon, Input, WrapperCard } from "@/shared/ui";
import styles from "./CartOrder.module.css";
import { useState } from "react";

export const CartOrder = () => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <aside className={styles.cartOrder}>
        <Htag color="black" size="small" tag="h2" className={styles.title}>
          Ваш заказ
        </Htag>
        <div className={styles.item}>
          <p className={styles.cartInfo}>Итого товаров</p>
          <span className={styles.separator} />
          <p className={styles.cartInfo}>10 шт</p>
        </div>

        <div className={styles.item}>
          <p className={styles.cartInfo}>Под заказ товаров</p>
          <span className={styles.separator} />
          <p className={styles.cartInfo}>5 шт</p>
        </div>

        <div className={styles.itemPrice}>
          <p className={styles.cartPrice}>К оплате:</p>
          <span className={styles.separator} />
          <p className={styles.cartPrice}>1 200 480 ₽</p>
        </div>
        <form action="" className={styles.form}>
          <Input padding="s" type="text" placeholder="Имя" bgColor="white" />
          <Input
            padding="s"
            type="text"
            placeholder="Телефон"
            bgColor="white"
          />
          <Input
            padding="s"
            type="email"
            placeholder="E-mail"
            bgColor="white"
          />
          <Button textColor="white" padding="md" full type="submit">
            Оформить заказ
          </Button>
        </form>
        <Button
          padding="md"
          textColor="black"
          variant="white"
          full
          type="button"
        >
          Запросить счёт
        </Button>
        <Checkbox
          className={styles.checkbox}
          checked={isActive}
          onChange={handleChange}
          id="agree"
          text="Я согласен на обработку персональных данных"
        />
      </aside>

      <WrapperCard color="border" padding="p20" className={styles.wrapperCard}>
        <Icon name="iconBox" className={styles.icon} />
        <div className={styles.content}>
          <Htag
            color="black"
            size="small"
            tag="h3"
            className={styles.titleSmall}
          >
            Условия доставки
          </Htag>
          <p className={styles.text}>
            Срок доставки зависит от условий заказа (объема продукции и
            удаленности региона) и обсуждается с менеджером при оформлении
            заказа.
          </p>
        </div>
      </WrapperCard>

      <WrapperCard color="border" padding="p20" className={styles.wrapperCard}>
        <Icon name="iconSupport" className={styles.icon} />
        <div className={styles.content}>
          <Htag
            color="black"
            size="small"
            tag="h3"
            className={styles.titleSmall}
          >
            Помощь менеджера
          </Htag>
          <p className={styles.text}>
            Срок доставки зависит от условий заказа (объема продукции и
            удаленности региона) и обсуждается с менеджером при оформлении
            заказа.
          </p>
        </div>
      </WrapperCard>
    </div>
  );
};
