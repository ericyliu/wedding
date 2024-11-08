import { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";
import styles from "./index.module.css";

export const Section = forwardRef<
  HTMLDivElement,
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
>(function Section({ children, className, ...props }, ref) {
  return (
    <section
      className={`${styles.container} ${className}`}
      {...props}
      ref={ref}
    >
      {children}
    </section>
  );
});
