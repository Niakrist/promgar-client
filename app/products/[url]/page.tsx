import { Container, Htag } from "@/shared/ui";
import styles from "./page.module.css";
import { Sidebar } from "@/widgets";
export default function ProductsPage() {
  return (
    <section className={styles.section}>
      <Container>
        <Htag color="black" size="big" tag="h1" className={styles.title}>
          Радиальные шариковые подшипники
        </Htag>
        <div className={styles.wrapper}>
          <Sidebar />
          <article>2</article>
        </div>
      </Container>
    </section>
  );
}
