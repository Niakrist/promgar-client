import Link from "next/link";
import { Container } from "../Container/Container";
import styles from "./Breadcrumbs.module.css";

const breadcrumbItems = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/catalog/ball-bearings", label: "Шариковые подшипники" },
  { href: "/catalog/radial-single-row", label: "Радиальные однорядные" },
];

export const Breadcrumbs = () => {
  return (
    <Container className={styles.wrapper}>
      <nav>
        <ul className={styles.list}>
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <li key={item.href} className={styles.item}>
                {isLast ? (
                  <span className={styles.current}>{item.label}</span>
                ) : (
                  <>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                    <span className={styles.separator} aria-hidden="true">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
};
