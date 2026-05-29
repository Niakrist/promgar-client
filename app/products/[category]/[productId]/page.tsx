import { Container } from "@/shared/ui";
import styles from "./page.module.css";
import {
  ProductGallery,
  ProductInfo,
  ProductList,
  ProductPageNav,
  ProductWrapper,
  ProductSpecificationsList,
} from "@/widgets";

import { productList } from "@/entities";
import { AddProductToCart } from "@/features";

export default async function ProductPage({
  params,
}: {
  params: { category: string; productId: string };
}) {
  const { category, productId } = await params;

  const products = productList.filter((_, index) => index < 5);

  return (
    <>
      <section className={styles.section}>
        <Container className={styles.container}>
          <ProductGallery gallery={productList[0].images} />
          <ProductInfo product={productList[0]} />
          <AddProductToCart price={productList[1].price} />
        </Container>
      </section>
      <section className={styles.section}>
        <Container>
          <ProductPageNav />
        </Container>
      </section>
      <section className={styles.section}>
        <Container>
          <ProductWrapper
            color="grey"
            title="Аналоги подшипника"
            name={productList[1].name}
          >
            <ProductList products={products} />
          </ProductWrapper>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <ProductWrapper
            color="white"
            title="Характеристики подшипника"
            name={productList[1].name}
          >
            <ProductSpecificationsList
              specifications={products[0].specifications}
            />
          </ProductWrapper>
        </Container>
      </section>
    </>
  );
}
