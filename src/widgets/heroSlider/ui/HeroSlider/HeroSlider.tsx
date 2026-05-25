import { slides } from "@/shared/config";
import { Button, Container, Icon } from "@/shared/ui";
import styles from "./HeroSlider.module.css";
import Image from "next/image";

export const HeroSlider = () => {
  return (
    <section className={styles.heroSlider}>
      <Container>
        <ul>
          {slides.map((slide, index) => (
            <li
              className={`${styles.wrapper} ${index === 0 ? styles.active : styles.hidden}`}
              key={slide.id}
            >
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
              <Image
                className={styles.img}
                src={`/${slide.images}`}
                alt=""
                fill
                sizes="100vw"
                priority={index === 0}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
