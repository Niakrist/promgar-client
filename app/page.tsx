import { Container } from "@/shared/ui";
import styles from "./page.module.css";
import { HeroSlider } from "@/widgets";

export default function Home() {
  return (
    <section className={styles.heroSlider}>
      <Container>
        <HeroSlider />
      </Container>
    </section>
  );
}
