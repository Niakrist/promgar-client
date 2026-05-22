import { Container, Htag } from "@/shared/ui";
import styles from "./page.module.css";
import { Sidebar } from "@/widgets";
import { ProductList } from "@/widgets/productList/ui/ProductList/ProductList";
export default function ProductsPage() {
  return (
    <section className={styles.section}>
      <Container>
        <Htag color="black" size="big" tag="h1" className={styles.title}>
          Радиальные шариковые подшипники
        </Htag>
        <div className={styles.wrapper}>
          <Sidebar />
          <ProductList />
        </div>
      </Container>
    </section>
  );
}
