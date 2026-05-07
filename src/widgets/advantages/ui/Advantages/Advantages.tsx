import { Container, Htag } from "@/shared/ui";
import styles from "./Advantages.module.css";
import { advantagesList } from "@/shared/constants";
import { AdvantagesItem } from "../AdvantagesItem/AdvantagesItem";

export const Advantages = () => {
  return (
    <section>
      <Container>
        <Htag color="black" size="normal" tag="h2" className={styles.title}>
          Преимущества компании
        </Htag>
        <ul className={styles.list}>
          {advantagesList.map((advantageItem) => (
            <li key={advantageItem.id} className={styles.item}>
              <AdvantagesItem advantageItem={advantageItem} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
