import { Container, Htag, Icon, Logo } from "@/shared/ui";
import styles from "./FooterTop.module.css";
import Link from "next/link";

export const FooterTop = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.col1}>
          <Logo color="white" />
          <p className={styles.text}>
            Оптовые поставки подшипников SKF, FAG, NSK и др. по РФ
          </p>
        </div>
        <div className="">
          <Htag color="white" size="small" tag="h3" className={styles.title}>
            Продукция
          </Htag>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Шариковые
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Роликовые
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Игольчатые
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Корпусные узлы
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Сферические
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                SKF
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                FAG
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <Htag color="white" size="small" tag="h3" className={styles.title}>
            Информация
          </Htag>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                О компании
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Доставка
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Оплата
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Гарантия и возврат
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Акции
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.col4}>
          <Htag color="white" size="small" tag="h3" className={styles.title}>
            Связаться
          </Htag>
          <ul className={styles.list}>
            <li className={styles.contact}>
              <Icon name="iconPhone" className={styles.icon} />8 800 550-97-40
            </li>
            <li className={styles.contact}>
              <Icon name="iconEmail" className={styles.icon} />
              sales@promgar.ru
            </li>
            <li className={styles.contact}>
              <Icon name="iconGeo" className={styles.icon} />
              Санкт-Петербург, проспект Энергетиков, 4к1
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
