import React from "react";
import styles from "./Input.module.css";

interface IInputProps extends React.ComponentProps<"input"> {
  type: "text" | "email";
  placeholder: string;
  className?: string;
  prefixIcon?: React.ReactNode;
  sufixIcon?: React.ReactNode;
}

export const Input = ({
  type,
  placeholder,
  className,
  prefixIcon,
  sufixIcon,
}: IInputProps) => {
  return (
    <label className={styles.wrapper}>
      {prefixIcon}
      <input className={styles.input} type={type} placeholder={placeholder} />
      {sufixIcon}
    </label>
  );
};
