import { IProduct, ProductList } from "@/entities";
import { Htag, WrapperCard } from "@/shared/ui";
import styles from "./ProductAnalogWrapper.module.css";

interface IProductAnalogWrapperProps {
  products: IProduct[];
  title: string;
}

export const ProductAnalogWrapper = ({
  products,
  title,
}: IProductAnalogWrapperProps) => {
  return (
    <WrapperCard color="grey" padding="p40" id="analogues">
      <Htag color="black" size="medium" tag="h2" className={styles.title}>
        Аналоги подшипника {title}
      </Htag>
      <ProductList products={products} />
    </WrapperCard>
  );
};
