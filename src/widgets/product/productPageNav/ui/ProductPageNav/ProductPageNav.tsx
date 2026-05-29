import styles from "./ProductPageNav.module.css";
import { Button } from "@/shared/ui";

export const ProductPageNav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Button
            padding="lg"
            textColor="black"
            variant="white"
            href="#specifications"
          >
            Характеристики
          </Button>
        </li>
        <li>
          <Button
            padding="lg"
            textColor="black"
            variant="white"
            href="#analogues"
          >
            Аналоги
          </Button>
        </li>
        <li>
          <Button
            padding="lg"
            textColor="black"
            variant="white"
            href="#description"
          >
            Описание
          </Button>
        </li>
        <li>
          <Button
            padding="lg"
            textColor="black"
            variant="white"
            href="#delivery-and-payment"
          >
            Доставка и оплата
          </Button>
        </li>
        <li>
          <Button
            padding="lg"
            textColor="black"
            variant="white"
            href="#certificates"
          >
            Сертификаты качества
          </Button>
        </li>
      </ul>
    </nav>
  );
};
