import React from "react";
import styles from "./Input.module.css";
import cn from "classnames";

export type InputPadding = "s" | "m";

interface IInputProps extends React.ComponentProps<"input"> {
  type: "text" | "email";
  placeholder: string;
  padding: InputPadding;
  className?: string;
  prefixIcon?: React.ReactNode;
  sufixIcon?: React.ReactNode;
  bgColor?: "transparent" | "white";
}

export const Input = ({
  type,
  placeholder,
  className,
  prefixIcon,
  sufixIcon,
  padding,
  bgColor = "transparent",
}: IInputProps) => {
  return (
    <label
      className={cn(
        styles.wrapper,
        {
          [styles.transparent]: bgColor === "transparent",
          [styles.white]: bgColor === "white",
          [styles.s]: padding === "s",
          [styles.m]: padding === "m",
        },
        className,
      )}
    >
      {prefixIcon}
      <input className={styles.input} type={type} placeholder={placeholder} />
      {sufixIcon}
    </label>
  );
};
