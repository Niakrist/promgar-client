import { Container, Htag, Icon } from "@/shared/ui";
import styles from "./Subscribe.module.css";
import { ConsentForm } from "@/features";
export const Subscribe = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Htag tag="h2" color="black" size="normal" className={styles.title}>
              Подписаться на уведомления
            </Htag>
            <p className={styles.text}>Полезные новости и акции</p>
          </div>
          <div className="">
            <ConsentForm />
          </div>
          <Icon name="iconTelegram" className={styles.iconTelegram} />
        </div>
      </Container>
    </section>
  );
};
