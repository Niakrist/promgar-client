import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import { Container } from "@/shared/ui";
import {
  ProductGallery,
  ProductInfo,
  ProductPageNav,
  ProductSpecificationsWrapper,
  ProductDescription,
} from "@/widgets";
import { AddProductToCart } from "@/features";
import { ProductList } from "@/entities/product/ui/ProductList/ProductList";
import { Pagination } from "@/features";
import { Sidebar } from "@/widgets";
import { CatalogResponse, IProduct } from "@/entities/types/types";
import styles from "./page.module.css";
import { ProductAnalogWrapper } from "@/widgets/product/productAnalogWrapper/ui/ProductAnalogWrapper/ProductAnalogWrapper";

// Серверная функция получения данных
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

async function getData(path: string): Promise<IProduct | CatalogResponse> {
  const res = await fetch(
    `${API_URL}/products/by-path?path=${encodeURIComponent(path)}`,
  );
  if (!res.ok) {
    if (res.status === 404) notFound();
    throw new Error("Ошибка загрузки");
  }
  return res.json();
}
export default async function CatalogOrProductPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>; // ← теперь Promise
}) {
  const { slug } = await params;
  const path = slug?.join("/") ?? "";
  const data = await getData(path);

  // Если ответ содержит поля товара (slug и title), значит это карточка товара
  if ("slug" in data && "title" in data) {
    const product = data as IProduct;
    const canonicalUrl = product.urls.find((u) => u.isCanonical)?.path ?? "";

    if (path !== canonicalUrl) {
      permanentRedirect(`/catalog/${canonicalUrl}`);
    }

    return (
      <>
        <title>{product.title} — Promgar</title>
        <meta name="description" content={product.description || ""} />
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
              <ProductDescription />
            </Container>
          </section>
        )}

        <section className={styles.product}>
          <Container>
            <ProductSpecificationsWrapper
              name={product.title}
              specifications={null}
            />
          </Container>
        </section>

        <section className={styles.product}>
          <Container>
            <ProductAnalogWrapper
              title={product.title}
              products={[product]} // если есть эндпоинт аналогов, подставьте данные
            />
          </Container>
        </section>
      </>
    );
  }

  // Иначе это категория (список товаров)
  const catalog = data as CatalogResponse;

  return (
    <>
      <title>{catalog.meta?.title}</title>
      <meta name="description" content={catalog.meta?.description} />

      <section className={styles.catalog}>
        <Container>
          <h1 className={styles.title}>
            {catalog.meta?.h1 || "Каталог подшипников"}
          </h1>
          <div className={styles.wrapper}>
            <Sidebar />
            <div>
              <ProductList products={catalog.items} />
              <Pagination />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
