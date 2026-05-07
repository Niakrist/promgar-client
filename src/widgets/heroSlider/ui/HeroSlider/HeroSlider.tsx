import { slides } from "@/shared/config";
import { Button, Icon } from "@/shared/ui";
import React from "react";
import styles from "./HeroSlider.module.css";

export const HeroSlider = () => {
  return (
    <ul>
      {slides.map((slide) => (
        <li className={styles.wrapper} key={slide.id}>
          <div className={styles.content}>
            <h2 className={styles.title}>{slide.title}</h2>
            <p className={styles.description}>{slide.description}</p>
            <Button
              className={styles.button}
              padding="md"
              color="white"
              textColor="white"
              fs="big"
              fw="medium"
              sufixIcon={<Icon name="iconChevronLeft" />}
            >
              {slide.action}
            </Button>
          </div>
          <img className={styles.img} src={slide.images} alt="" />
        </li>
      ))}
    </ul>
  );
};
