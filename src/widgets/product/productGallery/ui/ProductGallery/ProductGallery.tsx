"use client";
import { useState } from "react";
import styles from "./ProductGallery.module.css";
import cn from "classnames";

export const ProductGallery = ({ gallery }: { gallery: string[] }) => {
  const [isActiveSlide, setIsActiveSlide] = useState(0);

  const handleChangeSlide = (id: number) => {
    setIsActiveSlide(id);
  };

  return (
    <div>
      <div className={styles.bigImgWrapper}>
        <img
          className={styles.bigImg}
          src={`/${gallery[isActiveSlide]}`}
          alt=""
        />
      </div>
      <ul className={styles.list}>
        {gallery.map((img, index) => (
          <li
            key={img}
            className={cn(styles.smallImgWrapper, {
              [styles.active]: isActiveSlide === index,
            })}
            onClick={() => handleChangeSlide(index)}
          >
            <img className={styles.smallImg} src={`/${img}`} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};
