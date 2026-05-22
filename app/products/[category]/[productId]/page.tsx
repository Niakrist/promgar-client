import { Container, Htag } from "@/shared/ui";
import styles from "./page.module.css";
import { ProductGallery } from "@/widgets";

import { productList } from "@/entities";

export default async function ProductPage({
  params,
}: {
  params: { category: string; productId: string };
}) {
  const { category, productId } = await params;

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <ProductGallery gallery={productList[0].images} />
        <div className="preview">preview</div>
        <div className="order-by">order-by</div>
      </Container>
    </section>
  );
}
