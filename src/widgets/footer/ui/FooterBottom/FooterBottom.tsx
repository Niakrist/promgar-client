import { Container } from "@/shared/ui";
import styles from "./FooterBottom.module.css";
import Link from "next/link";

export const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container flex className={styles.container}>
      <p className={styles.text}>© 2016-{currentYear} promgar.ru</p>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} href={"/"}>
            Политика конфиденциальности
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"/"}>
            Договор оферты
          </Link>
        </li>
      </ul>
    </Container>
  );
};
