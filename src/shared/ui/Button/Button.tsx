import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";

export type ButtonPadding = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type ButtonVariant = "primary" | "grayscale" | "ghost" | "blue";
export type ButtonColor = "white" | "blue" | "black";

interface IButton extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  padding: ButtonPadding;
  color: ButtonColor;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
  full?: boolean;
  prefixIcon?: React.ReactNode;
  sufixIcon?: React.ReactNode;
}

export const Button = ({
  children,
  padding,
  color,
  disabled = false,
  full = false,
  variant = "primary",
  className,
  prefixIcon,
  sufixIcon,
}: IButton) => {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.xs]: padding === "xs",
          [styles.sm]: padding === "sm",
          [styles.md]: padding === "md",
          [styles.lg]: padding === "lg",
          [styles.xl]: padding === "xl",
          [styles.xxl]: padding === "xxl",
          [styles.full]: full,
          [styles.primary]: variant === "primary",
          [styles.blueBg]: variant === "blue",
          [styles.grayscale]: variant === "grayscale",
          [styles.ghost]: variant === "ghost",
          [styles.white]: color === "white",
          [styles.blue]: color === "blue",
          [styles.black]: color === "black",
        },
        className,
      )}
      disabled={disabled}
    >
      {prefixIcon}
      {children}
      {sufixIcon}
    </button>
  );
};
