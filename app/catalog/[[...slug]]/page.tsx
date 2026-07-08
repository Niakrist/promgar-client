'use client'
import { Container } from "@/shared/ui";
import {
  ProductGallery,
  ProductInfo,
  ProductPageNav,
  ProductSpecificationsWrapper,
  ProductDescription,
  ProductAnalogWrapper,
} from "@/widgets";
import { AddProductToCart } from "@/features";
import { ProductList } from "@/entities/product/ui/ProductList/ProductList";
import { Pagination } from "@/features";
import { Sidebar } from "@/widgets";
import styles from "./page.module.css";
import { useParams } from "next/navigation";
import { useGetCatalogQuery } from "@/entities/bearing/api/bearingApi";




export default function CatalogOrProductPage() {
  const params = useParams();
  const slug = (params.slug as string[]) || [];
  const path = slug.join('/');

  const { data, error, isLoading } = useGetCatalogQuery(path || '');

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  // Если бэк вернул type: 'product' – показываем карточку
  if (data?.type === 'product') {
    const product = data.product;
    const canonicalUrl = product.canonicalPath || product.url;

    return (
      <>
        {/* SEO – лучше использовать next/head, но здесь упрощённо */}
        <title>{product.title} — Promgar</title>
        <meta name="description" content={product.description || ''} />
        <link rel="canonical" href={`/catalog/${canonicalUrl}`} />

        <section className={styles.product}>
          <Container className={styles.container}>
            <ProductGallery gallery={product.images} />
            <ProductInfo product={product} />
            <AddProductToCart price={product.price} />
          </Container>
        </section>

        <section className={styles.product}>
          <Container>
            <ProductPageNav />
          </Container>
        </section>

        {product.content && (
          <section className={styles.product}>
            <Container>
              <ProductDescription content={product.content} />
            </Container>
          </section>
        )}

        <section className={styles.product}>
          <Container>
            <ProductSpecificationsWrapper
              name={product.title}
              specifications={product.characteristics}
            />
          </Container>
        </section>

        <section className={styles.product}>
          <Container>
            <ProductAnalogWrapper
              title={product.title}
              products={[product]}
            />
          </Container>
        </section>
      </>
    );
  }

  // Иначе – категория (список товаров)
  const catalog = data; // { data, total, page, limit }


  return (
    <>
      <title>Каталог подшипников</title>
      <meta name="description" content="Каталог подшипников" />

      <section className={styles.catalog}>
        <Container>
          <h1 className={styles.title}>Каталог подшипников</h1>
          <div className={styles.wrapper}>
            <Sidebar />
            <div>
              <ProductList products={catalog?.data || []} />
              <Pagination
                total={catalog?.total}
                page={catalog?.page}
                limit={catalog?.limit}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}