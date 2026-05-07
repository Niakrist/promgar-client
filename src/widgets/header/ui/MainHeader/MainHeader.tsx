import { CartButton } from "@/entities";
import styles from "./MainHeader.module.css";
import { Button, Container, Icon, Input, Logo } from "@/shared/ui";
import Link from "next/link";

export const MainHeader = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.cont}>
        <Link href="/">
          <Logo color="blue" />
        </Link>
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
          padding="s"
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
