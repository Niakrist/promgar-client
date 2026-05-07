import { Icon } from "../Icon/Icon";
import styles from "./Logo.module.css";
import cn from "classnames";

interface ILogo {
  color?: "white" | "blue";
}
export const Logo = ({ color }: ILogo) => {
  return (
    <div className={styles.logo}>
      <Icon
        name="iconLogo"
        className={cn({
          [styles.blue]: color === "blue",
          [styles.white]: color === "white",
        })}
      />
      <div>
        <p className={cn(styles.top, { [styles.white]: color === "white" })}>
          Промышленная
        </p>
        <p className={cn(styles.bottom, { [styles.white]: color === "white" })}>
          гарантия
        </p>
      </div>
    </div>
  );
};
