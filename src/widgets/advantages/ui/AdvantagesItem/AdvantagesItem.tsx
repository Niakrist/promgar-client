import { AdvantagesList } from "@/shared/constants/advantages-list";
import { Htag, Icon } from "@/shared/ui";
import styles from "./AdvantagesItem.module.css";

interface IAdvantagesItemProps {
  advantageItem: AdvantagesList;
}

export const AdvantagesItem = ({ advantageItem }: IAdvantagesItemProps) => {
  return (
    <>
      <Icon name={advantageItem.iconName} className={styles.icon} />
      <Htag tag="h3" color="black" size="small" className={styles.title}>
        {advantageItem.title}
      </Htag>
      <p className={styles.text}>{advantageItem.description}</p>
    </>
  );
};
