import React from "react";
import styles from "./index.module.css";
import { Section } from "../section";

export const Registry = () => {
  return (
    <Section className={styles.container}>
      <h2 className={styles.header}>Registry</h2>
      <p className={styles.text}>
        Your presence is enough of a present to us! For those who are
        persistent, you are welcome to donate to our honeymoon fund on Venmo:
      </p>
      <p className={styles.text}>
        Eric at{" "}
        <a
          className={styles.bold}
          href="https://account.venmo.com/u/eric-liu-3"
          target="_blank"
        >
          @eric-liu-3
        </a>{" "}
        or Angela at{" "}
        <a
          className={styles.bold}
          href="https://account.venmo.com/u/yuena"
          target="_blank"
        >
          @yuena
        </a>
        .
      </p>
    </Section>
  );
};
