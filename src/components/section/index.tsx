import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./index.module.css";

export const Section = ({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <section className={`${styles.container} ${className}`} {...props}>
      {children}
    </section>
  );
};
