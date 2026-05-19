import { Container, Htag } from "@/shared/ui";
import styles from "./page.module.css";
export default function ProductsPage() {
  return (
    <section>
      <Container>
        <Htag color="black" size="big" tag="h1" className={styles.title}>
          Радиальные шариковые подшипники
        </Htag>
        <div className={styles.wrapper}>
          <aside className={styles.sidebar}>1</aside>
          <article>2</article>
        </div>
      </Container>
    </section>
  );
}
