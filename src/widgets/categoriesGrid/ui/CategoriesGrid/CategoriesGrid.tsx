import { Container, Htag } from "@/shared/ui";
import styles from "./CategoriesGrid.module.css";
import { categoryList } from "@/entities";
import { CategoryCard } from "../CategoryCard/CategoryCard";

export const CategoriesGrid = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Htag color="black" size="normal" tag="h2" className={styles.title}>
          Категории подшипников
        </Htag>
        <ul className={styles.list}>
          {categoryList.map((category) => (
            <li key={category.id}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
