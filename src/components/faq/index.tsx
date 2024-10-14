import React from "react";
import { Section } from "@/components/section";
import styles from "./index.module.css";

export const FAQ = () => {
  return (
    <Section className={styles.container}>
      <h2 className={styles.header}>FAQ</h2>

      <div className={styles.qaItem}>
        <h3 className={styles.title}>RSVP deadline</h3>
        <p className={styles.text}>
          Please{" "}
          <a className={styles.bold} href="/rsvp">
            RSVP by January 31st
          </a>
          , so we can have an accurate headcount.
        </p>
      </div>

      <div className={styles.qaItem}>
        <h3 className={styles.title}>Are kids welcome?</h3>
        <p className={styles.text}>Yes. Please let us know in the RSVP form.</p>
      </div>

      <div className={styles.qaItem}>
        <h3 className={styles.title}>
          What kind of weather should we be expecting?
        </h3>
        <p className={styles.text}>
          It will be spring weather in New York at the time so we recommend
          bringing a light jacket. There is also a chance it will be on the
          cooler side so please keep an eye on the weather reports.
        </p>
      </div>

      <div className={styles.qaItem}>
        <h3 className={styles.title}>Is the wedding indoors or outdoors?</h3>
        <p className={styles.text}>
          This will be a dinner with a celebration inside during the whole time,
          however the restaurant will potentially have air conditioning.
        </p>
      </div>

      <div className={styles.qaItem}>
        <h3 className={styles.title}>
          Is it okay to take pictures with our phones and cameras during the
          wedding?
        </h3>
        <p className={styles.text}>
          We&apos;d be thrilled if you take some photos and share them with us!
          We will also hire professional photographers to capture the wedding,
          and we&apos;ll be sure to share the photos and videos with you
          afterward!
        </p>
      </div>

      <div className={styles.qaItem}>
        <h3 className={styles.title}>Any other questions?</h3>
        <p className={styles.text}>
          Feel free to reach out to Angela @{" "}
          <b className={styles.bold}>(267) 808-2368</b> or to Eric @{" "}
          <b className={styles.bold}>(858) 822-9484</b>.
        </p>
      </div>
    </Section>
  );
};
