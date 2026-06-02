import { Breadcrumbs, Container, Htag } from "@/shared/ui";
import styles from "./CartPage.module.css";
import { ProductCardLine, productList } from "@/entities";
import { CartOrder } from "@/widgets";

export default function CartPage() {
  const product = productList[0];
  return (
    <>
      <Breadcrumbs />
      <section className={styles.section}>
        <Container>
          <Htag tag="h1" color="black" size="normal" className={styles.title}>
            Корзина
          </Htag>
          <div className={styles.wrapper}>
            <ProductCardLine isCart product={product} />
            <CartOrder />
          </div>
        </Container>
      </section>
    </>
  );
}
