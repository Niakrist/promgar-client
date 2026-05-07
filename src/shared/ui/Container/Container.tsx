import React from "react";
import styles from "./Container.module.css";
import cn from "classnames";

interface IContainerProsp extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  flex?: boolean;
  className?: string;
}

export const Container = ({
  children,
  className,
  flex = false,
}: IContainerProsp) => {
  return (
    <div className={cn(styles.container, { [styles.flex]: flex }, className)}>
      {children}
    </div>
  );
};
