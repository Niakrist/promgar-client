import { Container, Htag } from "@/shared/ui";
import styles from "./BrandsList.module.css";
import { brandsList } from "@/entities";
import { BrandCard } from "../BrandCard/BrandCard";

export const BrandsList = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Htag color="black" size="normal" tag="h2" className={styles.title}>
          Категории брендов
        </Htag>
        <ul className={styles.list}>
          {brandsList.map((brand) => (
            <li key={brand.id}>
              <BrandCard brand={brand} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
