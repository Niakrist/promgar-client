import { Icon } from "@/shared/ui";
import styles from "./BrandCard.module.css";
import Link from "next/link";
import { IBrand } from "@/entities/brand/model/types";

interface IBrandCardProps {
  brand: IBrand;
}

export const BrandCard = ({ brand }: IBrandCardProps) => {
  return (
    <Link href={brand.id} className={styles.item}>
      <p className={styles.name}>{brand.name}</p>
      <p className={styles.count}>{brand.productsCount} товаров</p>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={brand.images} alt="" />
      </div>
      <Icon name="iconArrow" className={styles.iconArrow} />
    </Link>
  );
};
