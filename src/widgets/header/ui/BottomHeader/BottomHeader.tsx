import { bearingHeaderLinks } from "@/shared/config";
import { Container, Icon } from "@/shared/ui";
import Link from "next/link";
import styles from "./BottomHeader.module.css";

export const BottomHeader = () => {
  return (
    <Container>
      <ul className={styles.list}>
        {bearingHeaderLinks.map((item) => (
          <Link className={styles.link} key={item.href} href={item.href}>
            {!!item.name && <Icon name={item.name} />}
            {item.label}
          </Link>
        ))}
      </ul>
    </Container>
  );
};
