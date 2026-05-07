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
          textColor="white"
          fw="medium"
          prefixIcon={<Icon name="iconCatalog" />}
        >
          Каталог
        </Button>
        <Input
          type="text"
          placeholder="Введите наименование или артикул"
          sufixIcon={<Icon name="iconSearch" />}
        />
        <Button
          textColor="blue"
          fw="medium"
          fs="small"
          padding="xs"
          variant="blue"
        >
          Заказать звонок
        </Button>
        <CartButton />
      </Container>
    </div>
  );
};
