import React from "react";
import cn from "classnames";
import styles from "./Htag.module.css";

type HTitle = "h1" | "h2" | "h3";
type TitleTextColor = "white" | "black";
type TitleFontSize = "verySmall" | "small" | "medium" | "normal" | "big";

interface IHtagProps extends React.ComponentProps<"h1" | "h2" | "h3"> {
  tag: HTitle;
  color: TitleTextColor;
  size: TitleFontSize;
  children: React.ReactNode;
  className?: string;
}

export const Htag = ({
  tag,
  color,
  size,
  className,
  children,
  ...props
}: IHtagProps) => {
  const classnames = cn(
    styles.title,
    {
      [styles.white]: color === "white",
      [styles.black]: color === "black",
      [styles.small]: size === "small",
      [styles.verySmall]: size === "verySmall",
      [styles.medium]: size === "medium",
      [styles.normal]: size === "normal",
      [styles.big]: size === "big",
    },
    className,
  );
  switch (tag) {
    case "h1":
      return (
        <h1 className={classnames} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={classnames} {...props}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={classnames} {...props}>
          {children}
        </h3>
      );
    default:
      const isExist: never = tag;
      return isExist;
  }
};
