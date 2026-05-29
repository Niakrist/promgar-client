import { Container, Htag } from "@/shared/ui";
import styles from "./page.module.css";
import { Sidebar } from "@/widgets";
import { ProductList } from "@/widgets/product/productList/ui/ProductList/ProductList";
import { Pagination } from "@/features";

import { productList } from "@/entities";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;
  return (
    <section className={styles.section}>
      <Container>
        <Htag color="black" size="big" tag="h1" className={styles.title}>
          Радиальные шариковые {category}
        </Htag>
        <div className={styles.wrapper}>
          <Sidebar />
          <div>
            <ProductList products={productList} />
            <Pagination />
          </div>
        </div>
      </Container>
    </section>
  );
}
