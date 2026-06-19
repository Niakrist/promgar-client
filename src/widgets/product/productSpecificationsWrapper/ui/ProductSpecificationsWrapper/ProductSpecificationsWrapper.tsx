import cn from "classnames";
import styles from "./ProductSpecificationsWrapper.module.css";
import { Htag, WrapperCard } from "@/shared/ui";
import { ISpecification, ProductSpecificationsList } from "@/entities";
import { IProduct } from "@/entities/types/types";

interface SpecificationsProps {
  attributes: Pick<IProduct, "attributes"> | null;
  name: string;
}

export const ProductSpecificationsWrapper = ({
  attributes,
  name,
}: SpecificationsProps) => {
  return (
    <WrapperCard color="white" id="specifications">
      <Htag color="black" size="medium" tag="h2" className={styles.title}>
        Характеристики подшипника {name}
      </Htag>
      {attributes && <ProductSpecificationsList attributes={attributes} />}
    </WrapperCard>
  );
};
