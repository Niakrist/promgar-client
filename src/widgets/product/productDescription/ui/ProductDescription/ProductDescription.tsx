import { Htag, WrapperCard } from "@/shared/ui";
import styles from "./ProductDescription.module.css";

export const ProductDescription = () => {
  return (
    <WrapperCard color="white" id="description">
      <Htag color="black" size="medium" tag="h2">
        Описание
      </Htag>

      <p className={styles.text}>
        Подшипник SKF 6205 — это однорядный радиальный шарикоподшипник, эталон
        надежности в мире промышленности и автосервиса. Модель с маркировкой
        6205 от SKF отличается минимальным уровнем трения, что продлевает срок
        службы вала и снижает энергопотребление привода.
      </p>
      <Htag color="black" tag="h3" size="small" className={styles.title}>
        Технические характеристики (основные габариты):
      </Htag>
      <ol className={styles.text}>
        <li>Внутренний диаметр (d): 25 мм</li>
        <li>Наружный диаметр (D): 52 мм</li>
        <li>Ширина (B): 15 мм</li>
        <li>Вес: 0.128 кг</li>
        <li>
          Материал сепаратора: Штампованная сталь (или полимер в модификациях)
        </li>
      </ol>
      <Htag color="black" tag="h3" size="small" className={styles.title}>
        Преимущества оригинала SKF 6205
      </Htag>
      <p className={styles.text}>
        Сверхчистая сталь. Используемая технология плавки продлевает ресурс
        подшипника на 30-50% по сравнению с аналогами.
      </p>
      <p>
        Оптимизированная геометрия. Обеспечивает низкий уровень шума (особенно
        важно для электродвигателей и бытовой техники).
      </p>
      <p className={styles.text}>
        Защита от износа. Специальная термическая обработка беговых дорожек.
      </p>
      <Htag color="black" tag="h3" size="small" className={styles.title}>
        Где применяется
      </Htag>
      <p className={styles.text}>
        Подшипник SKF 6205 широко используется в насосном оборудовании,
        электродвигателях (размер 25х52х15 — стандарт для моторов мощностью
        1.1-2.2 кВт), сельхозтехнике, автомобильных ступицах (где не требуется
        уплотнение) и конвейерных роликах.
      </p>
    </WrapperCard>
  );
};
