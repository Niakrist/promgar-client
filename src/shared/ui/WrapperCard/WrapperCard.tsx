import React from "react";
import styles from "./WrapperCard.module.css";
import cn from "classnames";

interface IWrapperCardProps {
  children: React.ReactNode;
  color: "white" | "grey";
}

export const WrapperCard = ({ children, color }: IWrapperCardProps) => {
  return (
    <div
      className={cn(
        styles.card,
        { [styles.white]: color === "white" },
        { [styles.grey]: color === "grey" },
      )}
    >
      {children}
    </div>
  );
};
