import { Icon } from "@/shared/ui";
import styles from "./CategoryCard.module.css";
import { ICategory } from "@/entities/category/model/types";
import Link from "next/link";

interface ICategoryCardProps {
  category: ICategory;
}

export const CategoryCard = ({ category }: ICategoryCardProps) => {
  return (
    <Link href={category.url} className={styles.item}>
      <p className={styles.name}>{category.name}</p>
      <p className={styles.count}>{category.productsCount} товаров</p>
      <img className={styles.img} src={category.images} alt="" />
      <Icon name="iconArrow" className={styles.iconArrow} />
    </Link>
  );
};
