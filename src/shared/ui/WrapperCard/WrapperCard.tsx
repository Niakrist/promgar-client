import React, { ComponentProps } from "react";
import styles from "./WrapperCard.module.css";
import cn from "classnames";

interface IWrapperCardProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  color: "white" | "grey";
  padding?: "p40";
}

export const WrapperCard = ({
  children,
  color,
  padding,
  className,
  ...props
}: IWrapperCardProps) => {
  return (
    <div
      className={cn(
        styles.card,
        { [styles.white]: color === "white" },
        { [styles.grey]: color === "grey" },
        { [styles.p40]: padding === "p40" },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
