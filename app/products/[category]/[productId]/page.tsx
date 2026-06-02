import { Container } from "@/shared/ui";
import styles from "./page.module.css";
import {
  ProductGallery,
  ProductInfo,
  ProductPageNav,
  ProductWrapper,
  ProductSpecificationsWrapper,
  ProductDescription,
} from "@/widgets";

import { productList } from "@/entities";
import { AddProductToCart } from "@/features";
import { ProductAnalogWrapper } from "@/widgets/product/productAnalogWrapper/ui/ProductAnalogWrapper/ProductAnalogWrapper";

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
          <ProductDescription />
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <ProductSpecificationsWrapper
            name={productList[1].name}
            specifications={products[0].specifications}
          />
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <ProductAnalogWrapper
            title={productList[1].name}
            products={products}
          />
        </Container>
      </section>
    </>
  );
}
