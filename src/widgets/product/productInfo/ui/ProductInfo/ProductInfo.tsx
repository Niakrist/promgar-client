import { ProductSpecifications, ProductTitle } from "@/entities";
import { productList } from "@/entities";
import { IProduct } from "@/entities/product/model/types";

interface IProductInfoProps {
  product: IProduct;
}

export const ProductInfo = ({ product }: IProductInfoProps) => {
  return (
    <div>
      <ProductTitle
        name={product.name}
        brand={product.brand}
        article={product.article}
      />
      <ProductSpecifications
        inD={product.inD}
        h={product.h}
        m={product.m}
        wD={product.wD}
      />
    </div>
  );
};
