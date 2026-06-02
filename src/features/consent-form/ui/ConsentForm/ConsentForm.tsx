"use client";
import { Button, Checkbox, Input } from "@/shared/ui";
import { useState } from "react";
import styles from "./ConsentForm.module.css";
export const ConsentForm = () => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.wrapper}>
      <Input
        type="text"
        placeholder="Ваш e-mail"
        padding="m"
        bgColor="white"
        className={styles.input}
      />
      <Button
        textColor="white"
        padding="xxl"
        className={styles.button}
        disabled={!isActive}
      >
        Подписаться
      </Button>
      <Checkbox
        className={styles.checkbox}
        checked={isActive}
        onChange={handleChange}
        id="agree"
        text="Я согласен на обработку персональных данных"
      />
    </div>
  );
};
