import { bearingHeaderLinks } from "@/shared/config";
import { Button, Container, Icon } from "@/shared/ui";

import styles from "./BottomHeader.module.css";

export const BottomHeader = () => {
  return (
    <Container>
      <ul className={styles.list}>
        {bearingHeaderLinks.map((item, index) => (
          <Button
            padding="md"
            textColor={index === 0 ? "orange" : "black"}
            variant={index === 0 ? "orange" : "grayscale"}
            fs="small"
            key={item.href}
            href={item.href}
          >
            {!!item.name && <Icon name={item.name} />}
            {item.label}
          </Button>
        ))}
      </ul>
    </Container>
  );
};
