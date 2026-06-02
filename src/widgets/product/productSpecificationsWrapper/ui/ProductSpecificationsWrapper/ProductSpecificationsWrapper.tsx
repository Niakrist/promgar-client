import cn from "classnames";
import styles from "./ProductSpecificationsWrapper.module.css";
import { Htag, WrapperCard } from "@/shared/ui";
import { ISpecification, ProductSpecificationsList } from "@/entities";

interface SpecificationsProps {
  specifications: ISpecification[];
  name: string;
}

export const ProductSpecificationsWrapper = ({
  specifications,
  name,
}: SpecificationsProps) => {
  return (
    <WrapperCard color="white" id="specifications">
      <Htag color="black" size="medium" tag="h2" className={styles.title}>
        Характеристики подшипника {name}
      </Htag>
      <ProductSpecificationsList specifications={specifications} />
    </WrapperCard>
  );
};
