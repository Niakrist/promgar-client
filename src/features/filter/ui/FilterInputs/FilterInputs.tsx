import { Dropdown, Input } from "@/shared/ui";
import React from "react";
import styles from "./FilterInputs.module.css";

interface IFilterInputsProps {
  name: string;
}

export const FilterInputs = ({ name }: IFilterInputsProps) => {
  return (
    <Dropdown name={name}>
      <div className={styles.wrapper}>
        <Input bgColor="white" padding="s" type="text" placeholder="От" />
        <Input bgColor="white" padding="s" type="text" placeholder="До" />
      </div>
    </Dropdown>
  );
};
