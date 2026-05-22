import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";
import Link from "next/link";

export type ButtonPadding = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type ButtonVariant =
  | "primary"
  | "blue"
  | "grayscale"
  | "orange"
  | "white"
  | "border";
export type ButtonTextColor = "white" | "blue" | "black" | "orange";
export type ButtonFontWeight = "normal" | "medium" | "black" | "orange";
export type ButtonFontSize = "small" | "normal" | "big";

interface IButton extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  padding: ButtonPadding;
  textColor: ButtonTextColor;
  variant?: ButtonVariant;
  fw?: ButtonFontWeight;
  fs?: ButtonFontSize;
  className?: string;
  disabled?: boolean;
  full?: boolean;
  prefixIcon?: React.ReactNode;
  sufixIcon?: React.ReactNode;
  href?: string;
}

export const Button = ({
  children,
  padding,
  textColor,
  disabled = false,
  full = false,
  variant = "primary",
  fw = "normal",
  fs = "normal",
  className,
  prefixIcon,
  sufixIcon,
  href,
}: IButton) => {
  const classNames = cn(
    styles.button,
    {
      [styles.xxs]: padding === "xxs",
      [styles.xs]: padding === "xs",
      [styles.sm]: padding === "sm",
      [styles.md]: padding === "md",
      [styles.lg]: padding === "lg",
      [styles.xl]: padding === "xl",
      [styles.xxl]: padding === "xxl",
      [styles.full]: full,
      [styles.primary]: variant === "primary",
      [styles.blue]: variant === "blue",
      [styles.grayscale]: variant === "grayscale",
      [styles.orange]: variant === "orange",
      [styles.white]: variant === "white",
      [styles.border]: variant === "border",
      [styles.whiteText]: textColor === "white",
      [styles.blueText]: textColor === "blue",
      [styles.blackText]: textColor === "black",
      [styles.orangeText]: textColor === "orange",
      [styles.normal]: fw === "normal",
      [styles.medium]: fw === "medium",
      [styles.smallFs]: fs === "small",
      [styles.normalFs]: fs === "normal",
      [styles.bigFs]: fs === "big",
    },
    className,
  );

  const content = (
    <>
      {prefixIcon}
      {children}
      {sufixIcon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classNames}>
        {content}
      </Link>
    );
  } else {
    return (
      <button className={classNames} disabled={disabled}>
        {content}
      </button>
    );
  }
};
