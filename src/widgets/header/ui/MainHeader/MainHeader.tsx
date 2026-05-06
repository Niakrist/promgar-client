import React from "react";
import styles from "./MainHeader.module.css";
import { Button, Container, Icon, Input, Logo } from "@/shared/ui";
import { CartButton } from "@/entities/ui/CartButton/CartButton";

export const MainHeader = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.cont}>
        <Logo />
        <Button
          padding="sm"
          color="white"
          prefixIcon={<Icon name="iconCatalog" />}
        >
          Каталог
        </Button>
        <Input
          type="text"
          placeholder="Введите наименование или артикул"
          sufixIcon={<Icon name="iconSearch" />}
        />
        <Button color="blue" padding="xs" variant="blue">
          Заказать звонок
        </Button>
        <CartButton />
      </Container>
    </div>
  );
};
