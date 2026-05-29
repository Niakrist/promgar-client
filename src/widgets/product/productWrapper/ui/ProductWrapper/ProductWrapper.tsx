import { Htag, WrapperCard } from "@/shared/ui";
import styles from "./ProductWrapper.module.css";
import React from "react";
import { IProduct } from "@/entities/product/model/types";

type ProductName = Pick<IProduct, "name">;

interface IAnalogProductsProps extends ProductName {
  children: React.ReactNode;
  title: string;
  color: "white" | "grey";
}

export const ProductWrapper = ({
  children,
  title,
  name,
  color,
}: IAnalogProductsProps) => {
  return (
    <WrapperCard color={color}>
      <Htag className={styles.title} color="black" size="medium" tag="h2">
        {title} {name}
      </Htag>
      {children}
    </WrapperCard>
  );
};
